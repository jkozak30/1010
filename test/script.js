var hyp;

function corners(bools) {
    var c = 0;
    for (var i=0; i<9; i++) {
        for (var j=0; j<9; j++) {
            var t = 0;
            var f = 0;
            if (bools[i][j]) t++; else f++;
            if (bools[i+1][j]) t++; else f++;
            if (bools[i][j+1]) t++; else f++;
            if (bools[i+1][j+1]) t++; else f++;
            //console.log("square [" + i + " " + (i+1) + "] x [" + j + " " + (j+1) + "]:" + t + " "+ f);
            if (t == 3 || f == 3) { c++; }
            if ( t == 2 && ((bools[i][j] && bools[i+1][j+1]) || (bools[i][j+1] && bools[i+1][j]))) {c+=2;}
        }
    }
    //console.log(c);
    for (var i=0; i<9; i++) {
        if (bools[i][0] != bools[i+1][0]) c++;
        if (bools[i][9] != bools[i+1][9]) c++;
        if (bools[0][i] != bools[0][i+1]) c++;
        if (bools[9][i] != bools[9][i+1]) c++;
    }
    return c;
}

function hypCheck() {
    let clearR = [];
    let clearC = [];
    for (var c=0; c<10; c++) {
        var cCtr = 0;
        for (var r=0; r<10; r++) {
            if (hyp[r][c]) {cCtr++;}
        }
        if (cCtr == 10) {clearC.push(c);}
    }
    for (var r=0; r<10; r++) {
        var rCtr = 0;
        for (var c=0; c<10; c++) {
            if (hyp[r][c]) {rCtr ++;}
        }
        if (rCtr == 10) {clearR.push(r);}
    }
    //console.log(clearC.length);
    for (var c=0; c<clearC.length; c++) {
        for (var r=0; r<10; r++) {
            //this.colors[r][clearC[c]] = color(227);
            hyp[r][clearC[c]] = false;
        }
        //this.score += 10;
    }
    for (var r=0; r<clearR.length; r++) {
        //console.log("are yoy called");
        for (var c=0; c<10; c++) {
            //this.colors[clearR[r]][c] = color(227);
            hyp[clearR[r]][c] = false;
            //console.log(this.colors[r][c]);
        }
        //this.score += 10 - clearC.length;
    }
}

function weightedNumSqs(bools) {
    var sum = 0;
    for (var i=0; i<10; i++) {
        for (var j=0; j<10; j++) {
            if (bools[i][j]) sum += Math.min(i, 9-i)*Math.min(j, 9-j);
        }
    }
    return sum;
}

function whatDaHypDoin() {
    // DELETE
    //this.hypReset();
    //
    var ret = "";
    for (var i=0; i<10; i++) {
        for (var j=0; j<10; j++) {
            //console.log(this.hyp[i][j]);
            if (hyp[i][j]) ret += "x";
            else ret += "-";
        }
        ret += "\n";
    }
    console.log(ret);
}

function setup() {
    hyp = [];
    for (var i=0; i<10; i++) {
        var temp = [];
        for (var j=0; j<10; j++) {
            temp.push(false);
        }
        hyp.push(temp);
    }
    hyp[9][9] = true;
    hyp[8][9] = true;
    hyp[9][8] = true;
    hyp[4][4] = true;
    
    for (var i=0; i<10; i++) {
        hyp[0][i] = true;
    }
    hypCheck();
    whatDaHypDoin();
    //console.log(corners(hyp));
    console.log(weightedNumSqs(hyp));
}