class Snake {
  constructor(length, tiles, parent) {
    this.length = length;
    this.tiles = tiles;
    this.parent = parent;
    this.body = [];
    this.start = [];
    this.direction = 1;
    this.pos = 0;
    this.generateSnake();
    this.startWatch();
    this.watchKeys();
  }
  startWatch() {
    var self = this;
    setInterval(function () {
      self.move();
    }, 42);
  }

  move() {
    switch (this.direction) {
    case 0:
      this.body.unshift(this.body[0] - Math.sqrt(this.tiles.length));
      break;
    case 1:
      this.body.unshift(this.body[0] + 1);
      break;
    case 2:
      this.body.unshift(this.body[0] + Math.sqrt(this.tiles.length));
      break;
    default:
      this.body.unshift(this.body[0] - 1);
    }
    if (this.tiles[this.body[0]].type !== 'foodTile') {
      this.tiles[this.body.pop()].setEmpty();
    } else {
      this.parent.generateFood();
    }

    for (var b = 0; b < this.body.length; b++) {
      this.tiles[this.body[b]].setSnake();
    }
  }

  generateSnake() {
    this.pos = (this.tiles.length / 2) + this.length;
    for (var k = 0; k < this.length; k++) {
      this.tiles[this.pos - 1].setSnake();
      this.body.push(this.pos - 1);
    }
  }

  watchKeys() {
    var self = this;
    document.body.addEventListener('keydown', function (event) {
      event.preventDefault();
  	if (event.keyCode === 37 && self.direction !== 1) {
        self.direction = 3;
      }
  	if (event.keyCode === 38 && self.directon !== 2) {
        self.direction = 0;
      }
  	if (event.keyCode === 39 && self.direction !== 3) {
        self.direction = 1;
      }
  	if (event.keyCode === 40 && self.direction !== 0) {
        self.direction = 2;
      }
    });
  }
}

