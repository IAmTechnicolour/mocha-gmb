


//Timer
var TimerEnabled = 0; 					//Is the timer enabled?
var TimerCounter = 1024;  				//The number of cycles per timer incriment
var TimerCycles   = 0;					//The cycle counter for timers
var TimerBase = 0; 						//The timer base, when timer overflows it resets itself to this.
var Timer = 0;							//The timer itself
var TimerTable = [1024, 16, 64, 256]; 	//Cheaper than doing it mathematically, I guess. 

//Divider Timer (Incriments every 256 cycles, no interupt)
var DividerCycles = 0; 					//The cycle counter for the Divider
var Divider = 0;						//Easier to store it in a variable than in memory. 


function bootTimers() {
	TimerEnabled = 0; 		
	TimerCounter = 1024;  	
	TimerCycles   = 0;		
	TimerBase = 0; 			
	Timer = 0;		

	DividerCycles = 0; 		
	Divider = 0;				
}



MRead[ 0xFF04 ] = function( addr ) { return Divider; }			//Divider
MRead[ 0xFF05 ] = function( addr ) { return Timer; }			//Timer
MRead[ 0xFF06 ] = function( addr ) { return TimerBase; }		//What the timer resets to
MRead[ 0xFF07 ] = function( addr ) { return IO[ 0xFF07 ]; } 	//Timer control register

MWrite[ 0xFF04 ] = function( addr, data ) { Divider = 0; }		//Divider reset to 0 when written to
MWrite[ 0xFF05 ] = function( addr, data ) { Timer = data; }		//Set timer
MWrite[ 0xFF06 ] = function( addr, data ) { TimerBase = data; }	//Set timer base
MWrite[ 0xFF07 ] = function( addr, data ) {
	IO[ 0xFF07 ] = data & 7; 									//First 3 bits, the timer control register can be read as well as written to. 
	TimerCounter = TimerTable[ data & 3 ];						//bits 0 and 1 set the timer rate
	TimerEnabled = data & 4;									//bit 2 enables the timer, doesn't matter what value it is so long as it's 0 or not 0 
}




function updateTimers() {

	DividerCycles+= Cycle;
	if ( DividerCycles > 255 ) {
		Divider = (Divider + 1) & 0xFF;
		DividerCycles-= 256;
	}

	if ( TimerEnabled ) {
		TimerCycles+= Cycle;
		if ( TimerCycles > TimerCounter ) {
			Timer++;
			TimerCycles-= TimerCounter;
			if ( Timer > 255 ) {					//When Timer (TIMA) overflows we alert the program by enabling the timer interupt bit, the timer is reset
				Timer = TimerBase;
				IF|= 4;
			}
		}
	}

}
