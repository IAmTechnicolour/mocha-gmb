
/* These functions are for reading and writing to registers, virtual registers, and flags, once the CPU is 100% bug-free these should
all be removed and put inline in gmb_opcodes.js and gmb_cb_opcodes.js */

function Zero() 	{ return !!(F & 0x80); }
function Sub() 		{ return !!(F & 0x40); }
function HCarry() 	{ return !!(F & 0x20); }
function Carry() 	{ return !!(F & 0x10); }

function SetZero(val) 	{ F = ( F & ~0x80 ) + val * 0x80; }
function SetSub(val) 	{ F = ( F & ~0x40 ) + val * 0x40; }
function SetHCarry(val) { F = ( F & ~0x20 ) + val * 0x20; }
function SetCarry(val) 	{ F = ( F & ~0x10 ) + val * 0x10; }


function AF() { return (A << 8) + F; }
function BC() { return (B << 8) + C; }
function DE() { return (D << 8) + E; }
function HL() { return (H << 8) + L; }

function SetAF(val) {
	A = (val & 0xFF00) >> 8;
	F = val & 0x00FF;
}

function SetBC(val) {
	B = (val & 0xFF00) >> 8;
	C = val & 0x00FF;
}

function SetDE(val) {
	D = (val & 0xFF00) >> 8;
	E = val & 0x00FF;
}

function SetHL(val) {
	H = (val & 0xFF00) >> 8;
	L = val & 0x00FF;
}

// Reads will get overwritten by the memory module






/* These functions are for specific sets of opcodes, once the CPU is bug-free these should be integrated into the opcode functions themselves
for performance reasons. */


//16 Bit Arithmatic
function WordInc(val) {
	PC+= 1;
	Cycle = 8;
	return (val + 1) & 0xFFFF;
}

/* How this can work once they're inline: 
Operators[whatever] = function () {
	PC+= 1;
	Cycle = 8;
	B+= 1;
	if (B > 0xFF) { C+= 1; B&= 0xFF; C&= 0xFF; }
}
*/

function WordDec(val) {
	PC+= 1;
	Cycle = 8;
	return (val - 1) & 0xFFFF;
}

function WordAdd(r1, r2) {
	/* This is confusing, but essentially if the sum of the two nibbles of the two lower registers and the overflow of the sum of the higher
	regsters is greater than 0xF then there's a half-carry overflow. Yeah... */
	SetHCarry( (( H & 0xF ) + (r1 & 0xF) + ( (L + r2) > 0xFF)) > 0xF );

	H+= r1
	L+= r2

	/* if the low register overflows, then add the carry to the high register*/
	if ( L > 0xFF ) { H+= 1; L&= 0xFF; }
	/* if the high register overflows, set the carry flag*/
	if ( H > 0xFF ) { SetCarry(1); H&= 0xFF; } else { SetCarry(0) }
	/* this was not a subtract operation */
	SetSub(0);

	PC+= 1;
	Cycle = 8;
}



//Jumps, I wonder if there's a better way to do this than if val .. else ...
function JumpSign(val) {
	if (val) {
		var s8 = Read( PC+1 );
		PC+= ((s8&127) - (s8&128)) + 2;
		PC&= 0xFFFF;

		Cycle = 12;
	}else{
		PC+= 2;
		Cycle = 8;
	}
}

function Jump(val) {
	if (val) {
		PC = (Read(PC + 2) << 8) + Read(PC + 1);
		Cycle = 16;
	}else{
		PC+= 3;
		Cycle = 12;
	}



}

function Call(val) {
	if (val) {
		SP-= 2;
		Write(SP + 1, (PC + 3) >> 8);
		Write(SP, (PC + 3) & 0xFF);

		PC = (Read(PC + 2) << 8) + Read(PC + 1);
		Cycle = 24;
	}else{
		PC+= 3;
		Cycle = 12;
	}
}

function Return(val) {
	if (val) {
		PC = ( Read( SP + 1 ) << 8 ) + Read( SP );
		SP+= 2;
		Cycle = 20;
	}else{
		PC++
		Cycle = 8;
	}
}



function ResetPC(addr) {
	SP-= 2;
	Write(SP + 1, (PC + 1) >> 8);
	Write(SP, (PC + 1) & 0xFF);

	PC = addrl;
	Cycle = 16;
}
		



//Stack Stuff, this can be done inline better tbh

function StackPush( r1, r2 ) {
	SP-= 2;
	Write( SP  + 1, r1 );
	Write( SP, r2 );
	
	PC++; 
	Cycle = 16;
}

function StackPop()	{
	var r = ( Read( SP + 1 ) << 8 ) + Read( SP );
	SP+= 2;
	
	PC++;
	Cycle = 12;
	return r;
}



//ARITHMATIC AND LOGIC

function ByteAdd(r1) {
	/* Half Carry is set if the sum of the lower nibbles of the two registers overflows into the higher nibble */

	SetHCarry( ((A & 0xF) + (r1 & 0xF)) > 0xF );

	A+= r1;
	SetCarry( C > 0xFF );
	A&= 0xFF;

	SetSub(0);
	SetZero(A == 0);

	PC++;
	Cycle = 4;
}

function ByteAdc(r1) {
	/* Same as above but the carry can also cause the lower nibble to overflow */
	SetHCarry( ((A & 0xF) + (r1 & 0xF) + Carry()) > 0xF );

	A+= r1 + Carry()
	SetCarry( C > 0xFF );
	A&= 0xFF;

	SetSub(0);
	SetZero(A == 0);

	PC++;
	Cycle = 4;
}

function ByteSub(r1) {
	/* Half Carry is set if the lower nibble borrows/underflows */
	SetHCarry( (r1 & 0xF) > (A & 0xF) );
	SetCarry( r1 > A );

	A-= r1;
	A&= 0xFF;

	SetSub(1);
	SetZero(A == 0);

	PC++;
	Cycle = 4;
}

function ByteSbc(r1) {
	SetHCarry( ((r1 & 0xF) + Carry()) > (A & 0xF) );
	SetCarry( (r1 + Carry()) > A);

	A-= r1 + Carry();
	A&= 0xFF;

	SetSub(1);
	SetZero(A == 0);

	PC++;
	Cycle = 4;
}

function ByteAnd(r1) {
	A&= r1;
	SetZero(A == 0);
	SetCarry(0);
	SetHCarry(1);
	SetSub(0);

	PC++;
	Cycle = 4;
}

function ByteXor(r1) {
	A^= r1;
	SetZero(A == 0);
	SetCarry(0);
	SetHCarry(0);
	SetSub(0);

	PC++;
	Cycle = 4;
}

function ByteXor(r1) {
	A|= r1;
	SetZero(A == 0);
	SetCarry(0);
	SetHCarry(0);
	SetSub(0);

	PC++;
	Cycle = 4;
}

function ByteCmp(r1) {
	/* Does the subtraction but never stores it in the accumulator */
	/* Half Carry is set if the lower nibble borrows/underflows */
	SetHCarry( (r1 & 0xF) > (A & 0xF) );
	SetCarry( r1 > A );
	SetZero( ((A-r1)&0xFF) == 0);
	SetSub(1);

	PC++;
	Cycle = 4;
}


function ByteInc(r1) {
	SetHCarry( (r1&0xF) == 0xF );
	r1+= 1;
	r1&= 0xFF;

	SetZero(r1 == 0);
	SetSub(0);

	PC++;
	Cycle = 4;

	return r1;
}

function ByteDec(r1) {
	SetHCarry( ((r1 - 1) & 0xF) > (r1 & 0xF) );
	r1-= 1;
	r1&= 0xFF;

	SetZero(r1 == 0);
	SetSub(1);

	PC++;
	Cycle = 4;

	return r1;
}











//CB Opcode functions


function RLC(r1) {
	var bit7 = (r1 & 128) == 128;
	r1 = ( (r1 << 1) & 0xFE ) + bit7;

	SetCarry(bit7);
	SetZero(r1 == 0);
	SetHCarry(0);
	SetSub(0);

	PC+= 2;
	Cycle = 8;
	
	return r1;
}

function RRC(r1) {
	var bit0 = r1 & 1;
	r1 = (r1 >> 1) + bit0 * 128;

	SetCarry(bit0);
	SetZero(r1 == 0);
	SetHCarry(0);
	SetSub(0);
	
	PC+= 2;
	Cycle = 8;
	
	return r1;
}

function RL(r1) {
	var bit7 = (r1 & 128) == 128;
	r1 = ( (r1 << 1) & 0xFE ) + Carry();

	SetCarry(bit7);
	SetZero(r1 == 0);
	SetHCarry(0);
	SetSub(0);
	
	PC+= 2;
	Cycle = 8;
	
	return r1;
}

function RR(r1) {
	var bit0 = r1 & 1;
	r1 = (r1 >> 1) + Carry() * 128;
	
	SetCarry(bit0);
	SetZero(r1 == 0);
	SetHCarry(0);
	SetSub(0);
	
	PC = PC + 2
	Cycle = 8
	
	return r1;
}

function SLA(r1) {
	var bit7 = (r1 & 128) == 128;
	r1 = (r1 << 1) & 0xFE; //0's shift onto the right side. 

	SetCarry(bit7);
	SetZero(r1 == 0);
	SetHCarry(0);
	SetSub(0);
	
	PC+= 2;
	Cycle = 8;
	
	return r1;
}

//Because this is an Arithmatic Right Shift the sign bit is maintained, the least significant bit is pushed into carry.
function SRA(r1) {
	var bit7 = (r1 & 128);
	var bit0 = r1 & 1;
	r1 = (r1 >> 1) + bit7;

	SetCarry(bit0);
	SetZero(r1 == 0);
	SetHCarry(0);
	SetSub(0);
	
	PC+= 2;
	Cycle = 8;
	
	return r1;
}

//Logical Shift Right, sign bit is not maintained.
function SRL(r1) {
	var bit0 = r1 & 1;
	r1 = (r1 >> 1)

	SetCarry(bit0);
	SetZero(r1 == 0);
	SetHCarry(0);
	SetSub(0);
	
	PC+= 2;
	Cycle = 8;
	
	return r1;
}

//Swap the high and low nibbles. Mmmm, nibbles.
function SWAP(r1) {
	r1 = ((r1 & 0xF0) >> 4) + ((r1 & 0x0F) << 4);

	SetCarry(0);
	SetZero(r1 == 0);
	SetHCarry(0);
	SetSub(0);

	PC+= 2;
	Cycle = 8;
	
	return r1;
}

