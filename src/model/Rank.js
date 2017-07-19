class Rank {
  static two = new Rank("2", 2);
  static three = new Rank("3", 3);
  static four = new Rank("4", 4);
  static five = new Rank("5", 5);
  static six = new Rank("6", 6);
  static seven = new Rank("7", 7);
  static eight = new Rank("8", 8);
  static nine = new Rank("9", 9);
  static ten = new Rank("T", 10);
  static jack = new Rank("J", 11);
  static queen = new Rank("Q", 12);
  static king = new Rank("K", 13);
  static ace = new Rank("A", 14);

  static all = [
    Rank.two,
    Rank.three,
    Rank.four,
    Rank.five,
    Rank.six,
    Rank.seven,
    Rank.eight,
    Rank.nine,
    Rank.ten,
    Rank.jack,
    Rank.queen,
    Rank.king,
    Rank.ace
  ];

  constructor(id, value) {
    this.id = id;
    this.value = value;
  }

  toString() {
    return this.id;
  }

  static fromString(s) {
    switch (s) {
      case "2":
        return Rank.two;
      case "3":
        return Rank.three;
      case "4":
        return Rank.four;
      case "5":
        return Rank.five;
      case "6":
        return Rank.six;
      case "7":
        return Rank.seven;
      case "8":
        return Rank.eight;
      case "9":
        return Rank.nine;
      case "T":
        return Rank.ten;
      case "J":
        return Rank.jack;
      case "Q":
        return Rank.queen;
      case "K":
        return Rank.king;
      case "A":
        return Rank.ace;
      default:
        throw new Error(`Invalid rank: ${s}`);
    }
  }
}

export default Rank;
