class Rank {
  static TWO = new Rank("2", 2);
  static THREE = new Rank("3", 3);
  static FOUR = new Rank("4", 4);
  static FIVE = new Rank("5", 5);
  static SIX = new Rank("6", 6);
  static SEVEN = new Rank("7", 7);
  static EIGHT = new Rank("8", 8);
  static NINE = new Rank("9", 9);
  static TEN = new Rank("T", 10);
  static JACK = new Rank("J", 11);
  static QUEEN = new Rank("Q", 12);
  static KING = new Rank("K", 13);
  static ACE = new Rank("A", 14);

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
        return Rank.TWO;
      case "3":
        return Rank.THREE;
      case "4":
        return Rank.FOUR;
      case "5":
        return Rank.FIVE;
      case "6":
        return Rank.SIX;
      case "7":
        return Rank.SEVEN;
      case "8":
        return Rank.EIGHT;
      case "9":
        return Rank.NINE;
      case "T":
        return Rank.TEN;
      case "J":
        return Rank.JACK;
      case "Q":
        return Rank.QUEEN;
      case "K":
        return Rank.KING;
      case "A":
        return Rank.ACE;
      default:
        throw new Error(`Invalid rank: ${s}`);
    }
  }
}

export default Rank;
