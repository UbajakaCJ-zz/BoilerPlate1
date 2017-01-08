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
