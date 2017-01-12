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
    },

    dataTypes: function(datum){
        if(typeof datum == 'string'){ // To return the length of string, if datum is string
            return datum.length;
        } else if ((datum === null) || (datum === undefined )){
            return 'no value';
        } else if (typeof datum === 'boolean'){
            return datum;
        } else if (typeof datum == 'number'){
            if(datum < 100){
                return 'less than 100';
            } else if (datum > 100){
                return 'more than 100';
            } else {
                return 'equal to 100';
            } 
        } else if (Array.isArray(datum)){
            if(datum.length > 2){
                if(datum[2] === undefined || datum[2] === null){
                    return 'no value';
                } else {
                    return datum[2];
                }
            
            } else {
                return undefined;
            }
        } 

        else if (typeof datum == 'function') {
            datum(true);
            return 'called callback';
        }
    },

    getPrimes: function(value){

        var primes = [];
        var primeNumbers = [];

        for (var i = 2; i <= value + 1; i++) {
            primes[i] = true;
        }

        var limit = Math.sqrt(value + 1);
        for (var i = 2; i < limit; i++) {
            if (primes[i]) {
                for (var j = i*i; j < value + 1; j += i) {
                    primes[j] = false;
                }
            }
        }

        for (var i = 2; i < value + 1; i++) {
            if (primes[i]) {
                primeNumbers.push(i);

            }
        }
        return primeNumbers;
    }, 

    reverseString: function(stri){
        if (stri == '') { // To return null for empty string
            return null
        } else {

            var newString = ""; // For the new string

            for (var i = stri.length - 1; i >= 0; i--) {
            newString += stri[i];
            }

            if (newString == stri) { // For palindromes
                return true;
            }  else {
                return newString;
            }
        }
    },

    toTwenty: function(){
        var oneToTwenty = [];
        for (var i = 1; i <= 20; i++) {
            oneToTwenty.push(i);
        };

        return oneToTwenty;
    },

    toForty: function(){
        var twoToForty = [];
        for (var i = 2; i <= 40; i += 2) {
            twoToForty.push(i);
        };

        return twoToForty;
    },

    toOneThousand: function(){
        var tenToOneThousand = [];
        for (var i = 10; i <= 1000; i += 10) {
            tenToOneThousand.push(i);
        };

        return tenToOneThousand;
    },

    search: function(searchElement){

        'use strict';
 
        var minIndex = 0;
        var maxIndex = this.length - 1;
        var index;
        var currentElement;
        var count = 0;
 
        while (minIndex <= maxIndex) {
            index = (minIndex + maxIndex) / 2 | 0;
            currentElement = this[index];
 
            if (currentElement < searchElement) {
                minIndex = index + 1;
            } else if (currentElement > searchElement) {
                maxIndex = index - 1;
            } else {
            return {count, index};
            }
        }
        count += 1;
 
    return -1;  
    }, 

    findMissing: function(arr1, arr2){

        if(arr1.length == 0 && arr2.length == 0){
            return 0;
        } else if (arr1.value == arr2.value){
            return 0;
        } else {

            for (var i = 0; i < arr1.length; i++) {
                for (var i = 0; i < arr2.length; i++) {
                    if (arr1[i] != arr2[i]) {

                    }
                }
            }

        }
    },

    Animals: function(name){

        this.name = name
        this.breathe = function(){
            console.log(this.name + " breathes");
        }


        // Animals.prototype.breathe = function(){     // Extending the prototype of the Animal class
        //     console.log(this.name + " breathes");
        // }

        // Animals.prototype.move = function(){
        //     console.log(this.name + " moves");
        // }

        // Animals.prototype.eatFood = function() {
        //     console.log(this.name + " eats food");
        // };

    },

    Mammals: function(name){
        this.name = name;
        this.feedYoungWithMilk = function(){
            console.log(this.name + " feeds the young with milk");
        }

        // Mammals.prototype.feedYoungWithMilk = function(){
        //     console.log(this. name + " feeds the young with milk");
        // }
    },

    Girraffes: function(name){
        this.name = name;
        this.eatLeavesFromTrees = function(){
            console.log(this.name + " eats leaves from trees")
        }

        // Girraffes.prototype.eatLeavesFromTrees = function(){
        //     console.log(this.name + " eats leaves");
        // }
    }



    // Car: function(name, model){
    //     if(name==null || name==undefined){
    //     this.name = "General" ; 
    // } 
    // else{ 
    //     this.name = name;
    // } 
    // if(model==null || model==undefined){
    //     this.model = "GM"; 
    // } 
    // else{
    //     this.model = model; 
    // } 
    // if(name == 'Porshe' || name == 'Koenigsegg'){
    //     this.numOfDoors = 2; 
    // } 
    // else{
    //     this.numOfDoors = 4; 
    // } 

    // }
}
