//Memory Locations, yes the gameboy has a very complex memory model.

var ROM = [];	//Cart
var BIOS = [];	//BIOS
var VRAM = [];	//Video ram
var WRAM = [];	//Main Work ram
var HRAM = [];	//High speed ram
var ERAM = [];	//External Cart ram
var IO = []; //Memory Mapped Hardware 
var OAM = []; //Sprite ram

for( i = 0x0000; i <= 0xFFFF; i++) {
	VRAM[i] = 0;
	WRAM[i] = 0;
	HRAM[i] = 0;
	ERAM[i] = 0;
	IO[i] = 0;
	OAM[i] = 0;
}
 
//Memory and cart registerss, used for things like rael time clocks, bank switching, enaabling the bios...

var EnableBios = 1; //Is the bios enabled?
var CartMode = 0; 	//What mode does the cart use?
var RomBank = 0;	//What bank in Rom does rom space 1 map to? (rom space 0 always points to bank 0), this is the addative offset, ie bank 1 = 0, bank 2 = 0x4000, bank 3 = 0x8000, etc
var ERamBank = 0;	//What bank in external ram does the eram memory map to?

var MBC = 0;
var NumberRomBanks = 0;
var NumberRamBanks = 0;
var CartTimerEnable = 0;
var CartRamEnable = 0;


var BIOS = [
	0x31, 0xFE, 0xFF, 0xAF, 0x21, 0xFF, 0x9F, 0x32, 0xCB, 0x7C, //0
	0x20, 0xFB, 0x21, 0x26, 0xFF, 0x0E, 0x11, 0x3E, 0x80, 0x32, //10
	0xE2, 0x0C, 0x3E, 0xF3, 0xE2, 0x32, 0x3E, 0x77, 0x77, 0x3E, //20
	0xFC, 0xE0, 0x47, 0x11, 0x04, 0x01, 0x21, 0x10, 0x80, 0x1A, //30
	0xCD, 0x95, 0x00, 0xCD, 0x96, 0x00, 0x13, 0x7B, 0xFE, 0x34, //40
	0x20, 0xF3, 0x11, 0xD8, 0x00, 0x06, 0x08, 0x1A, 0x13, 0x22, //50
	0x23, 0x05, 0x20, 0xF9, 0x3E, 0x19, 0xEA, 0x10, 0x99, 0x21, //60
	0x2F, 0x99, 0x0E, 0x0C, 0x3D, 0x28, 0x08, 0x32, 0x0D, 0x20, //70
	0xF9, 0x2E, 0x0F, 0x18, 0xF3, 0x67, 0x3E, 0x64, 0x57, 0xE0, //80
	0x42, 0x3E, 0x91, 0xE0, 0x40, 0x04, 0x1E, 0x02, 0x0E, 0x0C, //90
	0xF0, 0x44, 0xFE, 0x90, 0x20, 0xFA, 0x0D, 0x20, 0xF7, 0x1D, //100
	0x20, 0xF2, 0x0E, 0x13, 0x24, 0x7C, 0x1E, 0x83, 0xFE, 0x62, //
	0x28, 0x06, 0x1E, 0xC1, 0xFE, 0x64, 0x20, 0x06, 0x7B, 0xE2, //
	0x0C, 0x3E, 0x87, 0xE2, 0xF0, 0x42, 0x90, 0xE0, 0x42, 0x15, //
	0x20, 0xD2, 0x05, 0x20, 0x4F, 0x16, 0x20, 0x18, 0xCB, 0x4F, //
	0x06, 0x04, 0xC5, 0xCB, 0x11, 0x17, 0xC1, 0xCB, 0x11, 0x17, //
	0x05, 0x20, 0xF5, 0x22, 0x23, 0x22, 0x23, 0xC9, 0xCE, 0xED, //
	0x66, 0x66, 0xCC, 0x0D, 0x00, 0x0B, 0x03, 0x73, 0x00, 0x83, //
	0x00, 0x0C, 0x00, 0x0D, 0x00, 0x08, 0x11, 0x1F, 0x88, 0x89, //
	0x00, 0x0E, 0xDC, 0xCC, 0x6E, 0xE6, 0xDD, 0xDD, 0xD9, 0x99, //
	0xBB, 0xBB, 0x67, 0x63, 0x6E, 0x0E, 0xEC, 0xCC, 0xDD, 0xDC, //
	0x99, 0x9F, 0xBB, 0xB9, 0x33, 0x3E, 0x3C, 0x42, 0xB9, 0xA5, //
	0xB9, 0xA5, 0x42, 0x3C, 0x21, 0x04, 0x01, 0x11, 0xA8, 0x00, //
	0x1A, 0x13, 0xBE, 0x20, 0xFE, 0x23, 0x7D, 0xFE, 0x34, 0x20, //
	0xF5, 0x06, 0x19, 0x78, 0x86, 0x23, 0x05, 0x20, 0xFB, 0x86, //
	0x20, 0xFE, 0x3E, 0x01, 0xE0, 0x50
];

var MRead = [];
var MWrite = [];









ReadBiosSpace = function(addr) { return (EnableBios ? BIOS[addr] : ROM[addr]); }
ReadRomZero = function(addr) { return ROM[addr]; }
ReadRomOne = function(addr) { return ROM[addr + RomBank*0x4000]; }

ReadVideoRam = function(addr) { return VRAM[addr]; }
ReadExternalRam = function(addr) {
	if (CartRamEnable) {
		switch(MBC) {
			case 3:
				return ERAM[addr + RamBank*0x2000];
				break;
		}
	}
}
ReadWorkRam = function(addr) { return WRAM[addr]; }
ReadEchoRam = function(addr) { return WRAM[addr - 0x2000]; }
ReadSpriteRam = function(addr) {return OAM[addr]; }
ReadIO = function(addr) { return IO[addr]; }
ReadHighRam = function(addr) { return HRAM[addr]; }

for( i = 0x0000; i <= 0x00FF; i++) { MRead[i] = ReadBiosSpace; }
for( i = 0x0100; i <= 0x3FFF; i++) { MRead[i] = ReadRomZero; }
for( i = 0x4000; i <= 0x7FFF; i++) { MRead[i] = ReadRomOne; }

for( i = 0x8000; i <= 0x9FFF; i++) { MRead[i] = ReadVideoRam; }
for( i = 0xA000; i <= 0xBFFF; i++) { MRead[i] = ReadExternalRam; }
for( i = 0xC000; i <= 0xDFFF; i++) { MRead[i] = ReadWorkRam; }
for( i = 0xE000; i <= 0xFDFF; i++) { MRead[i] = ReadEchoRam; }
for( i = 0xFE00; i <= 0xFE9F; i++) { MRead[i] = ReadSpriteRam; }

for( i = 0xFF00; i <= 0xFF7F; i++) { MRead[i] = ReadIO; }
for( i = 0xFF80; i <= 0xFFFE; i++) { MRead[i] = ReadHighRam; }


function Read(addr) {
	if (MRead[addr] != undefined) {
		return MRead[addr](addr);
	}else{ //This can be deleted once debugging is done, honestly, this entire function could probably be put inline.
		alert("No function READ defined for: " + addr.toString(16));
		return 0;
	}
}





WriteCartEnable = function(addr, data) {
	switch(MBC) {
		case 3:
			CartRamEnable = 1;
			break;
	}

}
WriteCartRomBank = function(addr, data) {

	switch(MBC) {
		case 0: //ROM
			RomBank = 0;
			break; 
		case 3: //MBC3
			RomBank = (data&NumberRomBanks) - 1;
			if (RomBank == -1) {RomBank = 0;};
			break;
	
	}

}


WriteCartRamBank = function(addr, data) {

	switch(MBC) {
		case 3: //MBC3
			RamBank = (data&NumberRamBanks);
			break;
	
	}



}
WrteCartModeSelect = function(addr, data) {}




WriteVideoRam = function(addr, data) { VRAM[addr] = data; }
WriteExternalRam = function(addr, data) {}
WriteWorkRam = function(addr, data) { WRAM[addr] = data; }
WriteEchoRam = function(addr, data) { WRAM[addr - 0x2000] = data; }
WriteSpriteRam = function(addr, data) { OAM[addr] = data; }
WriteIO = function(addr, data) { IO[addr] = data; }
WriteHighRam = function(addr, data) { HRAM[addr] = data; }
WriteNothing = function(addr, data) {}


for( i = 0x0000; i <= 0x1FFF; i++) { MWrite[i] = WriteCartEnable; }
for( i = 0x2000; i <= 0x3FFF; i++) { MWrite[i] = WriteCartRomBank; }
for( i = 0x4000; i <= 0x5FFF; i++) { MWrite[i] = WriteCartRamBank; }
for( i = 0x6000; i <= 0x7FFF; i++) { MWrite[i] = WrteCartModeSelect; }

for( i = 0x8000; i <= 0x9FFF; i++) { MWrite[i] = WriteVideoRam; }
for( i = 0xA000; i <= 0xBFFF; i++) { MWrite[i] = WriteExternalRam; }
for( i = 0xC000; i <= 0xDFFF; i++) { MWrite[i] = WriteWorkRam; }
for( i = 0xE000; i <= 0xFDFF; i++) {}
for( i = 0xFE00; i <= 0xFE9F; i++) { MWrite[i] = WriteSpriteRam; }
for( i = 0xFEA0; i <= 0xFEFF; i++) { MWrite[i] = WriteNothing; }
for( i = 0xFF00; i <= 0xFF7F; i++) { MWrite[i] = WriteIO; }
for( i = 0xFF80; i <= 0xFFFE; i++) { MWrite[i] = WriteHighRam; }


function Write(addr, data) {
	if (MWrite[addr] != undefined) {
		MWrite[addr](addr, data);
	}else{ //This can be deleted once debugging is done, honestly, this entire function could probably be put inline.
		alert("No function WRITE defined for: " + addr.toString(16));
	}
}













//Special things

//Disable Bios
MRead[0xFF50] = function(addr) { return 0; }
MWrite[0xFF50] = function(addr, data) { EnableBios = 0; }



//DMA transfer
MRead[ 0xFF46 ] = function(addr) { return 0; }

MWrite[ 0xFF46 ] = function(addr, data) {
	data<<= 8;

	for(var n = 0; n <= 0xA0; n++) {
		OAM[ 0xFE00 + n ] = Read( data + n );
	}
}






