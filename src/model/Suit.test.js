import Suit from "./Suit";

describe("Suit", () => {
  test("should have expected exports", () => {
    expect(Suit).toBeInstanceOf(Function);
  });

  describe("constructor", () => {
    test("should initialize instance", () => {
      const suit = new Suit("h", "♥");
      expect(suit.id).toBe("h");
      expect(suit.symbol).toBe("♥");
    });
  });

  describe("all", () => {
    test("should have 4 suits", () => {
      expect(Suit.all).toHaveLength(4);
    });
  });

  describe("toString", () => {
    test("should return expected strings", () => {
      expect(Suit.club.toString()).toBe("♣");
      expect(Suit.diamond.toString()).toBe("♦");
      expect(Suit.heart.toString()).toBe("♥");
      expect(Suit.spade.toString()).toBe("♠");
    });
  });

  describe("fromString", () => {
    test("should parse valid strings", () => {
      expect(Suit.fromString("c")).toBe(Suit.club);
      expect(Suit.fromString("d")).toBe(Suit.diamond);
      expect(Suit.fromString("h")).toBe(Suit.heart);
      expect(Suit.fromString("s")).toBe(Suit.spade);
    });

    test("should throw errors", () => {
      expect(Suit.fromString.bind(null, "x")).toThrow("Invalid suit: x");
      expect(Suit.fromString.bind(null, "S")).toThrow("Invalid suit: S");
    });
  });
});
