class Rank {
  static TWO = new Rank(2, "2", "two", "twos");
  static THREE = new Rank(3, "3", "three", "threes");
  static FOUR = new Rank(4, "4", "four", "fours");
  static FIVE = new Rank(5, "5", "five", "fives");
  static SIX = new Rank(6, "6", "six", "sixes");
  static SEVEN = new Rank(7, "7", "seven", "sevens");
  static EIGHT = new Rank(8, "8", "eight", "eights");
  static NINE = new Rank(9, "9", "nine", "nines");
  static TEN = new Rank(10, "T", "ten", "tens");
  static JACK = new Rank(11, "J", "jack", "jacks");
  static QUEEN = new Rank(12, "Q", "queen", "queens");
  static KING = new Rank(13, "K", "king", "kings");
  static ACE = new Rank(14, "A", "ace", "aces");

  constructor(value, id, name, pluralName) {
    this.value = value;
    this.id = id;
    this.name = name;
    this.pluralName = pluralName;
  }

  toString() {
    return this.id;
  }

  static fromString(value) {
    switch (value) {
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
        throw new Error(`Invalid rank: ${value}`);
    }
  }
}

export default Rank;
