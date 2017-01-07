'use strict';

var findMinMax = require('../labs.js').findMinMax;

describe('Min-Max Numbers in a List: ', function () {

  describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

    it('should return [1,4] for [1, 2, 3 , 4]', function () {
      expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
    });

    it('should return [4, 6] for [6, 4]', function () {
      expect(findMinMax([6, 4])).toEqual([4, 6]);
    });

    it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
      expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
    });

    it('should return [4,7] for [4,5,6,7]', function () {
      expect(findMinMax([4,5,6,7])).toEqual([4,7]);
    });

    it('should return [8,21] for [8,15,16,20,21]', function () {
      expect(findMinMax([8,15,16,20,21])).toEqual([8,21]);
    });

    it('should return [4, 9] for [4, 8, 5, 7, 9]', function () {
      expect(findMinMax([4, 8, 5, 7, 9])).toEqual([4, 8]);
    });

    it('should return [10, 55] for [44, 55, 32, 10, 15]', function () {
      expect(findMinMax([44, 55, 32, 10, 15])).toEqual([32, 55]);
    });

  });

  describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

    it('should return [4] for [4, 4, 4, 4]', function () {
      expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
    });

    it('should return [5] for [5, 5, 5, 5, 5]', function () {
      expect(findMinMax([5, 5, 5, 5, 5])).toEqual([6]);
    });

  });

});
