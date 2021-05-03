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
Any value returned is ignored.
[system : Object] = A JavaScript object containing engine and host platform information properties; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/
var G;

( function () {
		"use strict";

		// Private variables

		var timer = null; // timer id, null if none
		var count = 0; // countdown value

		// Private timer function
		// Called once per second

		var tick = function () {
			count -= 1;
			if (count < 1) {
				PS.timerStop(timer);
				timer = null; // allows restart
				PS.audioPlay("fx_bang");
				PS.color(0, 0, PS.COLOR_GRAY); // flash bead
				//G.nuke(); // redraw nuke
				PS.statusText("Final Score: ");
			} else {

			}
		};

		G = {

			//CONSTANTS
			GRID_WIDTH_RED1: 4, // width of grid
			GRID_HEIGHT_RED1: 4, // height of grid
			GRID_WIDTH_RED2: 6, // width of grid
			GRID_HEIGHT_RED2: 6, // height of grid
			GRID_WIDTH_RED3: 8, // width of grid
			GRID_HEIGHT_RED3: 8, // height of grid
			GRID_SIZE_GREEN1: 4,
			GRID_SIZE_GREEN2: 6,
			GRID_SIZE_GREEN3: 8,
			GRID_SIZE_BLUE1: 4,
			GRID_SIZE_BLUE2: 6,
			GRID_SIZE_BLUE3: 8,

			BG_COLOR: 0x1a1a1a,
			COLOR_RED: 0xff4d4d,
			COLOR_SOLORED1: 0xed3737,
			COLOR_SOLORED2: 0xff4040,
			COLOR_SOLORED3: 0xe64040,

			COLOR_GREEN: 0x69c972,
			COLOR_SOLOGREEN1: 0x56945c,
			COLOR_SOLOGREEN2: 0x7dc984,
			COLOR_SOLOGREEN3: 0x5eb866,

			COLOR_BLUE: 0x5ca5ff,
			COLOR_SOLOBLUE1: 0x2e8cff,
			COLOR_SOLOBLUE1a: 0x3d93fc,
			COLOR_SOLOBLUE2: 0x5191e0,
			COLOR_SOLOBLUE2a: 0x639be0,
			COLOR_SOLOBLUE3: 0x70b0ff,
			COLOR_SOLOBLUE3a: 0x5e9be6,


			//FUNCTIONS

			//GENERATE RANDOM BEAD

			randomBeadGreen1: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_GREEN1 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_GREEN1 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOGREEN1);
			},
			randomBeadGreen2: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_GREEN2 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_GREEN2 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOGREEN2);
			},

			randomBeadGreen3: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_GREEN3 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_GREEN3 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOGREEN3);
			},

			randomBeadRed1: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_WIDTH_RED1 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_HEIGHT_RED1 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLORED1);
			},
			randomBeadRed2: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_WIDTH_RED2 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_HEIGHT_RED2 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLORED2);
			},

			randomBeadRed3: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_WIDTH_RED3 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_HEIGHT_RED3 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLORED3);
			},

			randomBeadBlue1: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_BLUE1 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_BLUE1 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOBLUE1);
			},
			randomBeadBlue1a: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_BLUE1 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_BLUE1 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOBLUE1a);
			},

			randomBeadBlue2: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_BLUE2 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_BLUE2 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOBLUE2);
			},

			randomBeadBlue2a: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_BLUE2 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_BLUE2 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOBLUE2a);
			},
			randomBeadBlue3: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_BLUE3 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_BLUE3 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOBLUE3);
			},

			randomBeadBlue3a: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_BLUE3 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_BLUE3 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOBLUE3a);
			},


			level1red: function () {
				PS.gridSize(G.GRID_WIDTH_RED1, G.GRID_HEIGHT_RED1)
				PS.color(PS.ALL, PS.ALL, G.COLOR_RED);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				//PS.statusText("SELECT THE DIFFERENT COLOR");
				PS.statusColor(PS.COLOR_WHITE);

				this.randomBeadRed1();
			},

			level2red: function () {
				PS.gridSize(G.GRID_WIDTH_RED2, G.GRID_HEIGHT_RED2);
				PS.color(PS.ALL, PS.ALL, G.COLOR_RED);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				//PS.statusText("SELECT THE DIFFERENT COLOR");
				PS.statusColor(PS.COLOR_WHITE);

				this.randomBeadRed2();
			},

			level3red: function () {
				PS.gridSize(G.GRID_WIDTH_RED3, G.GRID_HEIGHT_RED3);
				PS.color(PS.ALL, PS.ALL, G.COLOR_RED);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				//PS.statusText("SELECT THE DIFFERENT COLOR");
				PS.statusColor(PS.COLOR_WHITE);

				this.randomBeadRed3();
			},

			level1green: function () {
				PS.gridSize(G.GRID_SIZE_GREEN1, G.GRID_SIZE_GREEN1);
				PS.color(PS.ALL, PS.ALL, G.COLOR_GREEN);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				//PS.statusText("SELECT THE DIFFERENT COLOR");
				PS.statusColor(PS.COLOR_WHITE);

				this.randomBeadGreen1();
			},

			level2green: function () {
				PS.gridSize(G.GRID_SIZE_GREEN2, G.GRID_SIZE_GREEN2);
				PS.color(PS.ALL, PS.ALL, G.COLOR_GREEN);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				//PS.statusText("SELECT THE DIFFERENT COLOR");
				PS.statusColor(PS.COLOR_WHITE);

				this.randomBeadGreen2();
			},

			level3green: function () {
				PS.gridSize(G.GRID_SIZE_GREEN3, G.GRID_SIZE_GREEN3);
				PS.color(PS.ALL, PS.ALL, G.COLOR_GREEN);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				//PS.statusText("SELECT THE DIFFERENT COLOR");
				PS.statusColor(PS.COLOR_WHITE);

				this.randomBeadGreen3();
			},

			level1blue: function () {
				PS.gridSize(G.GRID_SIZE_BLUE1, G.GRID_SIZE_BLUE1)
				PS.color(PS.ALL, PS.ALL, G.COLOR_BLUE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				//PS.statusText("SELECT THE DIFFERENT COLOR");
				PS.statusColor(PS.COLOR_WHITE);

				this.randomBeadBlue1();
			},

			level1ablue: function () {
				PS.gridSize(G.GRID_SIZE_BLUE1, G.GRID_SIZE_BLUE1)
				PS.color(PS.ALL, PS.ALL, G.COLOR_BLUE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				//PS.statusText("SELECT THE DIFFERENT COLOR");
				PS.statusColor(PS.COLOR_WHITE);

				this.randomBeadBlue1a();
			},

			level2blue: function () {
				PS.gridSize(G.GRID_SIZE_BLUE2, G.GRID_SIZE_BLUE2)
				PS.color(PS.ALL, PS.ALL, G.COLOR_BLUE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				//PS.statusText("SELECT THE DIFFERENT COLOR");
				PS.statusColor(PS.COLOR_WHITE);

				this.randomBeadBlue2();
			},

			level2ablue: function () {
				PS.gridSize(G.GRID_SIZE_BLUE2, G.GRID_SIZE_BLUE2)
				PS.color(PS.ALL, PS.ALL, G.COLOR_BLUE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				//PS.statusText("SELECT THE DIFFERENT COLOR");
				PS.statusColor(PS.COLOR_WHITE);

				this.randomBeadBlue2a();
			},

			level3blue: function () {
				PS.gridSize(G.GRID_SIZE_BLUE3, G.GRID_SIZE_BLUE3)
				PS.color(PS.ALL, PS.ALL, G.COLOR_BLUE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				//PS.statusText("SELECT THE DIFFERENT COLOR");
				PS.statusColor(PS.COLOR_WHITE);

				this.randomBeadBlue3();
			},

			level3ablue: function () {
				PS.gridSize(G.GRID_SIZE_BLUE3, G.GRID_SIZE_BLUE3)
				PS.color(PS.ALL, PS.ALL, G.COLOR_BLUE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				//PS.statusText("SELECT THE DIFFERENT COLOR");
				PS.statusColor(PS.COLOR_WHITE);

				this.randomBeadBlue3a();
			},
			/*
                        //ARRAYS FOR EACH LEVEL
                        LEVEL1: [
                            G.level1red(),
                            G.level1green(),
                        ],

                        LEVEL2: [
                            G.level2red(),
                            G.level2green(),
                        ],

                        LEVEL3: [
                            G.level3red(),
                            G.level3green(),
                        ],


             */
			/*
            //choose random color for each level
            level1: function(){
                let randomLev1 = G.LEVEL1[Math.floor(Math.random() * G.LEVEL1.length)];
                return randomLev1;
            },

            level2: function(){
                let randomLev2 = G.LEVEL2[Math.floor(Math.random() * G.LEVEL2.length)];
                return randomLev2;
            },

            level3: function(){
                let randomLev3 = G.LEVEL3[Math.floor(Math.random() * G.LEVEL3.length)];
                return randomLev3;
            },



			 */

			// Start the timer if not already running

			start : function () {
				if ( !timer ) { // null if not running
					let count = 30;
					let id = PS.timerStart( 60, function () {
						if ( count > 0 ) {
							PS.statusText( "Countdown:  " + count );
							count -= 1;
						}
						else {
							PS.timerStop( id );
							PS.statusText( "Final Score: *Insert final*" );
							PS.color (PS.ALL, PS.ALL, PS.COLOR_WHITE);
						}
					} );

				}
			}


		}
	}()
)
PS.init = function (system, options) {
	PS.statusText( "Select the Different Color" );

	G.start();
	G.level1red();

	const TEAM = "smartworld";

	// This code should be the last thing
	// called by your PS.init() handler.
	// DO NOT MODIFY IT, except for the change
	// explained in the comment below.

	PS.dbLogin("imgd2900", TEAM, function (id, user) {
		if (user === PS.ERROR) {
			return;
		}
		PS.dbEvent(TEAM, "startup", user);
		PS.dbSend(TEAM, PS.CURRENT, {discard: true});
	}, {active: true});

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

PS.touch = function (x, y, data, options) {


	//if correct on red level 1 go to level 2
	if (PS.color(x, y) === G.COLOR_SOLORED1) { //anything from array of solo colors
		G.level1blue();
	}
	if (PS.color(x, y) === G.COLOR_SOLOBLUE1) { //anything from array of solo colors
		G.level1green();
	}
	if (PS.color(x, y) === G.COLOR_SOLOGREEN1) { //anything from array of solo colors
		G.level1ablue();
	}
	if (PS.color(x, y) === G.COLOR_SOLOBLUE1a) { //anything from array of solo colors
		G.level2red();
	}
	if (PS.color(x, y) === G.COLOR_SOLORED2) {
		G.level2blue();
	}
	if (PS.color(x, y) === G.COLOR_SOLOBLUE2) { //anything from array of solo colors
		G.level2green();
	}
	if (PS.color(x, y) === G.COLOR_SOLOGREEN2) { //anything from array of solo colors
		G.level2ablue();
	}
	if (PS.color(x, y) === G.COLOR_SOLOBLUE2a) { //anything from array of solo colors
		G.level3red();
	}
	if (PS.color(x, y) === G.COLOR_SOLORED3) { //anything from array of solo colors
		G.level3blue();
	}
	if (PS.color(x, y) === G.COLOR_SOLOBLUE3) { //anything from array of solo colors
		G.level3green();
	}
	if (PS.color(x, y) === G.COLOR_SOLOGREEN3) { //anything from array of solo colors
		G.level3ablue();
	}
	if (PS.color(x, y) === G.COLOR_SOLOBLUE3a) { //anything from array of solo colors
		G.level3red();
	}
	if (PS.color(x, y) === G.COLOR_SOLORED3) { //anything from array of solo colors
		G.level3blue();
	}
	if (PS.color(x, y) === G.COLOR_SOLOBLUE3) { //anything from array of solo colors
		G.level3green();
	}
	if (PS.color(x, y) === G.COLOR_SOLOGREEN3) { //anything from array of solo colors
		G.level3ablue();
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

PS.release = function (x, y, data, options) {
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

PS.enter = function (x, y, data, options) {
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

PS.exit = function (x, y, data, options) {
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

PS.exitGrid = function (options) {
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

PS.keyDown = function (key, shift, ctrl, options) {
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

PS.keyUp = function (key, shift, ctrl, options) {
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

PS.input = function (sensors, options) {
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

PS.shutdown = function (options) {
	// Uncomment the following code line to verify operation:

	// PS.debug( "“Dave. My mind is going. I can feel it.”\n" );

	// Add code here to tidy up when Perlenspiel is about to close.
};


