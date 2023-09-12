import { sum } from "../test/sum";

test("sum of two numbers", () => {
  const result = sum(5, 2);

  //assertion
  expect(result).toBe(7);
});
