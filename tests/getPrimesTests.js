'use strict';

var getPrimes = require('../labs.js').getPrimes;

describe("Get Primes tests ", function() {

  it("should return [2, 3] for 3", function() {
    expect(getPrimes(3)).toEqual([2,3]);
  });

  it("should return [2, 3, 5] for 6", function() {
    expect(getPrimes(6)).toEqual([2, 3, 5]);
  });

  it("should return [2, 3, 5, 7] for 9", function() {
    expect(getPrimes(9)).toEqual([2, 3, 5, 7]);
  });

  it("should return [2, 3, 5, 7, 11] for 12", function() {
    expect(getPrimes(12)).toEqual([2, 3, 5, 7, 11]);
  });

  it("should return [2, 3, 5, 7, 11, 13] for 15", function() {
    expect(getPrimes(15)).toEqual([2, 3, 5, 7, 11, 13]);
  });

  it("should return [2, 3, 5, 7, 11, 13, 17] for 18", function() {
    expect(getPrimes(18)).toEqual([2, 3, 5, 7, 11, 13, 17]);
  });

});