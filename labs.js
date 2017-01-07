'use strict'

module.exports = {

    findMinMax: function (arr) {

        var minNum = arr[0];
        var maxNum = arr[0];
        var minMaxList = [];
        var sameMinMaxList = [];

        for (var i = 1; i < arr.length; i++) {
            if(arr[i] < minNum){
                minNum = arr[i];
            } else if (arr[i] > maxNum) {
                maxNum = arr[i];
            };
        };

        minMaxList.push(minNum);
        minMaxList.push(maxNum);

        if (minMaxList[0] == minMaxList[1]) {
            sameMinMaxList.push(minMaxList[0]);
            return sameMinMaxList;
        } else {
            return minMaxList;
        }
	// TODO
	// return [];
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
        var minRatio = 1/0,
        maxRatio = -1/0,
        minDiff  = 1/0,
        maxDiff  = -1/0,
        epsilon  = 0.000001,
        i,
        ratio,
        diff;

    if (arr.length == 0) {
        return 0;
    }

    for (i = 1; i < arr.length; ++i) {
        diff  = arr[i] - arr[i - 1];
        ratio = arr[i] / arr[i - 1];
        minDiff  = Math.min(diff, minDiff);
        maxDiff  = Math.max(diff, maxDiff);
        minRatio = Math.min(ratio, minRatio);
        maxRatio = Math.max(ratio, maxRatio);
    }

    if (Math.abs(minDiff - maxDiff) < epsilon) {
        return "Arithmetic";
    }

    if (Math.abs(minRatio - maxRatio) < epsilon) {
        return "Geometric";
    }

    return -1;
	// return 0;
    }
}
