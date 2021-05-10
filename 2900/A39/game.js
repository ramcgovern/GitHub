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
var G; //test

( function () {
		"use strict";

		// Private variables

		var level = 0;
		var timer = null; // timer id, null if none
		var count = 0; // countdown value

		// Private timer function
		// Called once per second

		var tick = function () {
			count -= 1;
			if (count < 1) {
				PS.timerStop(timer);
				timer = null; // allows restart


			} else {

			}
		};

		G = {





			//CONSTANTS
			//Grid Sizes for each level
			GRID_WIDTH_RED1: 2,
			GRID_HEIGHT_RED1: 2,
			GRID_WIDTH_RED2: 5,
			GRID_HEIGHT_RED2: 5,
			GRID_WIDTH_RED3: 7,
			GRID_HEIGHT_RED3: 7,
			GRID_WIDTH_RED4: 9,
			GRID_HEIGHT_RED4: 9,
			GRID_SIZE_GREEN1: 3,
			GRID_SIZE_GREEN2: 6,
			GRID_SIZE_GREEN3: 8,
			GRID_SIZE_GREEN4: 10,
			GRID_SIZE_BLUE1: 3,
			GRID_SIZE_BLUE2: 5,
			GRID_SIZE_BLUE3: 8,
			GRID_SIZE_BLUE4: 9,
			GRID_SIZE_ORANGE1: 4,
			GRID_SIZE_ORANGE2: 6,
			GRID_SIZE_ORANGE3: 8,
			GRID_SIZE_ORANGE4: 10,
			GRID_SIZE_YELLOW1: 4,
			GRID_SIZE_YELLOW2: 7,
			GRID_SIZE_YELLOW3: 9,
			GRID_SIZE_YELLOW4: 10,
			GRID_SIZE_PURPLE1: 5,
			GRID_SIZE_PURPLE2: 7,
			GRID_SIZE_PURPLE3: 9,
			GRID_SIZE_PURPLE4: 10,
			GRID_SIZE_PURPLE5: 10,
			GRID_SIZE_YELLOW5: 10,
			GRID_SIZE_ORANGE5: 10,
			GRID_SIZE_GREEN5: 10,
			GRID_SIZE_RED5: 10,
			GRID_SIZE_BLUE5: 10,


			//Colors
			BG_COLOR: 0x1a1a1a,

			COLOR_RED: 0xff4d4d,
			COLOR_SOLORED1: 0xed3737,
			COLOR_SOLORED2: 0xff4040,
			COLOR_SOLORED3: 0xe64040,
			COLOR_SOLORED4: 0xef4242,
			COLOR_SOLORED5: 0xff4646,

			COLOR_GREEN: 0x69c972,
			COLOR_SOLOGREEN1: 0x5eb665,
			COLOR_SOLOGREEN2: 0x78e681,
			COLOR_SOLOGREEN3: 0x64be6a,
			COLOR_SOLOGREEN4: 0x6fd476,
			COLOR_SOLOGREEN5: 0x66c36d,

			COLOR_BLUE: 0x5ca5ff,
			COLOR_SOLOBLUE1: 0x4d8ed8,
			COLOR_SOLOBLUE1a: 0x569aee,
			COLOR_SOLOBLUE2: 0x5497e8,
			COLOR_SOLOBLUE2a: 0x579df2,
			COLOR_SOLOBLUE3: 0x5398e6,
			COLOR_SOLOBLUE4: 0x559cec,
			COLOR_SOLOBLUE5: 0x59a0f7,

			COLOR_ORANGE: 0xfb6648,
			COLOR_SOLOORANGE1: 0xd8573e,
			COLOR_SOLOORANGE2: 0xdf5a40,
			COLOR_SOLOORANGE3: 0xe65a42,
			COLOR_SOLOORANGE4: 0xef5645,
			COLOR_SOLOORANGE5: 0xef6c5e,

			COLOR_YELLOW: 0xffd041,
			COLOR_SOLOYELLOW1: 0xe6bb39,
			COLOR_SOLOYELLOW2: 0xe2b839,
			COLOR_SOLOYELLOW3: 0xe9be3a,
			COLOR_SOLOYELLOW4: 0xefc23b,
			COLOR_SOLOYELLOW5: 0xfad259,

			COLOR_PURPLE: 0x605975,
			COLOR_SOLOPURPLE1: 0x716989,
			COLOR_SOLOPURPLE2: 0x6e6686,
			COLOR_SOLOPURPLE3: 0x68607f,
			COLOR_SOLOPURPLE4: 0x58516b,
			COLOR_SOLOPURPLE5: 0x665e7c,

			//FUNCTIONS
			//Generate a random bead to put the different color on

			//Greens
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

			randomBeadGreen4: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_GREEN4 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_GREEN4 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOGREEN4);
			},

			randomBeadGreen5: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_GREEN5 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_GREEN5 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOGREEN5);
			},

			//Reds
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

			randomBeadRed4: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_WIDTH_RED4 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_HEIGHT_RED4 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLORED4);
			},
			randomBeadRed5: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_RED5 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_RED5 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLORED5);
			},


			//Blues
			randomBeadBlue1: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_BLUE1 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_BLUE1 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOBLUE1);
			},

			randomBeadBlue2: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_BLUE2 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_BLUE2 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOBLUE2);
			},


			randomBeadBlue3: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_BLUE3 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_BLUE3 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOBLUE3);
			},

			randomBeadBlue4: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_BLUE4 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_BLUE4 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOBLUE4);
			},
			randomBeadBlue5: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_BLUE5 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_BLUE5 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOBLUE5);
			},



			//Yellows
			randomBeadYellow1: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_YELLOW1 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_YELLOW1 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOYELLOW1);
			},
			randomBeadYellow2: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_YELLOW2 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_YELLOW2 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOYELLOW2);
			},

			randomBeadYellow3: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_YELLOW3 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_YELLOW3 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOYELLOW3);
			},

			randomBeadYellow4: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_YELLOW4 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_YELLOW4 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOYELLOW4);
			},

			randomBeadYellow5: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_YELLOW5 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_YELLOW5 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOYELLOW5);
			},

			//Orange
			randomBeadOrange1: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_ORANGE1 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_ORANGE1 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOORANGE1);
			},
			randomBeadOrange2: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_ORANGE2 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_ORANGE2 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOORANGE2);
			},

			randomBeadOrange3: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_ORANGE3 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_ORANGE3 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOORANGE3);
			},

			randomBeadOrange4: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_ORANGE4 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_ORANGE4 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOORANGE4);
			},

			randomBeadOrange5: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_ORANGE5 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_ORANGE5 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOORANGE5);
			},


			//Purple
			randomBeadPurple1: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_PURPLE1 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_PURPLE1 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOPURPLE1);
			},
			randomBeadPurple2: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_PURPLE2 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_PURPLE2 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOPURPLE2);
			},

			randomBeadPurple3: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_PURPLE3 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_PURPLE3 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOPURPLE3);
			},

			randomBeadPurple4: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_PURPLE4 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_PURPLE4 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOPURPLE4);
			},

			randomBeadPurple5: function () {

				let randomNumberX = Math.floor(Math.random() * (G.GRID_SIZE_PURPLE5 - 1));
				let randomNumberY = Math.floor(Math.random() * (G.GRID_SIZE_PURPLE5 - 1));
				PS.color(randomNumberX, randomNumberY, G.COLOR_SOLOPURPLE5);
			},

			//Functions that initiate new grids at each level
			//Each level is assigned a level number with the level variable to mark the score
//red
			level1red: function () {
				PS.gridSize(G.GRID_WIDTH_RED1, G.GRID_HEIGHT_RED1)
				PS.gridShadow( true, 0x7e2323);
				PS.color(PS.ALL, PS.ALL, G.COLOR_RED);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 1;
				this.randomBeadRed1();
			},

			level2red: function () {
				PS.gridSize(G.GRID_WIDTH_RED2, G.GRID_HEIGHT_RED2);
				PS.gridShadow( true, 0x7e2323);
				PS.color(PS.ALL, PS.ALL, G.COLOR_RED);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 7;
				this.randomBeadRed2();
			},

			level3red: function () {
				PS.gridSize(G.GRID_WIDTH_RED3, G.GRID_HEIGHT_RED3);
				PS.gridShadow( true, 0x7e2323);
				PS.color(PS.ALL, PS.ALL, G.COLOR_RED);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 13;
				this.randomBeadRed3();
			},

			level4red: function () {
				PS.gridSize(G.GRID_WIDTH_RED4, G.GRID_HEIGHT_RED4);
				PS.gridShadow( true, 0x7e2323);
				PS.color(PS.ALL, PS.ALL, G.COLOR_RED);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 19;
				this.randomBeadRed4();
			},

			level5red: function () {
				PS.gridSize(G.GRID_SIZE_RED5, G.GRID_SIZE_RED5);
				PS.gridShadow( true, 0x7e2323);
				PS.color(PS.ALL, PS.ALL, G.COLOR_RED);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 25;
				this.randomBeadRed5();
			},

			//blue
			level1blue: function () {

				PS.gridSize(G.GRID_SIZE_BLUE1, G.GRID_SIZE_BLUE1);
				PS.gridShadow( true, 0X335a87);
				PS.color(PS.ALL, PS.ALL, G.COLOR_BLUE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);

				level = 2;
				this.randomBeadBlue1();
			},


			level2blue: function () {
				PS.gridSize(G.GRID_SIZE_BLUE2, G.GRID_SIZE_BLUE2);
				PS.gridShadow( true, 0X335a87);
				PS.color(PS.ALL, PS.ALL, G.COLOR_BLUE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 8;
				this.randomBeadBlue2();
			},



			level3blue: function () {
				PS.gridSize(G.GRID_SIZE_BLUE3, G.GRID_SIZE_BLUE3)
				PS.gridShadow( true, 0x335a87);
				PS.color(PS.ALL, PS.ALL, G.COLOR_BLUE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 14;
				this.randomBeadBlue3();
			},

			level4blue: function () {
				PS.gridSize(G.GRID_SIZE_BLUE4, G.GRID_SIZE_BLUE4)
				PS.gridShadow( true, 0x335a87);
				PS.color(PS.ALL, PS.ALL, G.COLOR_BLUE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 20;
				this.randomBeadBlue4();
			},

			level5blue: function () {
				PS.gridSize(G.GRID_SIZE_BLUE5, G.GRID_SIZE_BLUE5)
				PS.gridShadow( true, 0x335a87);
				PS.color(PS.ALL, PS.ALL, G.COLOR_BLUE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 26;
				this.randomBeadBlue5();
			},



//green
			level1green: function () {
				PS.gridSize(G.GRID_SIZE_GREEN1, G.GRID_SIZE_GREEN1);
				PS.gridShadow( true, 0x3a703f);
				PS.color(PS.ALL, PS.ALL, G.COLOR_GREEN);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);

				level = 3;
				this.randomBeadGreen1();
			},

			level2green: function () {
				PS.gridSize(G.GRID_SIZE_GREEN2, G.GRID_SIZE_GREEN2);
				PS.gridShadow( true, 0x3a703f);
				PS.color(PS.ALL, PS.ALL, G.COLOR_GREEN);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 9;
				this.randomBeadGreen2();
			},

			level3green: function () {
				PS.gridSize(G.GRID_SIZE_GREEN3, G.GRID_SIZE_GREEN3);
				PS.gridShadow( true, 0x3a703f);
				PS.color(PS.ALL, PS.ALL, G.COLOR_GREEN);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 15;
				this.randomBeadGreen3();
			},

			level4green: function () {
				PS.gridSize(G.GRID_SIZE_GREEN4, G.GRID_SIZE_GREEN4);
				PS.gridShadow( true, 0x3a703f);
				PS.color(PS.ALL, PS.ALL, G.COLOR_GREEN);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 21;
				this.randomBeadGreen4();
			},

			level5green: function () {
				PS.gridSize(G.GRID_SIZE_GREEN5, G.GRID_SIZE_GREEN5);
				PS.gridShadow( true, 0x3a703f);
				PS.color(PS.ALL, PS.ALL, G.COLOR_GREEN);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 27;
				this.randomBeadGreen5();
			},
//orange
			level1orange: function () {
				PS.gridSize(G.GRID_SIZE_ORANGE1, G.GRID_SIZE_ORANGE1)
				PS.gridShadow( true, 0x7b3323);
				PS.color(PS.ALL, PS.ALL, G.COLOR_ORANGE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 4;
				this.randomBeadOrange1();
			},

			level2orange: function () {
				PS.gridSize(G.GRID_SIZE_ORANGE2, G.GRID_SIZE_ORANGE2);
				PS.gridShadow( true, 0x7b3323);
				PS.color(PS.ALL, PS.ALL, G.COLOR_ORANGE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);

				level = 10;
				this.randomBeadOrange2();
			},

			level3orange: function () {
				PS.gridSize(G.GRID_SIZE_ORANGE3, G.GRID_SIZE_ORANGE3);
				PS.gridShadow( true, 0x7b3323);
				PS.color(PS.ALL, PS.ALL, G.COLOR_ORANGE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 16;
				this.randomBeadOrange3();
			},

			level4orange: function () {
				PS.gridSize(G.GRID_SIZE_ORANGE4, G.GRID_SIZE_ORANGE4);
				PS.gridShadow( true, 0x7b3323);
				PS.color(PS.ALL, PS.ALL, G.COLOR_ORANGE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);

				level = 22;
				this.randomBeadOrange4();
			},

			level5orange: function () {
				PS.gridSize(G.GRID_SIZE_ORANGE5, G.GRID_SIZE_ORANGE5);
				PS.gridShadow( true, 0x7b3323);
				PS.color(PS.ALL, PS.ALL, G.COLOR_ORANGE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 28;
				this.randomBeadOrange5();
			},
//yellow
			level1yellow: function () {
				PS.gridSize(G.GRID_SIZE_YELLOW1, G.GRID_SIZE_YELLOW1);
				PS.gridShadow( true, 0x8e7528);
				PS.color(PS.ALL, PS.ALL, G.COLOR_YELLOW);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 5;
				this.randomBeadYellow1();
			},

			level2yellow: function () {
				PS.gridSize(G.GRID_SIZE_YELLOW2, G.GRID_SIZE_YELLOW2);
				PS.gridShadow( true, 0x8e7528);
				PS.color(PS.ALL, PS.ALL, G.COLOR_YELLOW);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 11;
				this.randomBeadYellow2();
			},

			level3yellow: function () {
				PS.gridSize(G.GRID_SIZE_YELLOW3, G.GRID_SIZE_YELLOW3);
				PS.gridShadow( true, 0x8e7528);
				PS.color(PS.ALL, PS.ALL, G.COLOR_YELLOW);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 17;
				this.randomBeadYellow3();
			},

			level4yellow: function () {
				PS.gridSize(G.GRID_SIZE_YELLOW4, G.GRID_SIZE_YELLOW4);
				PS.gridShadow( true, 0x8e7528);
				PS.color(PS.ALL, PS.ALL, G.COLOR_YELLOW);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 23;
				this.randomBeadYellow4();
			},

			level5yellow: function () {
				PS.gridSize(G.GRID_SIZE_YELLOW5, G.GRID_SIZE_YELLOW5);
				PS.gridShadow(true, 0x8e7528);
				PS.color(PS.ALL, PS.ALL, G.COLOR_YELLOW);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 29;
				this.randomBeadYellow5()
			},

//urple
			level1purple: function () {
				PS.gridSize(G.GRID_SIZE_PURPLE1, G.GRID_SIZE_PURPLE1);
				PS.gridShadow( true, 0x443f53);
				PS.color(PS.ALL, PS.ALL, G.COLOR_PURPLE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 6;
				this.randomBeadPurple1();
			},

			level2purple: function () {
				PS.gridSize(G.GRID_SIZE_PURPLE2, G.GRID_SIZE_PURPLE2);
				PS.gridShadow( true, 0x443f53);
				PS.color(PS.ALL, PS.ALL, G.COLOR_PURPLE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 12;
				this.randomBeadPurple2();
			},

			level3purple: function () {
				PS.gridSize(G.GRID_SIZE_PURPLE3, G.GRID_SIZE_PURPLE3);
				PS.gridShadow( true, 0x443f53);
				PS.color(PS.ALL, PS.ALL, G.COLOR_PURPLE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 18;
				this.randomBeadPurple3();
			},

			level4purple: function () {
				PS.gridSize(G.GRID_SIZE_PURPLE4, G.GRID_SIZE_PURPLE4);
				PS.gridShadow( true, 0x443f53);
				PS.color(PS.ALL, PS.ALL, G.COLOR_PURPLE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 24;
				this.randomBeadPurple4();
			},

			level5purple: function () {
				PS.gridSize(G.GRID_SIZE_PURPLE5, G.GRID_SIZE_PURPLE5);
				PS.gridShadow( true, 0x443f53);
				PS.color(PS.ALL, PS.ALL, G.COLOR_PURPLE);
				PS.gridColor(G.BG_COLOR);
				PS.borderColor(PS.ALL, PS.ALL, G.BG_COLOR);
				PS.statusColor(PS.COLOR_WHITE);
				level = 30;
				this.randomBeadPurple5();
			},



			// Start the timer if not already running

			start : function () {
				if ( !timer ) { // null if not running
					let count = 30;
					let id = PS.timerStart( 60, function () {
						if ( count > 0 ) {
							PS.statusText( "Countdown:  " + count + "   Score: " + level); //only updates score every second
							count -= 1;
						}
						else {
							PS.timerStop( id );
							PS.statusText( "Final Score: " + level );
							PS.fade(PS.ALL,PS.ALL,270);
							PS.color (PS.ALL, PS.ALL, PS.COLOR_WHITE);
							PS.gridShadow( true, PS.COLOR_WHITE);
							PS.audioPlay("fx_silencer");

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

		PS.audioLoad( "fx_boop", { lock : true } );
		PS.audioLoad( "fx_silencer", { lock : true } );

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
		}, {active: false});

	};


	PS.touch = function (x, y, data, options) {


		//if correct on red level 1 go to level 2...
		//Order of levels is red, blue, green, orange, yellow, purple
		if (PS.color(x, y) === G.COLOR_SOLORED1) {
			G.level1blue();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOBLUE1) {
			G.level1green();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOGREEN1) {
			G.level1orange();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOORANGE1) {
			G.level1yellow();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOYELLOW1) {
			G.level1purple();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOPURPLE1) {
			G.level2red();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLORED2) {
			G.level2blue();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOBLUE2) {
			G.level2green();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOGREEN2) {
			G.level2orange();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOORANGE2) {
			G.level2yellow();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOYELLOW2) {
			G.level2purple();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOPURPLE2) {
			G.level3red();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLORED3) {
			G.level3blue();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOBLUE3) {
			G.level3green();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOGREEN3) {
			G.level3orange();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOORANGE3) {
			G.level3yellow();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOYELLOW3) {
			G.level3purple();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOPURPLE3) {
			G.level4red();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLORED4) {
			G.level4blue();
			PS.audioPlay( "fx_boop" );
		}

		if (PS.color(x, y) === G.COLOR_SOLOBLUE4) {
			G.level4green();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOGREEN4) {
			G.level4orange();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOORANGE4) {
			G.level4yellow();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOYELLOW4) {
			G.level4purple();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOPURPLE4) {
			G.level5red();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLORED5) {
			G.level5blue();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOBLUE5) {
			G.level5green();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOGREEN5) {
			G.level5orange();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOORANGE5) {
			G.level5yellow();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOYELLOW5) {
			G.level5purple();
			PS.audioPlay( "fx_boop" );
		}
		if (PS.color(x, y) === G.COLOR_SOLOPURPLE5) {
			G.level5red();
			PS.audioPlay( "fx_boop" );
		}


		//Reset game after timer runs out
		if (PS.color(x,y) === PS.COLOR_BLACK){
			PS.init();
			G.start();
		}



	};



	PS.release = function (x, y, data, options) {
	};



	PS.enter = function (x, y, data, options) {

		//Makes border larger for the bead being hovered over
		PS.border(x,y, 2);

		//If the timer has run out (aka when the beads all turn white) turn them black with a fade on hover
		//Final screen Design
		if (PS.color(x,y) === PS.COLOR_WHITE){
			PS.color(x,y, G.BG_COLOR);
		}


	};



	PS.exit = function (x, y, data, options) {

		//Un-highlight border when you exit a bead
		PS.borderColor(x,y, G.BG_COLOR);
		PS.border(x,y, 1);

	};


	PS.exitGrid = function (options) {

	};


	PS.keyDown = function (key, shift, ctrl, options) {

	};

	PS.keyUp = function (key, shift, ctrl, options) {

	};



	PS.input = function (sensors, options) {

	};


	PS.shutdown = function (options) {

	};


