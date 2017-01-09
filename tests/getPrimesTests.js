'use strict';

var getPrimes = require('../labs.js').getPrimes;

describe("Get Primes tests ", function() {

  it("should return [2, 3] for 3", function() {
    expect(getPrimes(3)).toEqual([2,3]);
  });

  it("should return [2, 3, 5] for 6", function() {
    expect(getPrimes(6)).toEqual([2, 3, 5]);
  });

});