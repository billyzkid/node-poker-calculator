import Card from "./Card";
import Rank from "./Rank";
import Suit from "./Suit";

describe("Card", () => {
  test("should have expected exports", () => {
    expect(Card).toBeInstanceOf(Function);
  });

  describe("toString", () => {
    test("should return expected strings", () => {
      const cards = [];
      Suit.all.forEach((suit) => Rank.all.forEach((rank) => cards.push(new Card(rank, suit))));

      expect(cards).toHaveLength(52);
      expect(cards[0].toString()).toBe("2♣");
      expect(cards[1].toString()).toBe("3♣");
      expect(cards[2].toString()).toBe("4♣");
      expect(cards[3].toString()).toBe("5♣");
      expect(cards[4].toString()).toBe("6♣");
      expect(cards[5].toString()).toBe("7♣");
      expect(cards[6].toString()).toBe("8♣");
      expect(cards[7].toString()).toBe("9♣");
      expect(cards[8].toString()).toBe("T♣");
      expect(cards[9].toString()).toBe("J♣");
      expect(cards[10].toString()).toBe("Q♣");
      expect(cards[11].toString()).toBe("K♣");
      expect(cards[12].toString()).toBe("A♣");
      expect(cards[13].toString()).toBe("2♦");
      expect(cards[14].toString()).toBe("3♦");
      expect(cards[15].toString()).toBe("4♦");
      expect(cards[16].toString()).toBe("5♦");
      expect(cards[17].toString()).toBe("6♦");
      expect(cards[18].toString()).toBe("7♦");
      expect(cards[19].toString()).toBe("8♦");
      expect(cards[20].toString()).toBe("9♦");
      expect(cards[21].toString()).toBe("T♦");
      expect(cards[22].toString()).toBe("J♦");
      expect(cards[23].toString()).toBe("Q♦");
      expect(cards[24].toString()).toBe("K♦");
      expect(cards[25].toString()).toBe("A♦");
      expect(cards[26].toString()).toBe("2♥");
      expect(cards[27].toString()).toBe("3♥");
      expect(cards[28].toString()).toBe("4♥");
      expect(cards[29].toString()).toBe("5♥");
      expect(cards[30].toString()).toBe("6♥");
      expect(cards[31].toString()).toBe("7♥");
      expect(cards[32].toString()).toBe("8♥");
      expect(cards[33].toString()).toBe("9♥");
      expect(cards[34].toString()).toBe("T♥");
      expect(cards[35].toString()).toBe("J♥");
      expect(cards[36].toString()).toBe("Q♥");
      expect(cards[37].toString()).toBe("K♥");
      expect(cards[38].toString()).toBe("A♥");
      expect(cards[39].toString()).toBe("2♠");
      expect(cards[40].toString()).toBe("3♠");
      expect(cards[41].toString()).toBe("4♠");
      expect(cards[42].toString()).toBe("5♠");
      expect(cards[43].toString()).toBe("6♠");
      expect(cards[44].toString()).toBe("7♠");
      expect(cards[45].toString()).toBe("8♠");
      expect(cards[46].toString()).toBe("9♠");
      expect(cards[47].toString()).toBe("T♠");
      expect(cards[48].toString()).toBe("J♠");
      expect(cards[49].toString()).toBe("Q♠");
      expect(cards[50].toString()).toBe("K♠");
      expect(cards[51].toString()).toBe("A♠");
    });
  });

  describe("fromString", () => {
    test("should parse valid strings", () => {
      const card1 = Card.fromString("2c");
      expect(card1.rank).toBe(Rank.two);
      expect(card1.suit).toBe(Suit.club);

      const card2 = Card.fromString("Td");
      expect(card2.rank).toBe(Rank.ten);
      expect(card2.suit).toBe(Suit.diamond);

      const card3 = Card.fromString("Qh");
      expect(card3.rank).toBe(Rank.queen);
      expect(card3.suit).toBe(Suit.heart);

      const card4 = Card.fromString("As");
      expect(card4.rank).toBe(Rank.ace);
      expect(card4.suit).toBe(Suit.spade);
    });

    test("should throw errors", () => {
      expect(Card.fromString.bind(null, "A")).toThrow("Invalid card: A");
      expect(Card.fromString.bind(null, "1h")).toThrow("Invalid rank: 1");
      expect(Card.fromString.bind(null, "2x")).toThrow("Invalid suit: x");
    });
  });
});
