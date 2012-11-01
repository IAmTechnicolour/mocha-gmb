
OperatorsCB = [];


//Rotate Left with Carry
OperatorsCB[ 0x00 ] = function() { B = RLC( B ); }
OperatorsCB[ 0x01 ] = function() { C = RLC( C ); }
OperatorsCB[ 0x02 ] = function() { D = RLC( D ); }
OperatorsCB[ 0x03 ] = function() { E = RLC( E ); }
OperatorsCB[ 0x04 ] = function() { H = RLC( H ); }
OperatorsCB[ 0x05 ] = function() { L = RLC( L ); }
OperatorsCB[ 0x06 ] = function() { Write( (H << 8) + L, RLC( Read( (H << 8) + L ) ) ); Cycle = 16; }
OperatorsCB[ 0x07 ] = function() { A = RLC( A ); }

//Rotate Right with Carry
OperatorsCB[ 0x08 ] = function() { B = RRC( B ); }
OperatorsCB[ 0x09 ] = function() { C = RRC( C ); }
OperatorsCB[ 0x0A ] = function() { D = RRC( D ); }
OperatorsCB[ 0x0B ] = function() { E = RRC( E ); }
OperatorsCB[ 0x0C ] = function() { H = RRC( H ); }
OperatorsCB[ 0x0D ] = function() { L = RRC( L ); }
OperatorsCB[ 0x0E ] = function() { Write( (H << 8) + L, RRC( Read( (H << 8) + L ) ) ); Cycle = 16; }
OperatorsCB[ 0x0F ] = function() { A = RRC( A ); }

//Rotate Left
OperatorsCB[ 0x10 ] = function() { B = RL( B ); }
OperatorsCB[ 0x11 ] = function() { C = RL( C ); }
OperatorsCB[ 0x12 ] = function() { D = RL( D ); }
OperatorsCB[ 0x13 ] = function() { E = RL( E ); }
OperatorsCB[ 0x14 ] = function() { H = RL( H ); }
OperatorsCB[ 0x15 ] = function() { L = RL( L ); }
OperatorsCB[ 0x16 ] = function() { Write( (H << 8) + L, RL( Read( (H << 8) + L ) ) ); Cycle = 16; }
OperatorsCB[ 0x17 ] = function() { A = RL( A ); }

//Rotate Right
OperatorsCB[ 0x18 ] = function() { B = RR( B ); }
OperatorsCB[ 0x19 ] = function() { C = RR( C ); }
OperatorsCB[ 0x1A ] = function() { D = RR( D ); }
OperatorsCB[ 0x1B ] = function() { E = RR( E ); }
OperatorsCB[ 0x1C ] = function() { H = RR( H ); }
OperatorsCB[ 0x1D ] = function() { L = RR( L ); }
OperatorsCB[ 0x1E ] = function() { Write( (H << 8) + L, RR( Read( (H << 8) + L ) ) ); Cycle = 16; }
OperatorsCB[ 0x1F ] = function() { A = RR( A ); }

//Arithmatic Shift Left
OperatorsCB[ 0x20 ] = function() { B = SLA( B ); }
OperatorsCB[ 0x21 ] = function() { C = SLA( C ); }
OperatorsCB[ 0x22 ] = function() { D = SLA( D ); }
OperatorsCB[ 0x23 ] = function() { E = SLA( E ); }
OperatorsCB[ 0x24 ] = function() { H = SLA( H ); }
OperatorsCB[ 0x25 ] = function() { L = SLA( L ); }
OperatorsCB[ 0x26 ] = function() { Write( (H << 8) + L, SLA( Read( (H << 8) + L ) ) ); Cycle = 16; }
OperatorsCB[ 0x27 ] = function() { A = SLA( A ); }

//Arithmatic Shift Right
OperatorsCB[ 0x28 ] = function() { B = SRA( B ); }
OperatorsCB[ 0x29 ] = function() { C = SRA( C ); }
OperatorsCB[ 0x2A ] = function() { D = SRA( D ); }
OperatorsCB[ 0x2B ] = function() { E = SRA( E ); }
OperatorsCB[ 0x2C ] = function() { H = SRA( H ); }
OperatorsCB[ 0x2D ] = function() { L = SRA( L ); }
OperatorsCB[ 0x2E ] = function() { Write( (H << 8) + L, SRA( Read( (H << 8) + L ) ) ); Cycle = 16; }
OperatorsCB[ 0x2F ] = function() { A = SRA( A ); }

//SWAP
OperatorsCB[ 0x30 ] = function() { B = SWAP( B ); }
OperatorsCB[ 0x31 ] = function() { C = SWAP( C ); }
OperatorsCB[ 0x32 ] = function() { D = SWAP( D ); }
OperatorsCB[ 0x33 ] = function() { E = SWAP( E ); }
OperatorsCB[ 0x34 ] = function() { H = SWAP( H ); }
OperatorsCB[ 0x35 ] = function() { L = SWAP( L ); }
OperatorsCB[ 0x36 ] = function() { Write( (H << 8) + L, SWAP( Read( (H << 8) + L ) ) ); Cycle = 16; }
OperatorsCB[ 0x37 ] = function() { A = SWAP( A ); }

//SRL
OperatorsCB[ 0x38 ] = function() { B = SRL( B ); }
OperatorsCB[ 0x39 ] = function() { C = SRL( C ); }
OperatorsCB[ 0x3A ] = function() { D = SRL( D ); }
OperatorsCB[ 0x3B ] = function() { E = SRL( E ); }
OperatorsCB[ 0x3C ] = function() { H = SRL( H ); }
OperatorsCB[ 0x3D ] = function() { L = SRL( L ); }
OperatorsCB[ 0x3E ] = function() { Write( (H << 8) + L, SRL( Read( (H << 8) + L ) ) ); Cycle = 16; }
OperatorsCB[ 0x3F ] = function() { A = SRL( A ); }




//TEST BIT
OperatorsCB[ 0x40 ] = function() { SetZero( (B & 1) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x41 ] = function() { SetZero( (C & 1) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x42 ] = function() { SetZero( (D & 1) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x43 ] = function() { SetZero( (E & 1) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x44 ] = function() { SetZero( (H & 1) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x45 ] = function() { SetZero( (L & 1) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x46 ] = function() { SetZero( ( Read( (H << 8) + L ) & 1) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 16; }
OperatorsCB[ 0x47 ] = function() { SetZero( (A & 1) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }

OperatorsCB[ 0x48 ] = function() { SetZero( (B & 2) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x49 ] = function() { SetZero( (C & 2) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x4A ] = function() { SetZero( (D & 2) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x4B ] = function() { SetZero( (E & 2) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x4C ] = function() { SetZero( (H & 2) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x4D ] = function() { SetZero( (L & 2) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x4E ] = function() { SetZero( ( Read( (H << 8) + L ) & 2) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 16; }
OperatorsCB[ 0x4F ] = function() { SetZero( (A & 2) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }

OperatorsCB[ 0x50 ] = function() { SetZero( (B & 4) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x51 ] = function() { SetZero( (C & 4) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x52 ] = function() { SetZero( (D & 4) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x53 ] = function() { SetZero( (E & 4) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x54 ] = function() { SetZero( (H & 4) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x55 ] = function() { SetZero( (L & 4) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x56 ] = function() { SetZero( ( Read( (H << 8) + L ) & 4) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 16; }
OperatorsCB[ 0x57 ] = function() { SetZero( (A & 4) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }

OperatorsCB[ 0x58 ] = function() { SetZero( (B & 8) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x59 ] = function() { SetZero( (C & 8) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x5A ] = function() { SetZero( (D & 8) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x5B ] = function() { SetZero( (E & 8) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x5C ] = function() { SetZero( (H & 8) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x5D ] = function() { SetZero( (L & 8) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x5E ] = function() { SetZero( ( Read( (H << 8) + L ) & 8) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 16; }
OperatorsCB[ 0x5F ] = function() { SetZero( (A & 8) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }

OperatorsCB[ 0x60 ] = function() { SetZero( (B & 16) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x61 ] = function() { SetZero( (C & 16) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x62 ] = function() { SetZero( (D & 16) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x63 ] = function() { SetZero( (E & 16) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x64 ] = function() { SetZero( (H & 16) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x65 ] = function() { SetZero( (L & 16) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x66 ] = function() { SetZero( ( Read( (H << 8) + L ) & 16) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 16; }
OperatorsCB[ 0x67 ] = function() { SetZero( (A & 16) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }

OperatorsCB[ 0x68 ] = function() { SetZero( (B & 32) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x69 ] = function() { SetZero( (C & 32) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x6A ] = function() { SetZero( (D & 32) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x6B ] = function() { SetZero( (E & 32) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x6C ] = function() { SetZero( (H & 32) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x6D ] = function() { SetZero( (L & 32) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x6E ] = function() { SetZero( ( Read( (H << 8) + L ) & 32) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 16; }
OperatorsCB[ 0x6F ] = function() { SetZero( (A & 32) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }

OperatorsCB[ 0x70 ] = function() { SetZero( (B & 64) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x71 ] = function() { SetZero( (C & 64) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x72 ] = function() { SetZero( (D & 64) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x73 ] = function() { SetZero( (E & 64) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x74 ] = function() { SetZero( (H & 64) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x75 ] = function() { SetZero( (L & 64) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x76 ] = function() { SetZero( ( Read( (H << 8) + L ) & 64) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 16; }
OperatorsCB[ 0x77 ] = function() { SetZero( (A & 64) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }

OperatorsCB[ 0x78 ] = function() { SetZero( (B & 128) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x79 ] = function() { SetZero( (C & 128) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x7A ] = function() { SetZero( (D & 128) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x7B ] = function() { SetZero( (E & 128) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x7C ] = function() { SetZero( (H & 128) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x7D ] = function() { SetZero( (L & 128) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }
OperatorsCB[ 0x7E ] = function() { SetZero( ( Read( (H << 8) + L ) & 128) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 16; }
OperatorsCB[ 0x7F ] = function() { SetZero( (A & 128) == 0 ); SetHCarry(1); SetSub(0); PC+= 2; Cycle = 8; }




//RESET BIT (this one is a little more complex, 255 - bit)
OperatorsCB[ 0x80 ] = function() { B&= 254; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x81 ] = function() { C&= 254; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x82 ] = function() { D&= 254; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x83 ] = function() { E&= 254; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x84 ] = function() { H&= 254; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x85 ] = function() { L&= 254; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x86 ] = function() { Write((H << 8) + L, Read((H << 8) + L ) & 254); PC+= 2; Cycle = 16; }
OperatorsCB[ 0x87 ] = function() { A&= 254; PC+= 2; Cycle = 8; }

OperatorsCB[ 0x88 ] = function() { B&= 253; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x89 ] = function() { C&= 253; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x8A ] = function() { D&= 253; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x8B ] = function() { E&= 253; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x8C ] = function() { H&= 253; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x8D ] = function() { L&= 253; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x8E ] = function() { Write((H << 8) + L, Read((H << 8) + L ) & 253); PC+= 2; Cycle = 16; }
OperatorsCB[ 0x8F ] = function() { A&= 253; PC+= 2; Cycle = 8; }

OperatorsCB[ 0x90 ] = function() { B&= 251; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x91 ] = function() { C&= 251; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x92 ] = function() { D&= 251; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x93 ] = function() { E&= 251; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x94 ] = function() { H&= 251; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x95 ] = function() { L&= 251; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x96 ] = function() { Write((H << 8) + L, Read((H << 8) + L ) & 251); PC+= 2; Cycle = 16; }
OperatorsCB[ 0x97 ] = function() { A&= 251; PC+= 2; Cycle = 8; }

OperatorsCB[ 0x98 ] = function() { B&= 247; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x99 ] = function() { C&= 247; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x9A ] = function() { D&= 247; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x9B ] = function() { E&= 247; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x9C ] = function() { H&= 247; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x9D ] = function() { L&= 247; PC+= 2; Cycle = 8; }
OperatorsCB[ 0x9E ] = function() { Write((H << 8) + L, Read((H << 8) + L ) & 247); PC+= 2; Cycle = 16; }
OperatorsCB[ 0x9F ] = function() { A&= 247; PC+= 2; Cycle = 8; }

OperatorsCB[ 0xA0 ] = function() { B&= 239; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xA1 ] = function() { C&= 239; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xA2 ] = function() { D&= 239; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xA3 ] = function() { E&= 239; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xA4 ] = function() { H&= 239; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xA5 ] = function() { L&= 239; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xA6 ] = function() { Write((H << 8) + L, Read((H << 8) + L ) & 239); PC+= 2; Cycle = 16; }
OperatorsCB[ 0xA7 ] = function() { A&= 239; PC+= 2; Cycle = 8; }

OperatorsCB[ 0xA8 ] = function() { B&= 223; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xA9 ] = function() { C&= 223; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xAA ] = function() { D&= 223; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xAB ] = function() { E&= 223; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xAC ] = function() { H&= 223; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xAD ] = function() { L&= 223; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xAE ] = function() { Write((H << 8) + L, Read((H << 8) + L ) & 223); PC+= 2; Cycle = 16; }
OperatorsCB[ 0xAF ] = function() { A&= 223; PC+= 2; Cycle = 8; }

OperatorsCB[ 0xB0 ] = function() { B&= 191; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xB1 ] = function() { C&= 191; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xB2 ] = function() { D&= 191; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xB3 ] = function() { E&= 191; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xB4 ] = function() { H&= 191; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xB5 ] = function() { L&= 191; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xB6 ] = function() { Write((H << 8) + L, Read((H << 8) + L ) & 191); PC+= 2; Cycle = 16; }
OperatorsCB[ 0xB7 ] = function() { A&= 191; PC+= 2; Cycle = 8; }

OperatorsCB[ 0xB8 ] = function() { B&= 127; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xB9 ] = function() { C&= 127; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xBA ] = function() { D&= 127; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xBB ] = function() { E&= 127; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xBC ] = function() { H&= 127; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xBD ] = function() { L&= 127; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xBE ] = function() { Write((H << 8) + L, Read((H << 8) + L ) & 127); PC+= 2; Cycle = 16; }
OperatorsCB[ 0xBF ] = function() { A&= 127; PC+= 2; Cycle = 8; }



//Set bit

OperatorsCB[ 0xC0 ] = function() { B|= 1; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xC1 ] = function() { C|= 1; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xC2 ] = function() { D|= 1; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xC3 ] = function() { E|= 1; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xC4 ] = function() { H|= 1; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xC5 ] = function() { L|= 1; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xC6 ] = function() { Write((H << 8) + L, Read((H << 8) + L ) | 1); PC+= 2; Cycle = 16; }
OperatorsCB[ 0xC7 ] = function() { A|= 1; PC+= 2; Cycle = 8; }

OperatorsCB[ 0xC8 ] = function() { B|= 2; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xC9 ] = function() { C|= 2; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xCA ] = function() { D|= 2; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xCB ] = function() { E|= 2; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xCC ] = function() { H|= 2; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xCD ] = function() { L|= 2; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xCE ] = function() { Write((H << 8) + L, Read((H << 8) + L ) | 2); PC+= 2; Cycle = 16; }
OperatorsCB[ 0xCF ] = function() { A|= 2; PC+= 2; Cycle = 8; }

OperatorsCB[ 0xD0 ] = function() { B|= 4; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xD1 ] = function() { C|= 4; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xD2 ] = function() { D|= 4; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xD3 ] = function() { E|= 4; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xD4 ] = function() { H|= 4; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xD5 ] = function() { L|= 4; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xD6 ] = function() { Write((H << 8) + L, Read((H << 8) + L ) | 4); PC+= 2; Cycle = 16; }
OperatorsCB[ 0xD7 ] = function() { A|= 4; PC+= 2; Cycle = 8; }

OperatorsCB[ 0xD8 ] = function() { B|= 8; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xD9 ] = function() { C|= 8; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xDA ] = function() { D|= 8; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xDB ] = function() { E|= 8; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xDC ] = function() { H|= 8; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xDD ] = function() { L|= 8; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xDE ] = function() { Write((H << 8) + L, Read((H << 8) + L ) | 8); PC+= 2; Cycle = 16; }
OperatorsCB[ 0xDF ] = function() { A|= 8; PC+= 2; Cycle = 8; }

OperatorsCB[ 0xE0 ] = function() { B|= 16; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xE1 ] = function() { C|= 16; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xE2 ] = function() { D|= 16; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xE3 ] = function() { E|= 16; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xE4 ] = function() { H|= 16; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xE5 ] = function() { L|= 16; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xE6 ] = function() { Write((H << 8) + L, Read((H << 8) + L ) | 16); PC+= 2; Cycle = 16; }
OperatorsCB[ 0xE7 ] = function() { A|= 16; PC+= 2; Cycle = 8; }

OperatorsCB[ 0xE8 ] = function() { B|= 32; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xE9 ] = function() { C|= 32; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xEA ] = function() { D|= 32; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xEB ] = function() { E|= 32; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xEC ] = function() { H|= 32; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xED ] = function() { L|= 32; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xEE ] = function() { Write((H << 8) + L, Read((H << 8) + L ) | 32); PC+= 2; Cycle = 16; }
OperatorsCB[ 0xEF ] = function() { A|= 32; PC+= 2; Cycle = 8; }

OperatorsCB[ 0xF0 ] = function() { B|= 64; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xF1 ] = function() { C|= 64; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xF2 ] = function() { D|= 64; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xF3 ] = function() { E|= 64; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xF4 ] = function() { H|= 64; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xF5 ] = function() { L|= 64; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xF6 ] = function() { Write((H << 8) + L, Read((H << 8) + L ) | 64); PC+= 2; Cycle = 16; }
OperatorsCB[ 0xF7 ] = function() { A|= 64; PC+= 2; Cycle = 8; }

OperatorsCB[ 0xF8 ] = function() { B|= 128; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xF9 ] = function() { C|= 128; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xFA ] = function() { D|= 128; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xFB ] = function() { E|= 128; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xFC ] = function() { H|= 128; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xFD ] = function() { L|= 128; PC+= 2; Cycle = 8; }
OperatorsCB[ 0xFE ] = function() { Write((H << 8) + L, Read((H << 8) + L ) | 128); PC+= 2; Cycle = 16; }
OperatorsCB[ 0xFF ] = function() { A|= 128; PC+= 2; Cycle = 8; }