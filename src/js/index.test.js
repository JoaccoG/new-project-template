import { helloWorld } from "./index.js";

test("Testing Jest Library", () => {
  expect(helloWorld()).toBe("Hello!");
});
