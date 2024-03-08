import { capitalize, reverseString, calculator, caesarCipher, analizeArray } from "./script";

test('Capitalize test 2', () => {
  expect(capitalize('hello world!')).toBe('Hello world!');
});

test('Reverse string test2', () => {
  expect(reverseString('hello world!')).toBe('!dlrow olleh');
});

test ('Calculator addition test', () => {
  expect(calculator.add(5, 10)).toBe(15);
});

test ('Calculator addition test', () => {
  expect(calculator.subtr(5, 10)).toBe(-5);
});


test ('Calculator addition test', () => {
  expect(calculator.multiply(5, 10)).toBe(50);
});

test ('Calculator addition test', () => {
  expect(calculator.divide(5, 10)).toBe(0.5);
});

test ('Calculator addition test', () => {
  expect(caesarCipher("please encrypt me", 3)).toBe('sohdvh hqfubsw ph');
});

test("Analyze array average", () => {
  expect(analizeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("Analyze array min", () => {
  expect(analizeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("Analyze array max", () => {
  expect(analizeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("Analyze array length", () => {
  expect(analizeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});