import mute from "mute";

let unmute;

beforeAll(() => {
  unmute = mute();
});

beforeEach(() => {
  jest.resetAllMocks();
});

afterAll(() => {
  unmute();
});
