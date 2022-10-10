class Brain {

    // notes.
    // so i think he needs to know about corners **
    // also order of moves
    // also whether theres an open 3x3
    // also holes
    // also fill distribution (maybe sums of squares of rows/cols, take max(rows, cols))
    // also EXPECTED SCORE
    // his best rn lol: 929 (hey thats NYC)
    constructor() {
        this.hyp = [];
        for (var i=0; i<10; i++) {
            var temp = [];
            for (var j=0; j<10; j++) {
                temp.push(board.bools[i][j]);
            }
            this.hyp.push(temp);
        }
        //console.log(this.hyp[0][0]);
    }

    hypReset() {
        this.hyp = [];
        for (var i=0; i<10; i++) {
            var temp = [];
            for (var j=0; j<10; j++) {
                temp.push(board.bools[i][j]);
            }
            this.hyp.push(temp);
        }
    }

    hypCheckMove(i, r, c) {
        if (pieces[i].id == 0) {return !this.hyp[r][c] && !this.hyp[r+1][c] && !this.hyp[r][c+1];}
        if (pieces[i].id == 1) {return !this.hyp[r+1][c+1] && !this.hyp[r+1][c] && !this.hyp[r][c+1];}
        if (pieces[i].id == 2) {return !this.hyp[r][c] && !this.hyp[r+1][c] && !this.hyp[r+1][c+1];}
        if (pieces[i].id == 3) {return !this.hyp[r][c] && !this.hyp[r][c+1] && !this.hyp[r+1][c+1];}
        if (pieces[i].id == 4) {return !this.hyp[r+2][c] && !this.hyp[r+2][c+1] && !this.hyp[r][c+2] && !this.hyp[r+1][c+2] && !this.hyp[r+2][c+2];}
        if (pieces[i].id == 5) {return !this.hyp[r][c] && !this.hyp[r][c+1] && !this.hyp[r][c+2] && !this.hyp[r+1][c] && !this.hyp[r+2][c];}
        if (pieces[i].id == 6) {return !this.hyp[r+2][c] && !this.hyp[r+2][c+1] && !this.hyp[r+2][c+2] && !this.hyp[r+1][c] && !this.hyp[r][c];}
        if (pieces[i].id == 7) {return !this.hyp[r][c] && !this.hyp[r][c+1] && !this.hyp[r][c+2] && !this.hyp[r+1][c+2] && !this.hyp[r+2][c+2];}
        if (pieces[i].id == 8) {return !this.hyp[r][c];}
        if (pieces[i].id == 9) {return !this.hyp[r][c] && !this.hyp[r+1][c];}
        if (pieces[i].id == 10) {return !this.hyp[r][c] && !this.hyp[r][c+1];}
        if (pieces[i].id == 11) {return !this.hyp[r][c] && !this.hyp[r+1][c] && !this.hyp[r+2][c];}
        if (pieces[i].id == 12) {return !this.hyp[r][c] && !this.hyp[r][c+1] && !this.hyp[r][c+2];}
        if (pieces[i].id == 13) {return !this.hyp[r][c] && !this.hyp[r+1][c] && !this.hyp[r+2][c] && !this.hyp[r+3][c];}
        if (pieces[i].id == 14) {return !this.hyp[r][c] && !this.hyp[r][c+1] && !this.hyp[r][c+2] && !this.hyp[r][c+3];}
        if (pieces[i].id == 15) {return !this.hyp[r][c] && !this.hyp[r+1][c] && !this.hyp[r+2][c] && !this.hyp[r+3][c] && !this.hyp[r+4][c];}
        if (pieces[i].id == 16) {return !this.hyp[r][c] && !this.hyp[r][c+1] && !this.hyp[r][c+2] && !this.hyp[r][c+3] && !this.hyp[r][c+4];}
        if (pieces[i].id == 17) {return !this.hyp[r][c] && !this.hyp[r+1][c] && !this.hyp[r][c+1] && !this.hyp[r+1][c+1];}
        if (pieces[i].id == 18) {return !this.hyp[r][c] && !this.hyp[r+1][c] && !this.hyp[r][c+1] && !this.hyp[r+1][c+1] && !this.hyp[r+2][c] && !this.hyp[r+2][c+1] && !this.hyp[r][c+2] && !this.hyp[r+1][c+2] && !this.hyp[r+2][c+2];}

    }

    // i had an idea.
    // move pc i in {0, 1, 2}
    hypMove(i, r, c) {
        var hypScore = 0;

        if (pieces[i].id == 0) {this.hyp[r][c] = true; this.hyp[r+1][c] = true; this.hyp[r][c+1] = true; this.hypScore+=3;}
        if (pieces[i].id == 1) {this.hyp[r+1][c+1] = true; this.hyp[r+1][c] = true; this.hyp[r][c+1] = true; this.hypScore+=3;}
        if (pieces[i].id == 2) {this.hyp[r][c] = true; this.hyp[r+1][c] = true; this.hyp[r+1][c+1] = true; this.hypScore+=3;}
        if (pieces[i].id == 3) {this.hyp[r][c] = true; this.hyp[r][c+1] = true; this.hyp[r+1][c+1] = true; this.hypScore+=3;}
        if (pieces[i].id == 4) {this.hyp[r+2][c] = true; this.hyp[r+2][c+1] = true; this.hyp[r][c+2] = true; this.hyp[r+1][c+2] = true; this.hyp[r+2][c+2] = true; this.hypScore+=5;}
        if (pieces[i].id == 5) {this.hyp[r][c] = true; this.hyp[r][c+1] = true; this.hyp[r][c+2] = true; this.hyp[r+1][c] = true; this.hyp[r+2][c] = true; this.hypScore+=5;}
        if (pieces[i].id == 6) {this.hyp[r+2][c] = true; this.hyp[r+2][c+1] = true; this.hyp[r+2][c+2] = true; this.hyp[r+1][c] = true; this.hyp[r][c] = true; this.hypScore+=5;}
        if (pieces[i].id == 7) {this.hyp[r][c] = true; this.hyp[r][c+1] = true; this.hyp[r][c+2] = true; this.hyp[r+1][c+2] = true; this.hyp[r+2][c+2] = true; this.hypScore+=5;}
        if (pieces[i].id == 8) {this.hyp[r][c] = true; this.hypScore+=1;}
        if (pieces[i].id == 9) {this.hyp[r][c] = true; this.hyp[r+1][c] = true; this.hypScore+=2;}
        if (pieces[i].id == 10) {this.hyp[r][c] = true; this.hyp[r][c+1] = true; this.hypScore+=2;}
        if (pieces[i].id == 11) {this.hyp[r][c] = true; this.hyp[r+1][c] = true; this.hyp[r+2][c] = true; this.hypScore+=3;}
        if (pieces[i].id == 12) {this.hyp[r][c] = true; this.hyp[r][c+1] = true; this.hyp[r][c+2] = true; this.hypScore+=3;}
        if (pieces[i].id == 13) {this.hyp[r][c] = true; this.hyp[r+1][c] = true; this.hyp[r+2][c] = true; this.hyp[r+3][c] = true; this.hypScore+=4;}
        if (pieces[i].id == 14) {this.hyp[r][c] = true; this.hyp[r][c+1] = true; this.hyp[r][c+2] = true; this.hyp[r][c+3] = true; this.hypScore+=4;}
        if (pieces[i].id == 15) {this.hyp[r][c] = true; this.hyp[r+1][c] = true; this.hyp[r+2][c] = true; this.hyp[r+3][c] = true; this.hyp[r+4][c] = true; this.hypScore+=5;}
        if (pieces[i].id == 16) {this.hyp[r][c] = true; this.hyp[r][c+1] = true; this.hyp[r][c+2] = true; this.hyp[r][c+3] = true; this.hyp[r][c+4] = true; this.hypScore+=5;}
        if (pieces[i].id == 17) {this.hyp[r][c] = true; this.hyp[r+1][c] = true; this.hyp[r][c+1] = true; this.hyp[r+1][c+1] = true; this.hypScore+=4;}
        if (pieces[i].id == 18) {this.hyp[r][c] = true; this.hyp[r+1][c] = true; this.hyp[r][c+1] = true; this.hyp[r+1][c+1] = true; this.hyp[r+2][c] = true; this.hyp[r+2][c+1] = true; this.hyp[r][c+2] = true; this.hyp[r+1][c+2] = true; this.hyp[r+2][c+2] = true; this.hypScore+=9;}
        this.hypCheck();
        //var ctr = 0; for (var i=0; i<10; i++) {for (var j=0; j<10; j++) {if (this.hyp[i][j]) {ctr ++;}}} console.log(ctr);
        //if (pieces[i].nOverlap(x, y)) {pieces[i].x = x; pieces[i].y = y; pieces[i].reinput(); pieces[i].mouseReleased(this.hyp, false);}
        return hypScore;
    }

    move(i, r, c) {
        pieces[i].x = c*30+50;
        pieces[i].y = r*30+50;
        pieces[i].mouseReleased();
    }

    // updateHyp() {
    //     for (var i=0; i<9; i++) {
    //         for (var j=0; j<9; j++) {
    //             this.hyp.bools[i][j] = this.hyp[i][j];
    //             this.hyp.colors[i][j] = this.board.colors[i][j];
    //             this.hyp.grid[i][j] = this.board.grid[i][j];
    //         }
    //     }
    // }

    hypCheck() {
        let clearR = [];
        let clearC = [];
        for (var c=0; c<10; c++) {
            var cCtr = 0;
            for (var r=0; r<10; r++) {
                if (this.hyp[r][c]) {cCtr++;}
            }
            if (cCtr == 10) {clearC.push(c);}
        }
        for (var r=0; r<10; r++) {
            var rCtr = 0;
            for (var c=0; c<10; c++) {
                if (this.hyp[r][c]) {rCtr ++;}
            }
            if (rCtr == 10) {clearR.push(r);}
        }
        //console.log(clearC.length);
        for (var c=0; c<clearC.length; c++) {
            for (var r=0; r<10; r++) {
                //this.colors[r][clearC[c]] = color(227);
                this.hyp[r][clearC[c]] = false;
            }
            //this.score += 10;
        }
        for (var r=0; r<clearR.length; r++) {
            //console.log("are yoy called");
            for (var c=0; c<10; c++) {
                //this.colors[clearR[r]][c] = color(227);
                this.hyp[clearR[r]][c] = false;
                //console.log(this.colors[r][c]);
            }
            //this.score += 10 - clearC.length;
        }
    }

    corners(bools) {
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
                if ( (bools[i][j] && bools[i+1][j+1]) || (bools[i][j+1] && bools[i+1][j])) {c+=2;}
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

    // only next piece rn
    bestMove() {
        this.hypReset();
        var id, r, c;
        if (!pieces[0].placed) id = 0;
        else if (!pieces[1].placed) id = 1;
        else if (!pieces[2].placed) id = 2;
        else return;
        r = c = -1;
        var min = 0;

        for (var i=0; i<=10 - pieces[id].h/30; i++) {
            for (var j=0; j<= 10 - pieces[id].w/30; j++) {
                if (this.hypCheckMove(id, i, j)) {
                    this.hypMove(id, i, j);
                    if (r == -1) {r = i; c = j; min = this.corners(this.hyp);}
                    else if (this.corners(this.hyp) < min) {r = i; c = j; min = this.corners(this.hyp);}
                    //this.whatDaHypDoin();
                    //console.log(this.corners(this.hyp));
                    this.hypReset();
                }
            }
        }
        if (r == -1) return null;
        else /*return [id, r, c];*/ this.move(id, r, c);
        //console.log(pieces[id].id);


        // this.hypMove(id, 0, 0);
        // this.whatDaHypDoin();
        // console.log(this.corners(this.hyp));

    }

    whatDaHypDoin() {
        // DELETE
        //this.hypReset();
        //
        var ret = "";
        for (var i=0; i<10; i++) {
            for (var j=0; j<10; j++) {
                //console.log(this.hyp[i][j]);
                if (this.hyp[i][j]) ret += "x";
                else ret += "-";
            }
            ret += "\n";
        }
        console.log(ret);
    }
}
