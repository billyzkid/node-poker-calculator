class Suit {
  static club = new Suit("c", "♣");
  static diamond = new Suit("d", "♦");
  static heart = new Suit("h", "♥");
  static spade = new Suit("s", "♠");

  static all = [
    Suit.club,
    Suit.diamond,
    Suit.heart,
    Suit.spade
  ];

  constructor(id, symbol) {
    this.id = id;
    this.symbol = symbol;
  }

  toString() {
    return this.symbol;
  }

  static fromString(s) {
    switch (s) {
      case "c":
        return Suit.club;
      case "d":
        return Suit.diamond;
      case "h":
        return Suit.heart;
      case "s":
        return Suit.spade;
      default:
        throw new Error(`Invalid suit: ${s}`);
    }
  }
}

export default Suit;
