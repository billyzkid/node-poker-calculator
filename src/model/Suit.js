class Suit {
  static CLUB = new Suit("c", "♣");
  static DIAMOND = new Suit("d", "♦");
  static HEART = new Suit("h", "♥");
  static SPADE = new Suit("s", "♠");

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
        return Suit.CLUB;
      case "d":
        return Suit.DIAMOND;
      case "h":
        return Suit.HEART;
      case "s":
        return Suit.SPADE;
      default:
        throw new Error(`Invalid suit: ${s}`);
    }
  }
}

export default Suit;
