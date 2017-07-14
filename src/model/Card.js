import Rank from "./Rank";
import Suit from "./Suit";

class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  toString() {
    let s = "";

    switch (this.rank) {
      case Rank.TEN:
        s += "T";
        break;
      case Rank.JACK:
        s += "J";
        break;
      case Rank.QUEEN:
        s += "Q";
        break;
      case Rank.KING:
        s += "K";
        break;
      case Rank.ACE:
        s += "A";
        break;
      default:
        s += `${this.rank}`;
        break;
    }

    switch (this.suit) {
      case Suit.CLUB:
        s += "c";
        break;
      case Suit.DIAMOND:
        s += "d";
        break;
      case Suit.HEART:
        s += "h";
        break;
      case Suit.SPADE:
        s += "s";
        break;
    }

    return s;
  }
}

export default Card;
