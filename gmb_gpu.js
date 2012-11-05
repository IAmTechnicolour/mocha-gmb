function GPUDraw(canvasid, map, offset) {

	var canvas = document.getElementById(canvasid);
	var ctx = canvas.getContext('2d');
	var canvasData = ctx.createImageData(canvas.width, canvas.height);

	//Setup the palette
	var BGPal = [200, 150, 100, 50];

	for( var i = 0; i <= 31; i++) {
		for( var j = 0; j <= 31; j++) {

			var TileID = VRAM[ map + i + j*32 ];

			for( var ii = 0; ii <= 7; ii++) {

				if (offset) {

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

					Coords = (PixelY * 256 + PixelX)*4;

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

