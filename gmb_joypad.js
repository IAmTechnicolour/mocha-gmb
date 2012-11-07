

DPadByte = 0xF
ButtonByte = 0xF

SelectButtonKeys = 32
SelectDirectionKeys = 0



MRead[ 0xFF00 ] = function( addr )
	if (SelectDirectionKeys) {
		return ButtonByte + SelectDirectionKeys + SelectButtonKeys
	}else if (SelectButtonKeys) {
		return DPadByte + SelectDirectionKeys + SelectButtonKeys
	}
}

MWrite[ 0xFF00 ] = function( addr, data )
	SelectDirectionKeys = data & 16
	SelectButtonKeys = data & 32
end