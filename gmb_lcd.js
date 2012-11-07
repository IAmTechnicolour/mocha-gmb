
//Internal Registers
var Mode = 0;
var ScanCycle = 0;



//LCD Control Register
var LCDEnable = 0;
var WindowMap = 0x9800;
var WindowEnable = 0;
var TileData = 0;
var BGMap = 0x9800;
var SpriteSize = 0;
var SpriteEnable = 0;
var BGEnable = 0;

//Interupts
var CoincidenceInterupt = 0;
var ModeTwoInterupt = 0;
var ModeOneInterupt = 0;
var ModeZeroInterupt = 0;



//Other Registers
var ScanlineY = 0;
var CompareY = 0;

function bootLCD() {


}









//Current Scanline Register
MRead[ 0xFF44 ] = function(addr) { return ScanlineY; }
MWrite[ 0xFF44 ] = function(addr, data) { ScanlineY = 0; } //Reset Scanline

//LY Compare
MRead[ 0xFF45 ] = function(addr) { return CompareY; }
MWrite[ 0xFF45 ] = function( addr, data ) { CompareY = data; }

//LCD Control Register
MRead[ 0xFF40 ] = function(addr) { return IO[addr]; }
MWrite[ 0xFF40 ] = function(addr, data) {

	IO[addr] = data;

	LCDEnable 		= data & 128;
	WindowMap 		= ( (data & 64) ? 0x9C00 : 0x9800);
	WindowEnable 	= data & 32;
	TileData 		= data & 16;
	BGMap 			= ( (data & 8) ? 0x9C00 : 0x9800);
	SpriteSize 		= data & 4;
	SpriteEnable 	= data & 2;
	BGEnable 		= data & 1;
}

//LCD Status Regiter
MRead[ 0xFF41 ] = function(addr) {
	return ( CoincidenceInterupt + ModeTwoInterupt + ModeOneInterupt + ModeZeroInterupt + (CompareY == ScanlineY ? 4 : 0) + Mode );
}

MWrite[ 0xFF41 ] = function(addr, data) {
	CoincidenceInterupt = data & 64;
	ModeTwoInterupt 	= data & 32;
	ModeOneInterupt 	= data & 16;
	ModeZeroInterupt	= data & 8;
}

























function updateLCD() {
	if (LCDEnable) {

		ScanCycle+= Cycle;

		if (ScanCycle > 456) {
			ScanCycle-= 456;
			ScanlineY = ( ScanlineY + 1 )%154;
		}

		if (ScanlineY >= 144 && ScanlineY <= 153) { //vblank
			if (Mode != 1) {
				if (ModeOneInterupt) { IF|= 2; }; 	//request LCD interupt for entering Mode 1
				IF|= 1; 						//Reques VBlank interupt
				Mode = 1;
			}

		}else if (ScanlineY >= 0 && ScanlineY <= 143) { //not vblank

			if (ScanCycle >= 0 && ScanCycle <= 80) {
				if (Mode != 2) {
					if (ModeTwoInterupt) { IF|= 2; }; //request LCD interupt for entering Mode 2
					Mode = 2;
				}

			}else if (ScanCycle >= 81 && ScanCycle <= 252) {
				if (Mode != 3) { Mode = 3; }

			}else if (ScanCycle >= 253 && ScanCycle <= 456) {
				if (Mode != 0) {
					gpu_render();
					if (ModeZeroInterupt) { IF|= 2; }; //request LCD interupt for entering Mode 0
					Mode = 0;
				}
			}
		}

	}else{
		ScanlineY = 0;
		ScanCycle = 0;
		Mode = 0;
	}


	if (ScanlineY == CompareY && CoincidenceInterupt) {
		IF|= 2;		//request LCD interupt for scanline coincidence. 
	}
}
