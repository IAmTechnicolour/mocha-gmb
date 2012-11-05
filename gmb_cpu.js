var A = 0;
var F = 0;
var B = 0;
var C = 0;
var D = 0;
var E = 0;
var H = 0;
var L = 0;

var SP = 0;
var PC = 0;

var IME = 0;
var Halt = 0;
var Stop = 0;

var Cycle = 0;
var TotalCycles = 0;





function boot() {
	A = 0;
	F = 0;
	B = 0;
	C = 0;
	D = 0;
	E = 0;
	H = 0;
	L = 0;

	SP = 0;
	PC = 0;

	IME = 0;
	Halt = 0;
	Stop = 0;

	Cycle = 0;
	TotalCycles = 0;

	bootTimers();
}

/*
The Execution Loop is equivilent to one frame of operation, in theory. 
In practice it's virtually impossible to sync the Gameboy refresh rate with the user refreshrate.
*/

function executionLoop() {

	while (TotalCycles < 70224) {
		if (!Halt) {
			Operators[Read(PC)]();
		}else{
			Cycle = 4;
		}

		TotalCycles+= Cycle;

		updateTimers();
		updateLCD();
		updateInterupts();

	}

	TotalCycles-= 70224;
	
	GPUDraw("canvas1", 0x9800, 1);
	GPUDraw("canvas2", 0x9800, 0);
	GPUDraw("canvas3", 0x9C00, 1);
	GPUDraw("canvas4", 0x9C00, 0);
}

