/*
function GPUDraw() {

	//Setup the palette
	var BGPal = [200, 150, 100, 50];

	for( var i = 0; i <= 31; i++) {
		for( var j = 0; j <= 31; j++) {

			var TileID = VRAM[ BGMap + i + j*32 ];

			for( var ii = 0; ii <= 7; ii++) {

				if (TileData) {

					ByteA = VRAM[ 0x8000 + TileID*16 + ii*2 ];
					ByteB = VRAM[ 0x8000 + TileID*16 + ii*2 + 1 ];

				}else{

					TileID = (TileID & 127) - (TileID & 128);

					ByteA = VRAM[ 0x9000 + TileID*16 + ii*2 ];
					ByteB = VRAM[ 0x9000 + TileID*16 + ii*2 + 1 ];

				}


				for( var jj = 0; jj <= 7; jj++) {
						
					var PixelX = i*8 - jj + 7;	
					var PixelY = j*8 + ii;

					var BitA = (ByteA >> jj) & 1;
					var BitB = (ByteB >> jj) & 1;

					var Colour = BGPal[ (BitB << 1) + BitA];

					var Coords = (PixelY * 256 + PixelX)*4;

					canvasData.data[Coords++] = Colour;
			        canvasData.data[Coords++] = Colour;
			        canvasData.data[Coords++] = Colour;
			        canvasData.data[Coords++] = 255;


				}
			}
		}	
	}	


	ctx.putImageData(canvasData, 0, 0);
}

*/







function gpu_render() {

	ColourPalette = [0xFFFFFFFF, 0xFF90A8D0, 0xFF485870, 0xFF000000];

	var PalMem = IO[ 0xFF47 ];

	//Setup the palette
	var BGPal = [ PalMem & 3, (PalMem >> 2) & 3, (PalMem >> 4) & 3, (PalMem >> 6) & 3 ];


	var YCo = ScanlineY ;
	var PixelY = YCo;

	var ScrollY = IO[ 0xFF42 ];
	var ScrollX = IO[ 0xFF43 ];
	var WindowX = IO[ 0xFF4A ];
	var WindowY = IO[ 0xFF4B ];

	var TileX = ScrollX >> 3; //Division by 8 and flooring is the same as shifting right by 3
	var TileY = ((ScrollY + YCo) & 0xFF) >> 3; //Division by 8

	var XOffset = 7 - ( ScrollX & 7 );
	var YOffset = (ScrollY + YCo) & 7;

	var WinTileY = (YCo - WindowY) >> 3;
	var WinYOfffset = (YCo - WindowY) & 7; //Modulo 8 the same as & 7?

	var WinX = WindowX - 7;

	var ScanlineColour = [];
	var ScanlineData = [];


	if (BGEnable) {

		for (i = 0; i <= 20; i++) {

			var TileID = VRAM[ BGMap + ((i + TileX) & 0x1F) + TileY*32 ]

			if (TileData) {
				var ByteA = VRAM[ 0x8000 + TileID*16 + YOffset*2 ]
				var ByteB = VRAM[ 0x8000 + TileID*16 + YOffset*2 + 1 ]
			}else{
				TileID = (TileID & 127) - (TileID & 128);
				var ByteA = VRAM[ 0x9000 + TileID*16 + YOffset*2 ]
				var ByteB = VRAM[ 0x9000 + TileID*16 + YOffset*2 + 1 ]
			}

			for (j = 0; j <= 7; j++) {
					
				var PixelX = i*8 - j + XOffset ;

				if (PixelX >= 0 && PixelX <= 159) {

					var Data = ((ByteA >> j) & 1) + ((ByteB >> j) & 1)*2;
					var Colour = BGPal[ Data ];

					ScanlineColour[PixelX] = Colour;
					ScanlineData[PixelX] = Data;
				}
			}
		}
	}

	if (WindowEnable && YCo >= WindowY && WinX >= -7 && WinX < 160) {

		for (i = 0; i <= 20; i++) {

			var TileID = VRAM[ BGMap + ((i + TileX) & 0x1F) + TileY*32 ]

			if (TileData) {

				var ByteA = VRAM[ 0x8000 + TileID*16 + YOffset*2 ]
				var ByteB = VRAM[ 0x8000 + TileID*16 + YOffset*2 + 1 ]

			}else{

				TileID = (TileID & 127) - (TileID & 128);

				var ByteA = VRAM[ 0x9000 + TileID*16 + YOffset*2 ]
				var ByteB = VRAM[ 0x9000 + TileID*16 + YOffset*2 + 1 ]

			}


			for (j = 0; j <= 7; j++) {
					
				var PixelX = i*8 - j + WindowX

				if (PixelX >= 0 && PixelX <= 159) {

					var Data = ((ByteA >> j) & 1) + ((ByteB >> j) & 1)*2;
					var Colour = BGPal[ Data ];

					ScanlineColour[PixelX] = Colour;
					ScanlineData[PixelX] = Data;
				
				}
			}
		}
	}



	if (SpriteEnable) {

		var PalMem1 = IO[ 0xFF49 ]
		var PalMem2 = IO[ 0xFF48 ]

		var SpPal1 = [ PalMem1 & 3, (PalMem1 >> 2) & 3, (PalMem1 >> 4) & 3, (PalMem1 >> 6) & 3 ];
		var SpPal2 = [ PalMem2 & 3, (PalMem2 >> 2) & 3, (PalMem2 >> 4) & 3, (PalMem2 >> 6) & 3 ];

		if (!SpriteSize) {

			for (n = 160; n >= 0; n-= 4) {

				var YPos = 		OAM[ 0xFE00 + n ] - 16;

				if (ScanlineY >= YPos && ScanlineY < YPos + 8) {

					var TileID = 	OAM[ 0xFE00 + n + 2 ];
					var XPos = 		OAM[ 0xFE00 + n + 1 ] - 8;
					var SFlags =	OAM[ 0xFE00 + n + 3 ];
					
					var Alpha =  	SFlags & 128;
					var YFlip = 	SFlags & 64;
					var XFlip = 	SFlags & 32;
					var SPalID = 	SFlags & 16;

					var TileOffset = ( YFlip ? -(ScanlineY - YPos) + 7 : ScanlineY - YPos )*2;

					var ByteA = VRAM[ 0x8000 + TileID*16 + TileOffset ];
					var ByteB = VRAM[ 0x8000 + TileID*16 + TileOffset + 1 ];

					for (j = 0; j <= 7; j++) {
						var PixelX = (XFlip ? j + XPos : -j + 7 + XPos);
						if (PixelX >= 0 && PixelX <= 159) {
							var Data = ((ByteA >> j) & 1) + ((ByteB >> j) & 1)*2;
							if (Data) {
								var Colour = ( SPalID ? SpPal1[ Data ] : SpPal2[ Data ] );
								if ( !Alpha || !ScanlineData[PixelX] ) {
									ScanlineColour[PixelX] = Colour;
								}
							}
						}
					}


				}
			}

		}else{

			for (n = 160; n >= 0; n-= 4) {

				var YPos = 		OAM[ 0xFE00 + n ] - 16;

				if (ScanlineY >= YPos && ScanlineY < YPos + 16) {


					var TileID = 	OAM[ 0xFE00 + n + 2 ];
					var XPos = 		OAM[ 0xFE00 + n + 1 ] - 8;
					var SFlags =	OAM[ 0xFE00 + n + 3 ];
					
					var Alpha =  	SFlags & 128;
					var YFlip = 	SFlags & 64;
					var XFlip = 	SFlags & 32;
					var SPalID = 	SFlags & 16;

					var TileOffset = ( YFlip ? -(ScanlineY - YPos) + 15 : ScanlineY - YPos )*2;

					if (TileOffset < 8) {
						TileID&= 0xFE;
					}else{
						TileID|= 1;
						TileOffset-= 8;
					}

					var ByteA = VRAM[ 0x8000 + TileID*16 + TileOffset ];
					var ByteB = VRAM[ 0x8000 + TileID*16 + TileOffset + 1 ];

					for (j = 0; j <= 7; j++) {
						var PixelX = (XFlip ? j + XPos : -j + 7 + XPos);
						if (PixelX >= 0 && PixelX <= 159) {
							var Data = ((ByteA >> j) & 1) + ((ByteB >> j) & 1)*2;
							if (Data) {
								var Colour = ( SPalID ? SpPal1[ Data ] : SpPal2[ Data ] );
								if ( !Alpha || !ScanlineData[PixelX] ) {
									ScanlineColour[PixelX] = Colour;
								}

							}
						}
					}
				}
			}
		}
	}


	for (n = 0; n <= 159; n++) {
		PixelData[(PixelY * 160 + n)] = ColourPalette[ScanlineColour[n]]
	}

}
