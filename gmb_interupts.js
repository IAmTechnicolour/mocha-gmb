



var IE = 0;
var IF = 0;


function bootInterupts() {
	IE = 0 //Interupt Enable Register: Bit0 = VBlank, Bit1 = LCD, Bit2 = Timer, Bit4 = Joypad
	IF = 0 //Interupt Request Register
}

//Interupt Enable
MRead[ 0xFFFF ] = function( addr ) { return IE; }
MWrite[ 0xFFFF ] = function( addr, data ) { IE = data & 0x1F; }

//Interupt Request
MRead[ 0xFF0F ] = function( addr ) { return IF; }
MWrite[ 0xFF0F ] = function( addr, data ) { IF = data & 0x1F; }




function updateInterupts() {

	if (IME || Halt) {
		if ( IE & IF & 1 ) { //VBlank interrupt
			
			IME = 0;
			Halt = 0;
			IF&= 254;

			SP-= 2;
			Write(SP + 1, PC >> 8);
			Write(SP, PC & 0xFF);

			PC = 0x40;

		}else if ( IE & IF & 2 ) { //LCD Interrupt

			IME = 0;
			Halt = 0;
			IF&= 253;

			SP-= 2;
			Write(SP + 1, PC >> 8);
			Write(SP, PC & 0xFF);

			PC = 0x48;

		}else if ( IE & IF & 4 ) { //TImer Interrupt

			IME = 0;
			Halt = 0;
			IF&= 251;

			SP-= 2;
			Write(SP + 1, PC >> 8);
			Write(SP, PC & 0xFF);

			PC = 0x50;

		}else if ( IE & IF & 8 ) { //Serial Port

			IME = 0;
			Halt = 0;
			IF&= 247;

			SP-= 2;
			Write(SP + 1, PC >> 8);
			Write(SP, PC & 0xFF);

			PC = 0x58;

		}else if ( IE & IF & 16 ) { //Joy Interrupt

			IME = 0;
			Halt = 0;
			IF&= 239;

			SP-= 2;
			Write(SP + 1, PC >> 8);
			Write(SP, PC & 0xFF);

			PC = 0x60;

		}
	}
}


