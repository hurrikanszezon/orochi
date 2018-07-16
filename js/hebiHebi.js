class Snake {
  constructor(length, tiles) {
    this.length = length;
    this.tiles = tiles;
    this.body = [];
    this.start = [];
    this.direction = 'right';
    this.generateSnake();
  }
  generateSnake() {
    var startIndex = (this.tiles.length / 2) + this.length;
    for (var k = 0; k < this.length; k++) {
      this.tiles[startIndex - k].setSnake();
    }
  }
}
