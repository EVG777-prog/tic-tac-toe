class TicTacToe {
    constructor() {
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayerSymbol = 'x';
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(r, c) {
        let z = this.currentPlayerSymbol;

        if (this.field[r][c] === null) {
            this.field[r][c] = z;
            if (this.field[0][c] == z && this.field[1][c] == z && this.field[2][c] == z) {
                this.winner = z;
            }
            if (this.field[r][0] == z && this.field[r][1] == z && this.field[r][2] == z) {
                this.winner = z;
            }

            if (r == 1 && c == 1) {
                if ((this.field[0][0] == z && this.field[1][1] == z && this.field[2][2] == z) ||
                    (this.field[2][0] == z && this.field[1][1] == z && this.field[0][2] == z)) {
                    this.winner = z;
                }
            }
            if ((r == 2 && c == 0) || (r == 0 && c == 2)) {
                if (this.field[2][0] == z && this.field[1][1] == z && this.field[0][2] == z) {
                    this.winner = z;
                }
            }
            if ((r == 0 && c == 0) || (r == 2 && c == 2)) {
                if (this.field[0][0] == z && this.field[1][1] == z && this.field[2][2] == z) {
                    this.winner = z;
                }
            }

            if (this.currentPlayerSymbol == 'x') {
                this.currentPlayerSymbol = 'o';
            } else {
                this.currentPlayerSymbol = 'x';
            }
        }
    }

    isFinished() {
        if (this.winner != null || this.noMoreTurns()) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        let result = true;
        for (let x in this.field) {
            for (let y in this.field[x]) {
                if (this.field[x][y] === null) {
                    result = false;
                }
            }
        }
        return result;
    }

    isDraw() {
        if (this.winner === null && this.noMoreTurns()) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;