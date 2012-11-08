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

var IME = 1;
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
	PC = 0;

	IME = 1;
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

var Perf = 0;
var PerfTime = new Date().getTime();

function executionLoop() {

	var TotalCycles = 0;

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

	canvasData.data.set(buf8);
	ctx.putImageData(canvasData, 0, 0);

	Perf++;
	if (Perf == 60) {
		Perf = 0;
		var TimePerSecond = 1/(((new Date().getTime()) - PerfTime)/1000/60);
		PerfTime = new Date().getTime();

		document.getElementById("fps").innerHTML = ("FPS: " + TimePerSecond);
	}


}

