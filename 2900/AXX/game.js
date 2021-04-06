/*
game.js for Perlenspiel 3.3.x
Last revision: 2021-03-24 (BM)

The following comment lines are for JSHint <https://jshint.com>, a tool for monitoring code quality.
You may find them useful if your development environment is configured to support JSHint.
If you don't use JSHint (or are using it with a configuration file), you can safely delete these lines.
*/

/* jshint browser : true, devel : true, esversion : 6, freeze : true */
/* globals PS : true */



//Rose McGovern - Team Smart World - Assignment A17 for IMGD 2900 Digital Game Design I
//"Splash Tunes"
//This simple music toy allows a user to play piano notes from the C major scale, C, E, & G
//The user plays the notes by hovering over an area of the grid
//The lower the user hovers on the screen the higher the volume of the note is


"use strict"; // Do NOT delete this directive!
var LIGHT = {
	//CONSTANTS
	GRID_WIDTH: 8, // width of grid
	GRID_HEIGHT: 10, // height of grid
	BOTTOM_ROW: 9,
	TOP_ROW: 0, // top row of grid
	FRAME_RATE: 2,	// animation frame rate; 6/60ths = 10 fps
	BG_COLOR: 0xFFFFFF, // background color
	LIGHT_COLOR: 0xF25856, //  color of light stream

	// Bead colors
	COLORS : [

		0x9E3939, //Dark Red
		0xF25856, //Red
		0xE8863D, //Orange
		0xEBB830, //Yellow
		0x4DBD74, //Green
		0x439899, //Teal
		0x25524E, //Blue
		0x283F52 //Dark Blue
	],


	//VARIABLES
	//These two arrays store the x and y postions of the light streams
	lightX: [],
	lightY: [],

	//FUNCTIONS
	//LIGHT.shoot()
	//When the animation reaches the top of the "light stream"  or grid it disappears
	shoot : function( x, y ){
		"use strict";
		PS.color( x, y, LIGHT.BG_COLOR );

	},

	tick : function () {
		var len, i, x, y;

		// The length of the LIGHT.lightX array is the current number of keys playing or animations

		len = LIGHT.lightX.length; // number of keys

		// Loop through each active light stream

		i = 0;
		while ( i < len ) {
			// get current position of colored bead aka "light drop"

			x = LIGHT.lightX[ i ];
			y = LIGHT.lightY[ i ];



			// If bead is below the top row, erase it and redraw one bead higher

			if ( y >= LIGHT.TOP_ROW ) {

				// erase the existing colored bead
				PS.color( x, y, LIGHT.BG_COLOR );

				// subtract 1 to y position
				y -= 1;

				// update its y position in the array
				LIGHT.lightY[ i ] = y;

				// Has the colored bead reached the top row yet?
				if ( y >= LIGHT.TOP_ROW ) { // nope
					// Repaint the colored bead one bead lower

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

	const TEAM = "SmartWorld";


	PS.gridSize( LIGHT.GRID_WIDTH, LIGHT.GRID_HEIGHT );

	PS.gridColor( LIGHT.BG_COLOR );

	// Init upper beads
	// This assigns a fader to each bead programmed to BEGIN any color change
	// with its default color

	for ( let y = 0; y < LIGHT.BOTTOM_ROW; y += 1 ) {
		for ( let x = 0; x < LIGHT.GRID_WIDTH; x += 1 ) {
			PS.color( x, y, LIGHT.BG_COLOR );
			PS.border( x, y, 0 ); // *BM* Use borders to "shrink" beads instead of scaling
			PS.borderColor( x, y, LIGHT.BG_COLOR );
			PS.fade( x, y, 60, { rgb : LIGHT.COLORS[ x ] } ); // *BM* This is where the magic happens!
		}
	}

	// Init bottom row
	// Note: Beads are small enough that border size cannot be increased.

	for ( let x = 0; x < LIGHT.GRID_WIDTH; x += 1 ) {
		PS.color( x, LIGHT.BOTTOM_ROW, LIGHT.COLORS[ x ] );
		PS.scale( x, LIGHT.BOTTOM_ROW, 90 ); // *BM* These can be scaled with no danger of misfires
		PS.borderColor( x, LIGHT.BOTTOM_ROW, LIGHT.COLORS[ x ] );
	}




	//New audio files for c major chord
	PS.audioLoad ("piano_c3", { lock : true} );
	PS.audioLoad ("piano_e3", { lock : true} );
	PS.audioLoad ("piano_g3", { lock : true} );
	PS.audioLoad ("piano_c4", { lock : true} );
	PS.audioLoad ("piano_e4", { lock : true} );
	PS.audioLoad ("piano_g4", { lock : true} );
	PS.audioLoad ("piano_c5", { lock : true} );
	PS.audioLoad ("piano_e5", { lock : true} );


	//Status Line
	PS.statusColor( PS.COLOR_BLACK );
	PS.statusText( "Splash Tunes" );

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



PS.touch = function( x, y, data, options ) {

};



PS.release = function( x, y, data, options ) {

};



PS.enter = function( x, y, data, options ) {

//Plays a sound when the user enters a bead, the lower the bead y postion, the lower the volume
	if (y === LIGHT.BOTTOM_ROW ) { //Only plays the note when the bottom row is selected
		y -= 1; // prevents bottom bead from being erased

		if (x === 0){
			PS.audioPlay("piano_c3", { volume: 0.5});
		}

		if (x === 1){
			PS.audioPlay("piano_e3", { volume: 0.5});
		}

		if (x === 2){
			PS.audioPlay("piano_g3", { volume: 0.5});
		}

		if (x === 3){
			PS.audioPlay("piano_c4", { volume: 0.5});
		}

		if (x === 4){
			PS.audioPlay("piano_e4", { volume: 0.5});
		}
		if (x === 5){
			PS.audioPlay("piano_g4", { volume: 0.5});
		}
		if (x === 6){
			PS.audioPlay("piano_c5", { volume: 0.5});
		}
		if (x === 7){
			PS.audioPlay("piano_e5", { volume: 0.5});
		}

	}

	//Adds postion to array
	LIGHT.lightX.push( x );
	LIGHT.lightY.push( y );
	//8th row
	if (y === 8 ) {
		y -= 1; // prevents bottom bead from being erased

		if (x === 0){
			PS.audioPlay("piano_c3", { volume: 0.45});
		}

		if (x === 1){
			PS.audioPlay("piano_e3", { volume: 0.45});
		}

		if (x === 2){
			PS.audioPlay("piano_g3", { volume: 0.45});
		}

		if (x === 3){
			PS.audioPlay("piano_c4", { volume: 0.45});
		}

		if (x === 4){
			PS.audioPlay("piano_e4", { volume: 0.45});
		}
		if (x === 5){
			PS.audioPlay("piano_g4", { volume: 0.45});
		}
		if (x === 6){
			PS.audioPlay("piano_c5", { volume: 0.45});
		}
		if (x === 7){
			PS.audioPlay("piano_e5", { volume: 0.9});
		}

	}

	//7th row
	if (y === 7 ) {
		y -= 1; // prevents bottom bead from being erased

		if (x === 0){
			PS.audioPlay("piano_c3", { volume: 0.4});
		}

		if (x === 1){
			PS.audioPlay("piano_e3", { volume: 0.4});
		}

		if (x === 2){
			PS.audioPlay("piano_g3", { volume: 0.4});
		}

		if (x === 3){
			PS.audioPlay("piano_c4", { volume: 0.4});
		}

		if (x === 4){
			PS.audioPlay("piano_e4", { volume: 0.4});
		}
		if (x === 5){
			PS.audioPlay("piano_g4", { volume: 0.4});
		}
		if (x === 6){
			PS.audioPlay("piano_c5", { volume: 0.4});
		}
		if (x === 7){
			PS.audioPlay("piano_e5", { volume: 0.4});
		}

	}

	//6th row
	if (y === 6 ) {
		y -= 1; // prevents bottom bead from being erased

		if (x === 0){
			PS.audioPlay("piano_c3", { volume: 0.35});
		}

		if (x === 1){
			PS.audioPlay("piano_e3", { volume: 0.35});
		}

		if (x === 2){
			PS.audioPlay("piano_g3", { volume: 0.35});
		}

		if (x === 3){
			PS.audioPlay("piano_c4", { volume: 0.35});
		}

		if (x === 4){
			PS.audioPlay("piano_e4", { volume: 0.35});
		}
		if (x === 5){
			PS.audioPlay("piano_g4", { volume: 0.35});
		}
		if (x === 6){
			PS.audioPlay("piano_c5", { volume: 0.35});
		}
		if (x === 7){
			PS.audioPlay("piano_e5", { volume: 0.35});
		}


	}

	//5th row
	if (y === 5 ) {
		y -= 1; // prevents bottom bead from being erased

		if (x === 0){
			PS.audioPlay("piano_c3", { volume: 0.3});
		}

		if (x === 1){
			PS.audioPlay("piano_e3", { volume: 0.3});
		}

		if (x === 2){
			PS.audioPlay("piano_g3", { volume: 0.3});
		}

		if (x === 3){
			PS.audioPlay("piano_c4", { volume: 0.3});
		}

		if (x === 4){
			PS.audioPlay("piano_e4", { volume: 0.3});
		}
		if (x === 5){
			PS.audioPlay("piano_g4", { volume: 0.3});
		}
		if (x === 6){
			PS.audioPlay("piano_c5", { volume: 0.3});
		}
		if (x === 7){
			PS.audioPlay("piano_e5", { volume: 0.3});
		}


	}

	//4th row
	if (y === 4 ) {
		y -= 1; // prevents bottom bead from being erased

		if (x === 0){
			PS.audioPlay("piano_c3", { volume: 0.25});
		}

		if (x === 1){
			PS.audioPlay("piano_e3", { volume: 0.25});
		}

		if (x === 2){
			PS.audioPlay("piano_g3", { volume: 0.25});
		}

		if (x === 3){
			PS.audioPlay("piano_c4", { volume: 0.25});
		}

		if (x === 4){
			PS.audioPlay("piano_e4", { volume: 0.25});
		}
		if (x === 5){
			PS.audioPlay("piano_g4", { volume: 0.25});
		}
		if (x === 6){
			PS.audioPlay("piano_c5", { volume: 0.25});
		}
		if (x === 7){
			PS.audioPlay("piano_e5", { volume: 0.25});
		}


	}

	//3th row
	if (y === 3 ) {
		y -= 1; // prevents bottom bead from being erased

		if (x === 0){
			PS.audioPlay("piano_c3", { volume: 0.2});
		}

		if (x === 1){
			PS.audioPlay("piano_e3", { volume: 0.2});
		}

		if (x === 2){
			PS.audioPlay("piano_g3", { volume: 0.2});
		}

		if (x === 3){
			PS.audioPlay("piano_c4", { volume: 0.2});
		}

		if (x === 4){
			PS.audioPlay("piano_e4", { volume: 0.2});
		}
		if (x === 5){
			PS.audioPlay("piano_g4", { volume: 0.2});
		}
		if (x === 6){
			PS.audioPlay("piano_c5", { volume: 0.2});
		}
		if (x === 7){
			PS.audioPlay("piano_e5", { volume: 0.2});
		}

	}

	 //2nd row
	 if (y === 2 ) {
		y -= 1; // prevents bottom bead from being erased

		if (x === 0){
			PS.audioPlay("piano_c3", { volume: 0.15});
		}

		if (x === 1){
			PS.audioPlay("piano_e3", { volume: 0.15});
		}

		if (x === 2){
			PS.audioPlay("piano_g3", { volume: 0.15});
		}

		if (x === 3){
			PS.audioPlay("piano_c4", { volume: 0.15});
		}

		if (x === 4){
			PS.audioPlay("piano_e4", { volume: 0.15});
		}
		if (x === 5){
			PS.audioPlay("piano_g4", { volume: 0.15});
		}
		if (x === 6){
			PS.audioPlay("piano_c5", { volume: 0.15});
		}
		if (x === 7){
			PS.audioPlay("piano_e5", { volume: 0.15});
		}

	}

	 //1st row
	 if (y === 1 ) {
		y -= 1; // prevents bottom bead from being erased

		if (x === 0){
			PS.audioPlay("piano_c3", { volume: 0.1});
		}

		if (x === 1){
			PS.audioPlay("piano_e3", { volume: 0.1});
		}

		if (x === 2){
			PS.audioPlay("piano_g3", { volume: 0.1});
		}

		if (x === 3){
			PS.audioPlay("l_piano_c4", { volume: 0.1});
		}

		if (x === 4){
			PS.audioPlay("piano_e4", { volume: 0.1});
		}
		if (x === 5){
			PS.audioPlay("piano_g4", { volume: 0.1});
		}
		if (x === 6){
			PS.audioPlay("piano_c5", { volume: 0.1});
		}
		if (x === 7){
			PS.audioPlay("piano_e5", { volume: 0.1});
		}


	}

	 //0th row
	 if (y === 0 ) {
		y -= 1; // prevents bottom bead from being erased

		if (x === 0){
			PS.audioPlay("piano_c3", { volume: 0.05});
		}

		if (x === 1){
			PS.audioPlay("piano_e3", { volume: 0.05});
		}

		if (x === 2){
			PS.audioPlay("piano_g3", { volume: 0.05});
		}

		if (x === 3){
			PS.audioPlay("piano_c4", { volume: 0.05});
		}

		if (x === 4){
			PS.audioPlay("piano_e4", { volume: 0.05});
		}
		if (x === 5){
			PS.audioPlay("piano_g4", { volume: 0.05});
		}
		if (x === 6){
			PS.audioPlay("piano_c5", { volume: 0.05});
		}
		if (x === 7){
			PS.audioPlay("piano_e5", { volume: 0.05});
		}

	}





};



PS.exit = function( x, y, data, options ) {

};


PS.exitGrid = function( options ) {

};


PS.keyDown = function( key, shift, ctrl, options ) {


};

PS.keyUp = function( key, shift, ctrl, options ) {

};



PS.input = function( sensors, options ) {

};



PS.shutdown = function( options ) {

};

