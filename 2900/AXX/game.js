/*
game.js for Perlenspiel 3.3.x
Last revision: 2021-03-24 (BM)

The following comment lines are for JSHint <https://jshint.com>, a tool for monitoring code quality.
You may find them useful if your development environment is configured to support JSHint.
If you don't use JSHint (or are using it with a configuration file), you can safely delete these lines.
*/

/* jshint browser : true, devel : true, esversion : 6, freeze : true */
/* globals PS : true */

"use strict"; // Do NOT delete this directive!
var LIGHT = {
	//CONSTANTS
	GRID_WIDTH: 7, // width of grid
	GRID_HEIGHT: 16, // height of grid
	BOTTOM_ROW: 15,
	TOP_ROW: 0, // top row of grid
	FRAME_RATE: 2,	// animation frame rate; 6/60ths = 10 fps
	BG_COLOR: 0xFFFFFF, // background color
	LIGHT_COLOR: 0xF25856, //  color of light stream

	// Your bead colors

	COLORS : [
		0xF25856,
		0xE8863D,
		0xEBB830,
		0x4DBD74,
		0x439899,
		0x3588F2, //blue
		0xF24BF2 //magenta
	],


	//VARIABLES
	//These two arrays store the x and y postions of the light streams
	lightX: [],
	lightY: [],

	//FUNCTIONS
	//LIGHT.shoot()
	//When the bead reaches the top of the light stream it disapears
	shoot : function( x, y ){
		"use strict";
		PS.color( x, y, LIGHT.BG_COLOR );

	},

	tick : function () {
		var len, i, x, y;

		// The length of the LIGHT.lightX array is the current number of keys playing/light streams

		len = LIGHT.lightX.length; // number of keys

		// Loop through each active light stream
		// NOTE: We can't use a for/next loop in this case,
		// because we need to dynamically modify the index variable [i]
		// Javascript doesn't allow this in for/next loops

		i = 0;
		while ( i < len ) {
			// get current position of raindrop

			x = LIGHT.lightX[ i ];
			y = LIGHT.lightY[ i ];



			// If bead is below the top row, erase it and redraw one bead higher

			if ( y >= LIGHT.TOP_ROW ) {
				// erase the existing drop
				// PS.debug( "PS.COLOR @ " + x + ", " + y + "\n" );
				PS.color( x, y, LIGHT.BG_COLOR );

				// add 1 to y position

				y -= 1;

				// update its y position in the array

				LIGHT.lightY[ i ] = y;

				// Has drop reached the top row yet?

				if ( y >= LIGHT.TOP_ROW ) { // nope
					// Repaint the drop one bead lower

					PS.color( x, y, LIGHT.COLORS[x] ); // get color for this column
					PS.fade (x, y, 60);
				}

				// Bead has reached top, erase it!

				else {
					LIGHT.shoot( x, LIGHT.TOP_ROW );
				}

				// point index to next drop

				i += 1;

			}

			// Bead has already been splashed, so remove it from animation list

			else {
				LIGHT.lightX.splice( i, 1 );
				LIGHT.lightY.splice( i, 1 );

				// Arrays are now one element smaller, so update the array length variable
				// But leave the index variable [i] alone!
				// It's already pointing at the next drop

				len -= 1;
			}
		}
	}
};

/*
PS.init( system, options )
Called once after engine is initialized but before event-polling begins.
This function doesn't have to do anything, although initializing the grid dimensions with PS.gridSize() is recommended.
If PS.grid() is not called, the default grid dimensions (8 x 8 beads) are applied.
Any value returned is ignored.
[system : Object] = A JavaScript object containing engine and host platform information properties; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

let idTimer;

PS.init = function( system, options ) {
	// Change this string to your team name
	// Use only ALPHABETIC characters
	// No numbers, spaces or punctuation!

	const TEAM = "SmartWorld";


	PS.gridSize( LIGHT.GRID_WIDTH, LIGHT.GRID_HEIGHT );

	PS.gridColor( LIGHT.BG_COLOR );

	PS.border( PS.ALL, PS.ALL, 0 );



	// Draw bottom row
	PS.border(PS.ALL, 14, w);

	var w = {
		top: 0,
		bottom: 0,
		left: 1,
		right: 1,

	};

	for ( let x = 0; x < LIGHT.GRID_WIDTH; x += 1 ) {
		PS.color( x, LIGHT.BOTTOM_ROW, LIGHT.COLORS[x] );
		PS.borderColor(x, 14, LIGHT.COLORS[x]);
	}

	//Bead Size
	PS.scale( PS.ALL, 15, 90);


	//Audio Files
	PS.audioLoad ("l_hchord_f5", { lock : true } );
	PS.audioLoad ("l_hchord_g5", { lock : true } );
	PS.audioLoad ("l_hchord_c5", { lock : true } );
	PS.audioLoad ("l_hchord_d5", { lock : true } );
	PS.audioLoad ("l_hchord_e5", { lock : true } );

	//Status Line
	PS.statusColor( PS.COLOR_BLACK );
	PS.statusText( "Simple Music Toy" );

	idTimer = PS.timerStart( LIGHT.FRAME_RATE, LIGHT.tick );

	// Install additional initialization code
	// here as needed

	// PS.dbLogin() must be called at the END
	// of the PS.init() event handler (as shown)
	// DO NOT MODIFY THIS FUNCTION CALL
	// except as instructed

	PS.dbLogin( "imgd2900", TEAM, function ( id, user ) {
		if ( user === PS.ERROR ) {
			return;
		}
		PS.dbEvent( TEAM, "startup", user );
		PS.dbSend( TEAM, PS.CURRENT, { discard : true } );
	}, { active : false } );
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

	//Play different notes when different colors in the bottom row are pressed

	if (y === LIGHT.BOTTOM_ROW ) { //Only plays the note when the bottom row is selected
		y -= 1; // prevents bottom bead from being erased

		if (x === 0){
			PS.audioPlay("l_hchord_c5");
		}

		if (x === 1){
			PS.audioPlay("l_hchord_d5");
		}

		if (x === 2){
			PS.audioPlay("l_hchord_e5");
		}

		if (x === 3){
			PS.audioPlay("l_hchord_f5");
		}

		if (x === 4){
			PS.audioPlay("l_hchord_g5");
		}
	}

	//Add initial position to the animation list
	LIGHT.lightX.push( x );
	LIGHT.lightY.push( y );
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

