class Brain {

    // notes.
    // so i think he needs to know about corners **
    // also order of moves
      // subpoint: looking three moves ahead ** 
    // also whether theres an open 3x3
    // also holes
    // also fill distribution (maybe sums of squares of rows/cols, take max(rows, cols))
    // also EXPECTED SCORE
    // his best rn lol: 8334 -- 11856
    // MINE IS LITERALLY 30k
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

    numSqs(bools) {
        var ctr = 0;
        for (var i=0; i<10; i++) {
            for (var j=0; j<10; j++) {
                if (bools[i][j]) ctr++;
            }
        }
        return ctr;
    }

    weightedNumSqs(bools) {
        var sum = 0;
        for (var i=0; i<10; i++) {
            for (var j=0; j<10; j++) {
                if (bools[i][j]) sum += Math.min(i, 9-i)*Math.min(j, 9-j);
            }
        }
        return sum;
    }

    // only next piece rn
    bestMove() {
        this.hypReset();
        var order;
        var permutations;
        if (this.numSqs(this.hyp) >= 25) {
            permutations = [ [0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0] ];
        } else {
            if (pieces[0].w+pieces[0].h >= pieces[1].w+pieces[1].h) {
                if (pieces[1].w+pieces[1].h >= pieces[2].w+pieces[2].h) {permutations = [[2, 1, 0]];}
                else {
                    if (pieces[2].w+pieces[2].h >= pieces[0].w+pieces[0].h) {permutations = [[1, 0, 2]];}
                    else {permutations = [[1, 2, 0]];}
                }
            } else {
                if (pieces[0].w+pieces[0].h >= pieces[2].w+pieces[2].h) {permutations = [[2, 0, 1]];}
                else {
                    if (pieces[2].w+pieces[2].h >= pieces[1].w+pieces[1].h) {permutations = [[0, 1, 2]];}
                    else {permutations = [[0, 2, 1]];}
                }
            }
        }
        //var permutations = [ [0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0] ];

        var rs = [-1, -1, -1];
        var cs = [-1, -1, -1];
        var min = 0;
        
        for (var h=0; h<permutations.length; h++) {
        for (var i=0; i<=10-pieces[permutations[h][0]].h/30; i++) {
            for (var j=0; j<=10-pieces[permutations[h][0]].w/30; j++) {
                
                for (var k=0; k<=10-pieces[permutations[h][1]].h/30; k++) {
                    for (var l=0; l<=10-pieces[permutations[h][1]].w/30; l++) {

                        for (var m=0; m<=10-pieces[permutations[h][2]].h/30; m++) {
                            for (var n=0; n<=10-pieces[permutations[h][2]].w/30; n++) {

                                if (this.hypCheckMove(permutations[h][0], i, j)) {
                                    this.hypMove(permutations[h][0], i, j); this.hypCheck();
                                    if (this.hypCheckMove(permutations[h][1], k, l)) {
                                        this.hypMove(permutations[h][1], k, l); this.hypCheck();
                                        if (this.hypCheckMove(permutations[h][2], m, n)) {
                                            this.hypMove(permutations[h][2], m, n); this.hypCheck();
                                            //console.log(this.weightedNumSqs(this.hyp));
                                            if (rs[0] == -1) {
                                                order = permutations[h];
                                                min = this.corners(this.hyp) + this.numSqs(this.hyp)/100.0;
                                                rs[0] = i; rs[1] = k; rs[2] = m;
                                                cs[0] = j; cs[1] = l; cs[2] = n;
                                            }
                                            else if (this.corners(this.hyp)+this.numSqs(this.hyp)/100.0 < min) {
                                                order = permutations[h];
                                                min = this.corners(this.hyp);
                                                rs[0] = i; rs[1] = k; rs[2] = m;
                                                cs[0] = j; cs[1] = l; cs[2] = n;
                                            }
                                            //if (min < 10) {break loop1;}
                                        }
                                    }
                                    this.hypReset();
                                }
                            }
                        }
                    }
                }
            }
        }
        }
        //console.log(rs[0]);
        if (rs[0] == -1) {return;}
        this.move(order[0], rs[0], cs[0]); board.check(); this.move(order[1], rs[1], cs[1]); board.check(); this.move(order[2], rs[2], cs[2]); board.check(); 

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
