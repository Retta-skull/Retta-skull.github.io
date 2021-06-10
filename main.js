const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);


class Board {
    grid;
    reset() {
      this.grid = this.getEmptyBoard();
    }
    getEmptyBoard() {
      return Array.from(
        {length: ROWS}, () => Array(COLS).fill(0)
      );
    }
  }//보드 초기화


class Piece {
    x;
    y;
    color;
    shape;
    ctx;
    
    constructor(ctx) {
      this.ctx = ctx;
      this.spawn();
    }
    
    spawn() {
      this.color = 'blue';
      this.shape = [
        [2, 0, 0], 
        [2, 2, 2], 
        [0, 0, 0]
      ];
      
      // Starting position.
      this.x = 3;
      this.y = 0;
    }
}// 테트리스 조각 모음

let board = new Board();
function play() {
  board.reset();
  console.table(board.grid);
}