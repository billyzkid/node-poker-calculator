import * as main from "./main";

describe("main", () => {
  test("should have expected exports", () => {
    expect(main).toEqual({
      defaults: main.defaults,
      run: main.run
    });
  });

  describe("run", () => {
    test("should run with default arguments", () => {
      const run = () => main.run();

      console.log = jest.fn();

      expect(run).not.toThrow();
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenCalledWith(main.defaults.args, "A♠");
    });

    test("should run with specified arguments", () => {
      const args = ["blah"];
      const run = () => main.run(args);

      console.log = jest.fn();

      expect(run).not.toThrow();
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenCalledWith(args, "A♠");
    });
  });
});
