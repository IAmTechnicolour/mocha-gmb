var A = 0;
var F = 0;
var B = 0;
var C = 0;
var D = 0;
var E = 0;
var H = 0;
var L = 0;

var SP = 0;
var PC = 0x100;

var IME = 0;
var Halt = 0;
var Stop = 0;

var Cycle = 0;





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
	PC = 0x100;

	IME = 0;
	Halt = 0;
	Stop = 0;

	Cycle = 0;
	TotalCycles = 0;
}

function executionLoop() {

	while (TotalCycles < 70224) {
		if (!Halt) {
			Operators[Read(PC)]();
		}else{
			Cycle = 4;
		}

		updateTimers();
	}

	TotalCycles-= 70224;
}