
function startrace() {
	"use strict";

	var won = false;
	var hare = 1;
	var tortoise = 1;
	var roll = 0;

	window.document.writeln("ON YOUR MARK <br>");
	window.document.writeln("GET SET BANG!!! <br>");
	window.document.writeln("AND THEY&#39RE OFF!!! <br>");
	
	while ( !won ) {
		roll = Math.round( Math.random() * 10 );

		// Tortoise moves
		if( roll <= 5 ) { // tortoise
			// fast plod
			tortoise += 3;
		} else if ( roll <= 7 ) {
			// slip
			tortoise -= 6;
		} else if ( roll <= 10 ) {
			// slow plod
			tortoise += 1;
		}
	
		// Hare moves
		if( roll <= 2 ) { // hare
			// sleep
		} else if ( roll <= 4 ) {
			// big hop
			hare += 9;
		} else if ( roll <= 5 ) {
			// big slip
			hare -= 12;
		} else if ( roll <= 8 ) {
			// small hop
			hare += 1;
		} else if ( roll <= 10 ) {
			// small slip
			hare -= 2;
		}

		// Reset to 1 if out of bounds
		if ( hare < 1 ) {
			hare = 1;
		}
		if ( tortoise < 1 ) {
			tortoise = 1;
		}

		// Print line
		for (var i = 0; i <= 70; i++ ) {
			if ( hare == tortoise && hare == i ) {
				window.document.writeln("OUCH!!! <br>");
			} else if ( hare == i ) {
				window.document.writeln("H,");
			} else if ( tortoise == i ) {
				window.document.writeln("T,");
			} else {
				window.document.writeln("_,");
			}
		}
		window.document.writeln("<br>");
	
		if( hare >= 70 && tortoise >= 70 ) {
			won = true;
			window.alert("IT’S A TIE.");
		} else if ( hare >= 70 ) {
			won = true;
			window.alert("HARE WINS. YUCK!");
		} else if ( tortoise >= 70 ) {
			won = true;
			window.alert("TORTOISE WINS!!! YAY!!!");
		}
	}
}
