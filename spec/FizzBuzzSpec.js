describe("FizzBuzz", function() {
  var fizzBuzz = require('../src/FizzBuzz.js');
  it("returns 'Fizz' for multiples of 3", function() {
    expect(fizzBuzz(3)).toEqual('Fizz');
    expect(fizzBuzz(27)).toEqual('Fizz');
  });
  it("returns 'Buzz' for multiples of 5", function() {
    expect(fizzBuzz(5)).toEqual('Buzz');
    expect(fizzBuzz(40)).toEqual('Buzz');
  });
  it("returns 'FizzBuzz' for multiples of 15", function() {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
    expect(fizzBuzz(150)).toEqual('FizzBuzz');
  });
  it("returns the argument if not divisible by 3 or 5", function() {
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(101)).toEqual(101);
  });
});
