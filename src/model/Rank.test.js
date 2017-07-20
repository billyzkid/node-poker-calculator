import Rank from "./Rank";

describe("Rank", () => {
  test("should have expected exports", () => {
    expect(Rank).toBeInstanceOf(Function);
  });

  describe("constructor", () => {
    test("should initialize instance", () => {
      const rank = new Rank("T", 10);
      expect(rank.id).toBe("T");
      expect(rank.value).toBe(10);
    });
  });

  describe("all", () => {
    test("should have 13 ranks", () => {
      expect(Rank.all).toHaveLength(13);
    });
  });

  describe("toString", () => {
    test("should return expected strings", () => {
      expect(Rank.two.toString()).toBe("2");
      expect(Rank.three.toString()).toBe("3");
      expect(Rank.four.toString()).toBe("4");
      expect(Rank.five.toString()).toBe("5");
      expect(Rank.six.toString()).toBe("6");
      expect(Rank.seven.toString()).toBe("7");
      expect(Rank.eight.toString()).toBe("8");
      expect(Rank.nine.toString()).toBe("9");
      expect(Rank.ten.toString()).toBe("T");
      expect(Rank.jack.toString()).toBe("J");
      expect(Rank.queen.toString()).toBe("Q");
      expect(Rank.king.toString()).toBe("K");
      expect(Rank.ace.toString()).toBe("A");
    });
  });

  describe("fromString", () => {
    test("should parse valid strings", () => {
      expect(Rank.fromString("2")).toBe(Rank.two);
      expect(Rank.fromString("3")).toBe(Rank.three);
      expect(Rank.fromString("4")).toBe(Rank.four);
      expect(Rank.fromString("5")).toBe(Rank.five);
      expect(Rank.fromString("6")).toBe(Rank.six);
      expect(Rank.fromString("7")).toBe(Rank.seven);
      expect(Rank.fromString("8")).toBe(Rank.eight);
      expect(Rank.fromString("9")).toBe(Rank.nine);
      expect(Rank.fromString("T")).toBe(Rank.ten);
      expect(Rank.fromString("J")).toBe(Rank.jack);
      expect(Rank.fromString("Q")).toBe(Rank.queen);
      expect(Rank.fromString("K")).toBe(Rank.king);
      expect(Rank.fromString("A")).toBe(Rank.ace);
    });

    test("should throw errors", () => {
      expect(Rank.fromString.bind(null, "1")).toThrow("Invalid rank: 1");
      expect(Rank.fromString.bind(null, "a")).toThrow("Invalid rank: a");
    });
  });
});
