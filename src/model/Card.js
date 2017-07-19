import Rank from "./Rank";
import Suit from "./Suit";

class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  toString() {
    return `${this.rank}${this.suit}`;
  }

  static fromString(s) {
    if (s.length !== 2) {
      throw new Error(`Invalid card: ${s}`);
    }

    const rank = Rank.fromString(s[0]);
    const suit = Suit.fromString(s[1]);

    return new Card(rank, suit);
  }
}

export default Card;
