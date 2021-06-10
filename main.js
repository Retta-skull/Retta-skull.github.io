const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;
const COLORS = [
  'none',
  'cyan',
  'blue',
  'orange',
  'yellow',
  'green',
  'purple',
  'red'
];

const SHAPES = [
  [],
  [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
  [[2, 0, 0], [2, 2, 2], [0, 0, 0]],
  [[0, 0, 3], // 0,0 -> 2,0 ; 0,1 -> 1,0 ; 0,2 -> 0,0
   [3, 3, 3], // 1,0 -> 2,1 ; 1,1 -> 1,1 ; 1,2 -> 0,1 
   [0, 0, 0]],// 2,0 -> 2,2 ; 2,1 -> 1,2 ; 2,2 -> 0,2
  [[4, 4], [4, 4]],
  [[0, 5, 5], [5, 5, 0], [0, 0, 0]],
  [[0, 6, 0], [6, 6, 6], [0, 0, 0]],
  [[7, 7, 0], [0, 7, 7], [0, 0, 0]]
];

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
    randomizeTetrominoType(noOfTypes) {
      return Math.floor(Math.random() * noOfTypes + 1);
    }
    
    typeId = this.randomizeTetrominoType(COLORS.length);

    constructor(ctx) {
      this.ctx = ctx;
      this.spawn();
    }

    spawn() {
      this.shape = SHAPES[typeId];
      this.color = COLORS[typeId];
      
      // Starting position.
      this.x = 3;
      this.y = 0;
    }
}// 테트리스 조각 뽑기

let board = new Board();
function play() {
  board = getEmptyBoard();
  let piece = new Piece(ctx);
  piece.draw();
  board.piece = piece;
}