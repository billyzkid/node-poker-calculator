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

  static fromString(value) {
    const rank = Rank.fromString(value[0]);
    const suit = Suit.fromString(value[1]);

    return new Card(rank, suit);
  }
}

export default Card;
