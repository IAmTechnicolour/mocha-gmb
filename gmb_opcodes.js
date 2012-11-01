Operators = [];


//MOVE, LOAD AND STORE OPERATIONS

// Load into B
Operators[ 0x40 ] =  function() { B = B; Cycle = 4; PC++; }
Operators[ 0x41 ] =  function() { B = C; Cycle = 4; PC++; }
Operators[ 0x42 ] =  function() { B = D; Cycle = 4; PC++; }
Operators[ 0x43 ] =  function() { B = E; Cycle = 4; PC++; }
Operators[ 0x44 ] =  function() { B = H; Cycle = 4; PC++; }
Operators[ 0x45 ] =  function() { B = L; Cycle = 4; PC++; }
Operators[ 0x46 ] =  function() { B = Read( (H << 8) + L); Cycle = 8; PC++; }
Operators[ 0x47 ] =  function() { B = A; Cycle = 4; PC++; }

// Load into C
Operators[ 0x48 ] =  function() { C = B; Cycle = 4; PC++; }
Operators[ 0x49 ] =  function() { C = C; Cycle = 4; PC++; }
Operators[ 0x4A ] =  function() { C = D; Cycle = 4; PC++; }
Operators[ 0x4B ] =  function() { C = E; Cycle = 4; PC++; }
Operators[ 0x4C ] =  function() { C = H; Cycle = 4; PC++; }
Operators[ 0x4D ] =  function() { C = L; Cycle = 4; PC++; }
Operators[ 0x4E ] =  function() { C = Read( (H << 8) + L); Cycle = 8; PC++; }
Operators[ 0x4F ] =  function() { C = A; Cycle = 4; PC++; }

// Load into D
Operators[ 0x50 ] =  function() { D = B; Cycle = 4; PC++; }
Operators[ 0x51 ] =  function() { D = C; Cycle = 4; PC++; }
Operators[ 0x52 ] =  function() { D = D; Cycle = 4; PC++; }
Operators[ 0x53 ] =  function() { D = E; Cycle = 4; PC++; }
Operators[ 0x54 ] =  function() { D = H; Cycle = 4; PC++; }
Operators[ 0x55 ] =  function() { D = L; Cycle = 4; PC++; }
Operators[ 0x56 ] =  function() { D = Read( (H << 8) + L); Cycle = 8; PC++; }
Operators[ 0x57 ] =  function() { D = A; Cycle = 4; PC++; }

// Load into E
Operators[ 0x58 ] =  function() { E = B; Cycle = 4; PC++; }
Operators[ 0x59 ] =  function() { E = C; Cycle = 4; PC++; }
Operators[ 0x5A ] =  function() { E = D; Cycle = 4; PC++; }
Operators[ 0x5B ] =  function() { E = E; Cycle = 4; PC++; }
Operators[ 0x5C ] =  function() { E = H; Cycle = 4; PC++; }
Operators[ 0x5D ] =  function() { E = L; Cycle = 4; PC++; }
Operators[ 0x5E ] =  function() { E = Read( (H << 8) + L); Cycle = 8; PC++; }
Operators[ 0x5F ] =  function() { E = A; Cycle = 4; PC++; }

// Load into H
Operators[ 0x60 ] =  function() { H = B; Cycle = 4; PC++; }
Operators[ 0x61 ] =  function() { H = C; Cycle = 4; PC++; }
Operators[ 0x62 ] =  function() { H = D; Cycle = 4; PC++; }
Operators[ 0x63 ] =  function() { H = E; Cycle = 4; PC++; }
Operators[ 0x64 ] =  function() { H = H; Cycle = 4; PC++; }
Operators[ 0x65 ] =  function() { H = L; Cycle = 4; PC++; }
Operators[ 0x66 ] =  function() { H = Read( (H << 8) + L); Cycle = 8; PC++; }
Operators[ 0x67 ] =  function() { H = A; Cycle = 4; PC++; }

// Load into L
Operators[ 0x68 ] =  function() { L = B; Cycle = 4; PC++; }
Operators[ 0x69 ] =  function() { L = C; Cycle = 4; PC++; }
Operators[ 0x6A ] =  function() { L = D; Cycle = 4; PC++; }
Operators[ 0x6B ] =  function() { L = E; Cycle = 4; PC++; }
Operators[ 0x6C ] =  function() { L = H; Cycle = 4; PC++; }
Operators[ 0x6D ] =  function() { L = L; Cycle = 4; PC++; }
Operators[ 0x6E ] =  function() { L = Read( (H << 8) + L); Cycle = 8; PC++; }
Operators[ 0x6F ] =  function() { L = A; Cycle = 4; PC++; }

// Load into (HL)
Operators[ 0x70 ] =  function() { Write(B, (H << 8) + L); Cycle = 8; PC++; }
Operators[ 0x71 ] =  function() { Write(C, (H << 8) + L); Cycle = 8; PC++; }
Operators[ 0x72 ] =  function() { Write(D, (H << 8) + L); Cycle = 8; PC++; }
Operators[ 0x73 ] =  function() { Write(E, (H << 8) + L); Cycle = 8; PC++; }
Operators[ 0x74 ] =  function() { Write(H, (H << 8) + L); Cycle = 8; PC++; }
Operators[ 0x75 ] =  function() { Write(L, (H << 8) + L); Cycle = 8; PC++; }
Operators[ 0x77 ] =  function() { Write(A, (H << 8) + L); Cycle = 8; PC++; }

// Load into A
Operators[ 0x78 ] =  function() { A = B; Cycle = 4; PC++; }
Operators[ 0x79 ] =  function() { A = C; Cycle = 4; PC++; }
Operators[ 0x7A ] =  function() { A = D; Cycle = 4; PC++; }
Operators[ 0x7B ] =  function() { A = E; Cycle = 4; PC++; }
Operators[ 0x7C ] =  function() { A = H; Cycle = 4; PC++; }
Operators[ 0x7D ] =  function() { A = L; Cycle = 4; PC++; }
Operators[ 0x7E ] =  function() { A = Read( (H << 8) + L); Cycle = 8; PC++; }
Operators[ 0x7F ] =  function() { A = A; Cycle = 4; PC++; }

//Immediate Loads
Operators[ 0x06 ] =  function() { B = Read(PC+1); Cycle = 8; PC+= 2; end
Operators[ 0x0E ] =  function() { C = Read(PC+1); Cycle = 8; PC+= 2; end
Operators[ 0x16 ] =  function() { D = Read(PC+1); Cycle = 8; PC+= 2; end
Operators[ 0x1E ] =  function() { E = Read(PC+1); Cycle = 8; PC+= 2; end
Operators[ 0x26 ] =  function() { H = Read(PC+1); Cycle = 8; PC+= 2; end
Operators[ 0x2E ] =  function() { L = Read(PC+1); Cycle = 8; PC+= 2; end
Operators[ 0x36 ] =  function() { Write( (H << 8) + L, Read(PC+1)); Cycle = 12; PC+= 2; end
Operators[ 0x3E ] =  function() { A = Read(PC+1); Cycle = 8; PC+= 2; end

//The wierd 8 bit loads
Operators[ 0xE0 ] = function() { Write( 0xFF00 + Read(PC+1), A); Cycle = 12; PC+= 2; } //Write A into 0xFF00 + a8
Operators[ 0xF0 ] = function() { A = Read( 0xFF00 + Read(PC+1)); Cycle = 12; PC+= 2; } //Read 0xFF00 + a8 into A
Operators[ 0xE2 ] = function() { Write( 0xFF00 + C, A ); Cycle = 8; PC++; } // Write A into 0xFF00 + C
Operators[ 0xF2 ] = function() { A = Read( 0xFF00 + C ); Cycle = 8; PC++; } // Read 0xFF00 + C into A
Operators[ 0xEA ] = function() { Write( (Read(PC+2) << 8) + Read(PC+1), A); Cycle = 16; PC+= 3; } // Write A into a16
Operators[ 0xFA ] = function() { A = Read( (Read(PC+2) << 8) + Read(PC+1)); Cycle = 16; PC+= 3; } // Read a16 into A

Operators[ 0x02 ] = function() { Write( (B << 8) + C, A ); Cycle = 8; PC++; } // Write A into (BC)
Operators[ 0x12 ] = function() { Write( (D << 8) + E, A ); Cycle = 8; PC++; } // Write A into (DE)
Operators[ 0x22 ] = function() { Write( (H << 8) + L, A ); L++; if (L > 0xFF) { L&= 0xFF; H++; H&= 0xFF; }; Cycle = 8; PC++; } // Write A into (HL+)
Operators[ 0x32 ] = function() { Write( (H << 8) + L, A ); L--; if (L < 0) { L&= 0xFF; H--; H&= 0xFF; }; Cycle = 8; PC++; } // Write A into (HL-)

Operators[ 0x0A ] = function() { A = Read( (B << 8) + C); Cycle = 8; PC++; } // Read (BC) into A
Operators[ 0x1A ] = function() { A = Read( (D << 8) + E); Cycle = 8; PC++; } // Read (DE) into A
Operators[ 0x2A ] = function() { A = Read( (H << 8) + L); L++; if (L > 0xFF) { L&= 0xFF; H++; H&= 0xFF; }; Cycle = 8; PC++; } // Read (HL+) into A
Operators[ 0x3A ] = function() { A = Read( (H << 8) + L); L--; if (L < 0) { L&= 0xFF; H--; H&= 0xFF; }; Cycle = 8; PC++; } // WRead (HL-) into A

// !6 Bit Loads
Operators[ 0x01 ] = function() { B = Read(PC + 2); C = Read(PC + 1); PC+= 3; Cycle = 12; }
Operators[ 0x11 ] = function() { D = Read(PC + 2); E = Read(PC + 1); PC+= 3; Cycle = 12; }
Operators[ 0x21 ] = function() { H = Read(PC + 2); L = Read(PC + 1); PC+= 3; Cycle = 12; }
Operators[ 0x31 ] = function() { SP = ( Read(PC + 2) << 8 ) + Read(PC + 1); PC+= 3; Cycle = 12; }
































// CONTROL OPERATIONS

Operators[ 0x00 ] = function() { PC++; Cycle = 4; } // NOP
Operators[ 0x10 ] = function() { Halt = 1; PC+= 2; Cycle = 4; } // STOP
Operators[ 0x76 ] = function() { if (IME) {Halt = 1;}; PC++; Cycle = 4; } //Halt
Operators[ 0xF3 ] = function() { IME = 0; PC++; Cycle = 4; } // Disable Interupts, DI
Operators[ 0xFB ] = function() { IME = 1; PC++; Cycle = 4; } // Enable Interupts, EI






//JUMPS/CALLS/RETURNS/FLOW CONTROL GENERAL

//Signed Jumps
Operators[ 0x18 ] =  function() { JumpSign( 1 ); }
Operators[ 0x20 ] =  function() { JumpSign( !Zero() ); }
Operators[ 0x30 ] =  function() { JumpSign( !Carry() ); }
Operators[ 0x28 ] =  function() { JumpSign( Zero() ); }
Operators[ 0x38 ] =  function() { JumpSign( Carry() ); }

//Absolute Jumps
Operators[ 0xC3 ] =  function() { Jump( 1 ); }
Operators[ 0xC2 ] =  function() { Jump( !Zero() ); }
Operators[ 0xD2 ] =  function() { Jump( !Carry() ); }
Operators[ 0xCA ] =  function() { Jump( Zero() ); }
Operators[ 0xDA ] =  function() { Jump( Carry() ); }

//Call Subroutine
Operators[ 0xCD ] =  function() { Call( 1 ); }
Operators[ 0xC4 ] =  function() { Call( !Zero() ); }
Operators[ 0xD4 ] =  function() { Call( !Carry() ); }
Operators[ 0xCC ] =  function() { Call( Zero() ); }
Operators[ 0xDC ] =  function() { Call( Carry() ); }

//Return from Subroutine
Operators[ 0xC9 ] = function() { Return( 1 ); Cycle = 16; }
Operators[ 0xD9 ] = function() { IME = 1; Return( 1 ); Cycle = 16; }
Operators[ 0xC0 ] = function() { Return( !Zero() ); }
Operators[ 0xD0 ] = function() { Return( !Carry() ); }
Operators[ 0xC8 ] = function() { Return( Zero() ); }
Operators[ 0xD8 ] = function() { Return( Carry() ); }

//ResetPC
Operators[ 0xC7 ] = function() { ResetPC( 0x00 ); }
Operators[ 0xD7 ] = function() { ResetPC( 0x10 ); }
Operators[ 0xE7 ] = function() { ResetPC( 0x20 ); }
Operators[ 0xF7 ] = function() { ResetPC( 0x30 ); }

Operators[ 0xCF ] = function() { ResetPC( 0x08 ); }
Operators[ 0xDF ] = function() { ResetPC( 0x18 ); }
Operators[ 0xEF ] = function() { ResetPC( 0x28 ); }
Operators[ 0xFF ] = function() { ResetPC( 0x38 ); }



















// ARITHMATIC AND LOGIC

// Incriment 16 Bit Register
Operators[ 0x03 ] =  function() { SetBC(WordInc(BC())); }
Operators[ 0x13 ] =  function() { SetDE(WordInc(DE())); }
Operators[ 0x23 ] =  function() { SetHL(WordInc(HL())); }
Operators[ 0x33 ] =  function() { SP++; PC++; Cycle = 8; }

//Decriment 16 Bit Register
Operators[ 0x0B ] =  function() { SetBC(WordDec(BC())); }
Operators[ 0x1B ] =  function() { SetDE(WordDec(DE())); }
Operators[ 0x2B ] =  function() { SetHL(WordDec(HL())); }
Operators[ 0x3B ] =  function() { SP--; PC++; Cycle = 8; }

//Add 16 Bit Register to HL
Operators[ 0x09 ] =  function() { WordAdd(B, C); }
Operators[ 0x19 ] =  function() { WordAdd(D, E); }
Operators[ 0x29 ] =  function() { WordAdd(H, L); }
Operators[ 0x39 ] =  function() { WordAdd( SP >> 8, SP & 0xFF ) };

//8 Bit Arithmatic and Logic ---

//ADD
Operators[ 0x80 ] = function() { ByteAdd(B) }
Operators[ 0x81 ] = function() { ByteAdd(C) }
Operators[ 0x82 ] = function() { ByteAdd(D) }
Operators[ 0x83 ] = function() { ByteAdd(E) }
Operators[ 0x84 ] = function() { ByteAdd(H) }
Operators[ 0x85 ] = function() { ByteAdd(L) }
Operators[ 0x86 ] = function() { ByteAdd( Read( (H << 8) + L) ); Cycle = 8 }
Operators[ 0x87 ] = function() { ByteAdd(A) }

//ADD with Carry (ADC)
Operators[ 0x88 ] = function() { ByteAdc(B) }
Operators[ 0x89 ] = function() { ByteAdc(C) }
Operators[ 0x8A ] = function() { ByteAdc(D) }
Operators[ 0x8B ] = function() { ByteAdc(E) }
Operators[ 0x8C ] = function() { ByteAdc(H) }
Operators[ 0x8D ] = function() { ByteAdc(L) }
Operators[ 0x8E ] = function() { ByteAdc( Read( (H << 8) + L) ); Cycle = 8 }
Operators[ 0x8F ] = function() { ByteAdc(A) }

//SUB
Operators[ 0x90 ] = function() { ByteSub(B) }
Operators[ 0x91 ] = function() { ByteSub(C) }
Operators[ 0x92 ] = function() { ByteSub(D) }
Operators[ 0x93 ] = function() { ByteSub(E) }
Operators[ 0x94 ] = function() { ByteSub(H) }
Operators[ 0x95 ] = function() { ByteSub(L) }
Operators[ 0x96 ] = function() { ByteSub( Read( (H << 8) + L) ); Cycle = 8 }
Operators[ 0x97 ] = function() { ByteSub(A) }

//SUB with Borrow (ABC)
Operators[ 0x98 ] = function() { ByteSbc(B) }
Operators[ 0x99 ] = function() { ByteSbc(C) }
Operators[ 0x9A ] = function() { ByteSbc(D) }
Operators[ 0x9B ] = function() { ByteSbc(E) }
Operators[ 0x9C ] = function() { ByteSbc(H) }
Operators[ 0x9D ] = function() { ByteSbc(L) }
Operators[ 0x9E ] = function() { ByteSbc( Read( (H << 8) + L) ); Cycle = 8 }
Operators[ 0x9F ] = function() { ByteSbc(A) }

//AND
Operators[ 0xA0 ] = function() { ByteAnd(B) }
Operators[ 0xA1 ] = function() { ByteAnd(C) }
Operators[ 0xA2 ] = function() { ByteAnd(D) }
Operators[ 0xA3 ] = function() { ByteAnd(E) }
Operators[ 0xA4 ] = function() { ByteAnd(H) }
Operators[ 0xA5 ] = function() { ByteAnd(L) }
Operators[ 0xA6 ] = function() { ByteAnd( Read( (H << 8) + L) ); Cycle = 8 }
Operators[ 0xA7 ] = function() { ByteAnd(A) }

//XOR
Operators[ 0xA8 ] = function() { ByteXor(B) }
Operators[ 0xA9 ] = function() { ByteXor(C) }
Operators[ 0xAA ] = function() { ByteXor(D) }
Operators[ 0xAB ] = function() { ByteXor(E) }
Operators[ 0xAC ] = function() { ByteXor(H) }
Operators[ 0xAD ] = function() { ByteXor(L) }
Operators[ 0xAE ] = function() { ByteXor( Read( (H << 8) + L) ); Cycle = 8 }
Operators[ 0xAF ] = function() { ByteXor(A) }

//OR
Operators[ 0xB0 ] = function() { ByteOr(B) }
Operators[ 0xB1 ] = function() { ByteOr(C) }
Operators[ 0xB2 ] = function() { ByteOr(D) }
Operators[ 0xB3 ] = function() { ByteOr(E) }
Operators[ 0xB4 ] = function() { ByteOr(H) }
Operators[ 0xB5 ] = function() { ByteOr(L) }
Operators[ 0xB6 ] = function() { ByteOr( Read( (H << 8) + L) ); Cycle = 8 }
Operators[ 0xB7 ] = function() { ByteOr(A) }

//CMP
Operators[ 0xB8 ] = function() { ByteCmp(B) }
Operators[ 0xB9 ] = function() { ByteCmp(C) }
Operators[ 0xBA ] = function() { ByteCmp(D) }
Operators[ 0xBB ] = function() { ByteCmp(E) }
Operators[ 0xBC ] = function() { ByteCmp(H) }
Operators[ 0xBD ] = function() { ByteCmp(L) }
Operators[ 0xBE ] = function() { ByteCmp( Read( (H << 8) + L) ); Cycle = 8 }
Operators[ 0xBF ] = function() { ByteCmp(A) }


//All of the above but on immediate data
Operators[ 0xC6 ] = function() { ByteAdd( Read(PC+1) ); Cycle = 8; PC++; }
Operators[ 0xD6 ] = function() { ByteSub( Read(PC+1) ); Cycle = 8; PC++; }
Operators[ 0xE6 ] = function() { ByteAnd( Read(PC+1) ); Cycle = 8; PC++; }
Operators[ 0xF6 ] = function() { ByteOr( Read(PC+1) ); Cycle = 8; PC++; }

Operators[ 0xCE ] = function() { ByteAdc( Read(PC+1) ); Cycle = 8; PC++; }
Operators[ 0xDE ] = function() { ByteSbc( Read(PC+1) ); Cycle = 8; PC++; }
Operators[ 0xEE ] = function() { ByteXor( Read(PC+1) ); Cycle = 8; PC++; }
Operators[ 0xFE ] = function() { ByteCmp( Read(PC+1) ); Cycle = 8; PC++; }


//Byte Incriment
Operators[ 0x04 ] = function() { SetHCarry( (B & 0xF) == 0xF); SetSub(0); SetZero(B == 0xFF); B++; B&= 0xFF; PC++; Cycle = 4; }
Operators[ 0x0C ] = function() { SetHCarry( (C & 0xF) == 0xF); SetSub(0); SetZero(C == 0xFF); C++; C&= 0xFF; PC++; Cycle = 4; }
Operators[ 0x14 ] = function() { SetHCarry( (D & 0xF) == 0xF); SetSub(0); SetZero(D == 0xFF); D++; D&= 0xFF; PC++; Cycle = 4; }
Operators[ 0x1C ] = function() { SetHCarry( (E & 0xF) == 0xF); SetSub(0); SetZero(E == 0xFF); E++; E&= 0xFF; PC++; Cycle = 4; }
Operators[ 0x24 ] = function() { SetHCarry( (H & 0xF) == 0xF); SetSub(0); SetZero(H == 0xFF); H++; H&= 0xFF; PC++; Cycle = 4; }
Operators[ 0x2C ] = function() { SetHCarry( (L & 0xF) == 0xF); SetSub(0); SetZero(L == 0xFF); L++; L&= 0xFF; PC++; Cycle = 4; }
Operators[ 0x34 ] = function() {
	var r1 = Read( (H << 8) + L );
	SetHCarry( (r1 & 0xF) == 0xF);
	SetSub(0); 
	SetZero(r1 == 0xFF);
	r1++; 
	r1&= 0xFF; 
	PC++; 
	Cycle = 12;
	Write( (H << 8) + L, r1 );
}
Operators[ 0x3C ] = function() { SetHCarry( (A & 0xF) == 0xF); SetSub(0); SetZero(A == 0xFF); A++; A&= 0xFF; PC++; Cycle = 4; }


//Byte Decriment
Operators[ 0x05 ] = function() { SetHCarry( (B & 0xF) == 0); SetSub(1); SetZero(B == 1); B--; B&= 0xFF; PC++; Cycle = 4; }
Operators[ 0x0D ] = function() { SetHCarry( (C & 0xF) == 0); SetSub(1); SetZero(C == 1); C--; C&= 0xFF; PC++; Cycle = 4; }
Operators[ 0x15 ] = function() { SetHCarry( (D & 0xF) == 0); SetSub(1); SetZero(D == 1); D--; D&= 0xFF; PC++; Cycle = 4; }
Operators[ 0x1D ] = function() { SetHCarry( (E & 0xF) == 0); SetSub(1); SetZero(E == 1); E--; E&= 0xFF; PC++; Cycle = 4; }
Operators[ 0x25 ] = function() { SetHCarry( (H & 0xF) == 0); SetSub(1); SetZero(H == 1); H--; H&= 0xFF; PC++; Cycle = 4; }
Operators[ 0x2D ] = function() { SetHCarry( (L & 0xF) == 0); SetSub(1); SetZero(L == 1); L--; L&= 0xFF; PC++; Cycle = 4; }
Operators[ 0x35 ] = function() {
	var r1 = Read( (H << 8) + L );
	SetHCarry( (r1 & 0xF) == 0);
	SetSub(1);
	SetZero(r1 == 0);
	r1--;
	r1&= 0xFF;
	PC++;
	Cycle = 12;
	Write( (H << 8) + L, r1 );
}
Operators[ 0x3D ] = function() { SetHCarry( (A & 0xF) == 0); SetSub(1); SetZero(A == 1); A--; A&= 0xFF; PC++; Cycle = 4; }

Operators[ 0x2F ] = function() { A = 255 - A; F|= FLAG_H + FLAG_N; PC++; Cycle = 4; } // Bitwise NOT on A
Operators[ 0x37 ] = function() { F|= FLAG_C; F&= ~(FLAG_H + FLAG_N); PC++; Cycle = 4; } //SCF
Operators[ 0x3F ] = function() { SetCarry(!Carry()); F&= ~(FLAG_H + FLAG_N); PC++; Cycle = 4; } //CCF


Operators[ 0x17 ] = function() { //Rotate Left Through Carry
	var Bit7 = A > 127;
	A = (A << 1) | Carry() & 0xFF;

	F = 0;
	SetCarry(Bit7);
	PC++;
	Cycle = 4;
}

Operators[ 0x07 ] = function() {  //Rotate Left 
	var Bit7 = A > 127;
	A = (A << 1) | (+Bit7) & 0xFF;

	F = 0;
	SetCarry(Bit7);
	PC++;
	Cycle = 4;
}

Operators[ 0x1F ] = function() {
	var Bit0 = ( A & 1 );
	A = (A >> 1) | (Carry()*128); 

	F = 0;
	SetCarry(Bit0);
	PC++;
	Cycle = 4;
}

Operators[ 0x0F ] = function() {
	var Bit0 = ( A & 1 );
	A = (A >> 1) | (Bit0*128); 

	F = 0;
	SetCarry(Bit0);
	PC++;
	Cycle = 4;
}


























// STACK AND STACK POINTER OPERATIONS

//Push onto Stack
Operators[ 0xC5 ] = function() { SP-= 2; Write( SP + 1, B); Write( SP, C ); PC++; Cycle = 16;  }
Operators[ 0xD5 ] = function() { SP-= 2; Write( SP + 1, D); Write( SP, E ); PC++; Cycle = 16;  }
Operators[ 0xE5 ] = function() { SP-= 2; Write( SP + 1, H); Write( SP, L ); PC++; Cycle = 16;  }
Operators[ 0xF5 ] = function() { SP-= 2; Write( SP + 1, A); Write( SP, F ); PC++; Cycle = 16;  }

//Pop from stack
Operators[ 0xC1 ] = function() { B = Read( SP + 1 ); C = Read( SP ); SP+= 2; PC++; Cycle = 12; }
Operators[ 0xD1 ] = function() { D = Read( SP + 1 ); E = Read( SP ); SP+= 2; PC++; Cycle = 12; }
Operators[ 0xE1 ] = function() { H = Read( SP + 1 ); L = Read( SP ); SP+= 2; PC++; Cycle = 12; }
Operators[ 0xF1 ] = function() { A = Read( SP + 1 ); F = Read( SP ); SP+= 2; PC++; Cycle = 12; }


//Add signed immediate to SP
Operators[ 0xE8 ] =  function() {
	var d8 = Read(PC+1); // immediate data
	var s8 = ((s8&127) - (s8&128)); //Signed immedate
	var tSP = SP + s8 // Value of the SP when added with the signed immediate

	/* 
	Holy balls what the hell is going on here... If the signed immediate value is a positive number then 
	we calculate the carry as we would normally for addition, if the low byte of the stack pointer and the 
	signed immediate overflow 0xFF, then carry is set. Again, same for the half-carry flag, if the lower nibble 
	of the stack pointer and signed immediate overflow 0xF then the half carry flag is set.
	In the event that the signed immediate is negative then we do what we would usually do for subtraction,
	ie if the low byte/low nibble underflow then we set the carry and half carry flags respectively.
	I wonder if there's a way to do this using less processing power and/or not dividing it between positive
	or negative immediate values.
	 */

	if (s8 >= 0) {
		SetCarry( ((SP & 0xFF) + s8) > 0xFF );
		SetHCarry( ((SP & 0xF) + (s8 & 0xF)) > 0xF );
	}else{
		SetCarry( (tSP & 0xFF) <= (SP & 0xFF) );
		SetHCarry( (tSP & 0xF) <= (SP & 0xF) );
	}

	SP = tSP & 0xFFFF/*The ANDing is probably not necessary, no working rom would overflow 
	into ROM space without crashing anyway, we never check the PC for overflowing. */

	SetSub(0);
	SetZero(0);

	PC+= 2;
	Cycle = 16;
}

//Add signed immediate to SP and store in HL

Operators[ 0xF8 ] = function() {
	var d8 = Read(PC+1); // immediate data
	var s8 = ((s8&127) - (s8&128)); //Signed immedate
	var tSP = SP + s8 // Value of the SP when added with the signed immediate
	
	if (s8 >= 0) {
		SetCarry( ((SP & 0xFF) + s8) > 0xFF );
		SetHCarry( ((SP & 0xF) + (s8 & 0xF)) > 0xF );
	}else{
		SetCarry( (tSP & 0xFF) <= (SP & 0xFF) );
		SetHCarry( (tSP & 0xF) <= (SP & 0xF) );
	}

	SetSub(0);
	SetZero(0);
	
	H = tSP >> 8;
	L = tsp & 0xFF;
	
	PC+= 2;
	Cycle = 12;
}

Operators[ 0xF9 ] = function() { SP = (H << 8) + L; PC++; Cycle = 8; } //Load HL into SP

//Save SP at 16 bit immeiate address
Operators[ 0x08 ] = function() {
	var a16 = ( Read(PC + 2) << 8 ) + Read(PC + 1);
	Write( a16, SP & 0xFF);
	Write( a16 + 1, SP >> 8);
	
	PC+= 3;
	Cycle = 20;
}

