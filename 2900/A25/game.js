/*
game.js for Perlenspiel 3.3.xd
Last revision: 2021-04-08 (BM)

Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
This version of Perlenspiel (3.3.x) is hosted at <https://ps3.perlenspiel.net>
Perlenspiel is Copyright © 2009-21 Brian Moriarty.
This file is part of the standard Perlenspiel 3.3.x devkit distribution.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with the Perlenspiel devkit. If not, see <http://www.gnu.org/licenses/>.
*/

/*
This JavaScript file is a template for creating new Perlenspiel 3.3.x games.
Add code to the event handlers required by your project.
Any unused event-handling function templates can be safely deleted.
Refer to the tutorials and documentation at <https://ps3.perlenspiel.net> for details.
*/

/*
The following comment lines are for JSHint <https://jshint.com>, a tool for monitoring code quality.
You may find them useful if your development environment is configured to support JSHint.
If you don't use JSHint (or are using it with a configuration file), you can safely delete these lines.
*/

/* jshint browser : true, devel : true, esversion : 6, freeze : true */
/* globals PS : true */

"use strict"; // Do NOT delete this directive!

/*
PS.init( system, options )
Called once after engine is initialized but before event-polling begins.
This function doesn't have to do anything, although initializing the grid dimensions with PS.gridSize() is recommended.
If PS.grid() is not called, the default grid dimensions (8 x 8 beads) are applied.
Any value returned is ignored
[system : Object] = A JavaScript object containing engine and host platform information properties; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/
var HUES= {
	//CONSTANTS
	GRID_WIDTH: 9, // width of grid
	GRID_HEIGHT: 9, // height of grid
	BOTTOM_ROW: 8,
	TOP_OF_GRID: 4,
	TOP_ROW: 0, // top row of grid
	BG_COLOR: 0xFFFFFF, // background color
	SOLO_X: 4,//X position of the solo color to match
	SOLO_Y: 1, //y position of the solo color to match

	GRID_COLORS: [ //all of the colors to choose random from

		0xd7d7ff,
		0xaeaeff,
		0x9292ff,
		0x7878ff,
		0x5a5afb,
		0x4848fd,
		0x3838fd,
		0x2020fd,
		0x0000ff,

		//5th row
		0xbabad7,
		0xa1a1d3,
		0x8a8ad0,
		0x7575d3,
		0x5b5bd5,
		0x4646d4,
		0x3232d7,
		0x1a1ada,
		0x0101dd,


		//6th row
		0xa2a2bd,
		0x8d8dbc,
		0x7d7dbd,
		0x6b6bbc,
		0x5353be,
		0x4242bd,
		0x4242bd,
		0x1d1dbe,
		0x0000be,

		//7th row
		0x6d6d99,
		0x65659d,
		0x56569c,
		0x49499d,
		0x3d3d9b,
		0x2f2f9b,
		0x1f1f9d,
		0x1010a0,
		0x0000a0,

		//8th row
		0x5c5c81,
		0x4e4e7f,
		0x42427d,
		0x39397c,
		0x2f2f7d,
		0x27277d,
		0x1e1e7c,
		0x131380,
		0x00007f
	],


}


	//FUNCTIONS
/**
	//isMatch tells if the selected beads color matches the color of the solo bead
	isMatch: function(x,y){

		if ( PS.color(x,y) === PS.color (this.SOLO_X, this.SOLO_Y)){
			PS.statusText( "Its a match!" );
		}
		else {
			PS.statusText( "Try Again!" );
		}
	}

}
**/

PS.init = function( system, options ) {
	// Uncomment the following code line
	// to verify operation:

	// PS.debug( "PS.init() called\n" );


	 PS.gridSize( HUES.GRID_WIDTH, HUES.GRID_HEIGHT );
	 PS.gridColor(HUES.BG_COLOR);

	 PS.border(PS.ALL, PS.ALL, 1);
	 PS.borderColor(PS.ALL, PS.ALL, PS.COLOR_WHITE);
	 //PICKS A RANDOM COLOR FROM THE ARRAY TO BE THE COLOR OF THE CHOSEN BEAD
	let randomColor = HUES.GRID_COLORS[Math.floor(Math.random() * HUES.GRID_COLORS.length)];

	PS.color(HUES.SOLO_X, HUES.SOLO_Y, randomColor);
	 //initial colors of all the beads in the gradient grid
	//top row 4th
	PS.color (0, 4, 0xd7d7ff);
	PS.color (1, 4, 0xaeaeff);
	PS.color (2, 4, 0x9292ff);
	PS.color (3, 4, 0x7878ff);
	PS.color (4, 4, 0x5a5afb);
	PS.color (5, 4, 0x4848fd);
	PS.color (6, 4, 0x3838fd);
	PS.color (7, 4, 0x2020fd);
	PS.color (8, 4, 0x0000ff);

	//5th row
	PS.color (0, 5, 0xbabad7);
	PS.color (1, 5, 0xa1a1d3);
	PS.color (2, 5, 0x8a8ad0);
	PS.color (3, 5, 0x7575d3);
	PS.color (4, 5, 0x5b5bd5);
	PS.color (5, 5, 0x4646d4);
	PS.color (6, 5, 0x3232d7);
	PS.color (7, 5, 0x1a1ada);
	PS.color (8, 5, 0x0101dd);


	//6th row
	PS.color (0, 6, 0xa2a2bd);
	PS.color (1, 6, 0x8d8dbc);
	PS.color (2, 6, 0x7d7dbd);
	PS.color (3, 6, 0x6b6bbc);
	PS.color (4, 6, 0x5353be);
	PS.color (5, 6, 0x4242bd);
	PS.color (6, 6, 0x4242bd);
	PS.color (7, 6, 0x1d1dbe);
	PS.color (8, 6, 0x0000be);

	//7th row
	PS.color (0, 7, 0x6d6d99);
	PS.color (1, 7, 0x65659d);
	PS.color (2, 7, 0x56569c);
	PS.color (3, 7, 0x49499d);
	PS.color (4, 7, 0x3d3d9b);
	PS.color (5, 7, 0x2f2f9b);
	PS.color (6, 7, 0x1f1f9d);
	PS.color (7, 7, 0x1010a0);
	PS.color (8, 7, 0x0000a0);

	//8th row
	PS.color (0, 8, 0x5c5c81);
	PS.color (1, 8, 0x4e4e7f);
	PS.color (2, 8, 0x42427d);
	PS.color (3, 8, 0x39397c);
	PS.color (4, 8, 0x2f2f7d);
	PS.color (5, 8, 0x27277d);
	PS.color (6, 8, 0x1e1e7c);
	PS.color (7, 8, 0x131380);
	PS.color (8, 8, 0x00007f);

/**
	for ( let y = HUES.TOP_OF_GRID; y <= HUES.BOTTOM_ROW; y += 1 ) {
		for ( let x = 0; x < HUES.GRID_WIDTH; x += 1 ) {
			//var i; //current color

			//i =

			var r, b, g;
			r= 25;
			b = 41;
			g = 88;
			PS.color( x, y,  (r + 20) , (b + 20),  (g + 20));

		}
	}
 **/


	 PS.statusText( "Select the matching box!" );

	// Add any other initialization code you need here.

	// Change this TEAM constant to your team name,
	// using ONLY alphabetic characters (a-z).
	// No numbers, spaces, punctuation or special characters!

	const TEAM = "SmartWorld";

	// This code should be the last thing
	// called by your PS.init() handler.
	// DO NOT MODIFY IT, except for the change
	// explained in the comment below.

	PS.dbLogin( "imgd2900", TEAM, function ( id, user ) {
		if ( user === PS.ERROR ) {
			return;
		}
		PS.dbEvent( TEAM, "startup", user );
		PS.dbSend( TEAM, PS.CURRENT, { discard : true } );
	}, { active : false } );
	
	// Change the false in the final line above to true
	// before deploying the code to your Web site.
};

/*
PS.touch ( x, y, data, options )
Called when the left mouse button is clicked over bead(x, y), or when bead(x, y) is touched.
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.touch = function( x, y, data, options ) {
	// Uncomment the following code line
	// to inspect x/y parameters:

	// PS.debug( "PS.touch() @ " + x + ", " + y + "\n" );

	// Add code here for mouse clicks/touches
	// over a bead.
	if ( PS.color(x,y) === PS.color (HUES.SOLO_X, HUES.SOLO_Y)){
		PS.statusText( "It's a match! Refresh to play again!");
		PS.borderColor(x,y, PS.COLOR_RED);
		PS.border(x, y, 5);
	}
	else {
		PS.statusText( "Try Again!" );
	}

};

/*
PS.release ( x, y, data, options )
Called when the left mouse button is released, or when a touch is lifted, over bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.release = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.release() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse button/touch is released over a bead.
};

/*
PS.enter ( x, y, button, data, options )
Called when the mouse cursor/touch enters bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.enter = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch enters a bead.
};

/*
PS.exit ( x, y, data, options )
Called when the mouse cursor/touch exits bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.exit = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch exits a bead.
};

/*
PS.exitGrid ( options )
Called when the mouse cursor/touch exits the grid perimeter.
This function doesn't have to do anything. Any value returned is ignored.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.exitGrid = function( options ) {
	// Uncomment the following code line to verify operation:

	// PS.debug( "PS.exitGrid() called\n" );

	// Add code here for when the mouse cursor/touch moves off the grid.
};

/*
PS.keyDown ( key, shift, ctrl, options )
Called when a key on the keyboard is pressed.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.keyDown = function( key, shift, ctrl, options ) {
	// Uncomment the following code line to inspect first three parameters:

	// PS.debug( "PS.keyDown(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is pressed.
};

/*
PS.keyUp ( key, shift, ctrl, options )
Called when a key on the keyboard is released.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.keyUp = function( key, shift, ctrl, options ) {
	// Uncomment the following code line to inspect first three parameters:

	// PS.debug( "PS.keyUp(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is released.
};

/*
PS.input ( sensors, options )
Called when a supported input device event (other than those above) is detected.
This function doesn't have to do anything. Any value returned is ignored.
[sensors : Object] = A JavaScript object with properties indicating sensor status; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
NOTE: Currently, only mouse wheel events are reported, and only when the mouse cursor is positioned directly over the grid.
*/

PS.input = function( sensors, options ) {
	// Uncomment the following code lines to inspect first parameter:

	//	 var device = sensors.wheel; // check for scroll wheel
	//
	//	 if ( device ) {
	//	   PS.debug( "PS.input(): " + device + "\n" );
	//	 }

	// Add code here for when an input event is detected.
};

/*
PS.shutdown ( options )
Called when the browser window running Perlenspiel is about to close.
This function doesn't have to do anything. Any value returned is ignored.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
NOTE: This event is generally needed only by applications utilizing networked telemetry.
*/

PS.shutdown = function( options ) {
	// Uncomment the following code line to verify operation:

	// PS.debug( "“Dave. My mind is going. I can feel it.”\n" );

	// Add code here to tidy up when Perlenspiel is about to close.
};

