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
        var value = "";

        // To check if num is divisible by 3
        if (num % 3 == 0) {
            value += 'Fizz';
        }

        //To check if num is divisible by 5
        if (num % 5 == 0) {
            value += 'Buzz';
        }

        //To check if not divisible by either 3 or 5
        if (value == "") {
            return num;
        } else {
            return value;
        }
        // TODO
	// return '';
    },

    aritGeo: function (arr) {
        // TODO
        var minRatio = 1/0, // Minimum ratio
        maxRatio = -1/0, // Maximum ratio
        minDiff  = 1/0, // Minimum difference
        maxDiff  = -1/0, // Maximum difference
        epsilon  = 0.000001, // Configured Epsilon for comparing relative differences
        i,
        ratio, // The ratio for Geometric Progression
        diff;  // The difference for Arithmetic Progression


    // To return zero if array is empty
    if (arr.length == 0) {
        return 0;
    }

    // To find the ratio or difference of the array
    for (i = 1; i < arr.length; ++i) {
        diff  = arr[i] - arr[i - 1];
        ratio = arr[i] / arr[i - 1];
        minDiff  = Math.min(diff, minDiff);
        maxDiff  = Math.max(diff, maxDiff);
        minRatio = Math.min(ratio, minRatio);
        maxRatio = Math.max(ratio, maxRatio);
    }

    // To return 'Arithmetic' if the array is arithmetic
    if (Math.abs(minDiff - maxDiff) < epsilon) {
        return "Arithmetic";
    }

    // To return 'Geometric' if the array is geometric
    if (Math.abs(minRatio - maxRatio) < epsilon) {
        return "Geometric";
    }

    // To return -1 if the array is neither Arithmetic nor Geometric
    return -1;
	// return 0;
    }
}
