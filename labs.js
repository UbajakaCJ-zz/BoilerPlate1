'use strict'

module.exports = {

    findMinMax: function (arr) {
	// TODO
	return [];
    },

    fizzBuzz: function (num) {
        if (num % 3 == 0) {
                if (num % 5 == 0) {
                    return 'FizzBuzz';
                } else {
                    return 'Fizz';
                }
            } else if (num % 5 == 0) {
                if (num % 3 == 0) {
                    return 'FizzBuzz';
                } else {
                    return 'Buzz';
                }
            } else {
                return num;
            }
        // TODO
	return 'Fizz';
    },

    aritGeo: function (arr) {
        // TODO
	return 0;
    }
}
