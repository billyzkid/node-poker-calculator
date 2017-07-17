class Suit {
  static CLUB = new Suit("♣", "c", "club", "clubs");
  static DIAMOND = new Suit("♦", "d", "diamond", "diamonds");
  static HEART = new Suit("♥", "h", "heart", "hearts");
  static SPADE = new Suit("♠", "s", "spade", "spades");

  constructor(symbol, id, name, pluralName) {
    this.symbol = symbol;
    this.id = id;
    this.name = name;
    this.pluralName = pluralName;
  }

  toString() {
    return this.symbol;
  }

  static fromString(value) {
    switch (value) {
      case "c":
        return Suit.CLUB;
      case "d":
        return Suit.DIAMOND;
      case "h":
        return Suit.HEART;
      case "s":
        return Suit.SPADE;
      default:
        throw new Error(`Invalid suit: ${value}`);
    }
  }
}

export default Suit;
