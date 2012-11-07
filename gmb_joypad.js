var DPadByte = 0xF;
var ButtonByte = 0xF;

var SelectButtonKeys = 32;
var SelectDirectionKeys = 0;



MRead[ 0xFF00 ] = function(addr) {
	if (SelectDirectionKeys) {
		return (ButtonByte + SelectDirectionKeys + SelectButtonKeys);
	}else if (SelectButtonKeys) {
		return (DPadByte + SelectDirectionKeys + SelectButtonKeys);
	}
}

MWrite[ 0xFF00 ] = function(addr, data) {
	SelectDirectionKeys = data & 16;
	SelectButtonKeys = data & 32;
}



keyDownFunc = function(evt) {
    var evt = evt || window.event;
    var k = evt.keyCode ? evt.keyCode : evt.charCode
    switch (k) {
        case 37: 
            DPadByte&= 13; //LEFT
            IF|= 16;
            break;
        case 38:
            DPadByte&= 11; //UP
            IF|= 16;
            break;
        case 39:
            DPadByte&= 14; //RIGHT
            IF|= 16;
            break;
        case 40:
            DPadByte&= 7; //DOWN
            IF|= 16;
            break;
        case 90:
            ButtonByte&= 14; //A 
            IF|= 16;
            break;
        case 88:
            ButtonByte&= 13; //B 
            IF|= 16;
            break;
        case 67:
            ButtonByte&= 7; //START
            IF|= 16;
            break;
        case 86:
            ButtonByte&= 11; //SELECT
            IF|= 16;
            break;
    }
};

keyUpFunc = function(evt) {
    var evt = evt || window.event;
    var k = evt.keyCode ? evt.keyCode : evt.charCode
    switch (k) {
        case 37: 
            DPadByte|= 2; //LEFT
            break;
        case 38:
            DPadByte|= 4; //UP
            break;
        case 39:
            DPadByte|= 1; //RIGHT
            break;
        case 40:
            DPadByte|= 8; //DOWN
            break;
        case 90:
            ButtonByte|= 1; //A 
            break;
        case 88:
            ButtonByte|= 2; //B 
            break;
        case 67:
            ButtonByte|= 8; //START
            break;
        case 86:
            ButtonByte|= 4; //SELECT
            break;
    }
};




window.onload = function(){
    document.onkeyup = keyUpFunc;
    document.body.onkeyup = keyUpFunc;    
    document.onkeydown = keyDownFunc;
    document.body.onkeydown = keyDownFunc;
}
