class Playground {
  constructor(width, targetDiv) {
    this.width = width;
    this.targetDiv = targetDiv;
    this.tiles = [];

    var self = this;
    window.onresize = function () {
      self.setSize();
    };

    this.generate();
    this.snake = new Snake(5, this.tiles, this);
    this.generateFood();
  }

  generate() {
    var tileWidth = 100 / this.width;
    for (var b = 0; b < (this.width * this.width); b++) {
      var tile = new Tile(tileWidth);
      this.tiles.push(tile);
      this.targetDiv.appendChild(tile.div);
    }
    this.setSize();
  }
  setSize() {
    this.targetDiv.style.height = window.getComputedStyle(this.targetDiv).width;
    /* var style = window.getComputedStyle(this.targetDiv);
    this.targetDiv.style.height = style.width; */
  }
  generateFood() {
    var filteredTiles = this.tiles.filter( function (item) {
      return item.type === 'voidTile';
    });
    var randomNum = Math.floor(Math.random() * filteredTiles.length);
    filteredTiles[randomNum].setFood();
  }
}
