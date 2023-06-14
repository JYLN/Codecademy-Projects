const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field;
    this.locationY = 0;
    this.locationX = 0;
    this.field[0][0] = pathCharacter;
  }

  getInput() {
    const input = prompt('Enter a direction: ');
    switch (input) {
      case 'W':
        this.locationY -= 1;
        break;
      case 'A':
        this.locationX -= 1;
        break;
      case 'S':
        this.locationY += 1;
        break;
      case 'D':
        this.locationX += 1;
        break;
      default:
        console.log('Enter W, A, S, or D');
        this.getInput();
        break;
    }
  }

  isInBounds() {
    return (
      this.locationY >= 0 &&
      this.locationX >= 0 &&
      this.locationY < this.field.length &&
      this.locationX < this.field[0].length
    );
  }

  isHole() {
    return this.field[this.locationY][this.locationX] === hole;
  }

  isHat() {
    return this.field[this.locationY][this.locationX] === hat;
  }

  playGame() {
    let start = true;
    while (start) {
      this.print();
      this.getInput();

      if (!this.isInBounds()) {
        console.log('OUT OF BOUNDS');
        start = false;
        break;
      }

      if (this.isHole()) {
        console.log('FELL DOWN A HOLE');
        start = false;
        break;
      }

      if (this.isHat()) {
        console.log('YOU FOUND THE HAT! CONGRATS');
        start = false;
        break;
      }

      this.field[this.locationY][this.locationX] = pathCharacter;
    }
  }

  print() {
    this.field.forEach(row => {
      console.log(row.join(''));
    });
  }

  static generateField(height, width) {
    const field = Array(height)
      .fill(0)
      .map(el => new Array(width));

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        field[y][x] = Math.random() > 0.2 ? fieldCharacter : hole;
      }
    }

    let hatLocation = [Math.floor(Math.random() * height), Math.floor(Math.random() * width)];

    while (hatLocation[0] === 0 && hatLocation[1] === 0) {
      hatLocation = [Math.floor(Math.random() * height), Math.floor(Math.random() * width)];
    }
    field[hatLocation[0]][hatLocation[1]] = hat;

    return field;
  }
}

// const myField = new Field([
//   ['*', '░', 'O'],
//   ['░', 'O', '░'],
//   ['░', '^', '░'],
// ]);

// myField.playGame();

const myField = new Field(Field.generateField(7, 7));
myField.playGame();
