var money = 10;

document.getElementById("dollars").innerHTML = " $" + money;



function checkEr() {
    for (var i = 1; i < 5; i++) {
        for (var j = 1; j < 5; j++) {
            if (i != j) {
                if (document.getElementById('in' + i).value == document.getElementById('in' + j).value && document.getElementById('in' + i).value != "" && document.getElementById('in' + j).value != "") {

                    document.getElementById('output').innerHTML =
                        ("The field " + i + " and field " + j + " are exactly the same, Please change one of them...");
                    document.getElementById('in' + i).select();
                    return false;
                }
            }
        }
    }
	cashDrawer();

}

function cashDrawer() {
	if (money < 2) {
		document.getElementById("money").innerHTML = "You broke fuck!";
		return;
	}
    lotTo();
	money -= 2;
	document.getElementById("dollars").innerHTML = " $" + money;
}

function lotTo () {
	var in1 = parseInt(document.getElementById("in1").value);
    var in2 = parseInt(document.getElementById("in2").value);
    var in3 = parseInt(document.getElementById("in3").value);
    var in4 = parseInt(document.getElementById("in4").value);
    var lotArray = [in1, in2, in3, in4];
    var l = [];

    for (var i = 1; i <= 10; i++) {
        l.push(i);
    }

    while (l.length > 4) {
        l.splice(Math.floor(Math.random() * l.length), 1);
    }
    console.log(l);
	document.getElementById("lotto").innerHTML = l;
	getMatch(l, lotArray);
	return l;
}

function getMatch(a, b) {
    var matches = [];
    for ( var i = 0; i < a.length; i++ ) {
        for ( var e = 0; e < b.length; e++ ) {
            if ( a[i] === b[e] ) matches.push( a[i] );
        }
    }
	document.getElementById("output").innerHTML = "You matched: " + matches;
    console.log(matches);
	payOut(matches);
}

function payOut (i) {
	if (i.length == 1) {
		money += 2;
	} else if (i.length == 2) {
		money += 4;
	} else if (i.length == 3) {
		money += 16;
	} else if (i.length == 4) {
		money += 64;
	}
}


