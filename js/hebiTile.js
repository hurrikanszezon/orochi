class Tile {
  constructor(width) {
    this.width = width;
    this.div;
    this.type = 'voidTile';
    this.create();
  }
  create() {
    this.div = document.createElement('div');
    this.div.style.width = `${this.width}%`;
    this.div.style.height = `${this.width}%`;
    this.div.className = 'tile voidTile';
  }
  setFood() {
    this.div.classList.replace('voidTile', 'foodTile');
    this.div.classList.replace('snakeTile', 'foodTile');
    this.type = 'foodTile';
  }
  setSnake() {
    this.div.classList.replace('voidTile', 'snakeTile');
    this.div.classList.replace('foodTile', 'snakeTile');
    this.type = 'snakeTile';
  }
  setEmpty() {
    this.div.classList.replace('snakeTile', 'voidTile');
    this.div.classList.replace('foodTile', 'voidTile');
    this.type = 'voidTile';
  }
}
