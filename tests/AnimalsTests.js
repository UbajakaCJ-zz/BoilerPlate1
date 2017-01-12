'use strict';

var labs = require('../labs.js');
Object.prototype.Animals = labs.Animals;
Object.prototype.Mammals = labs.Mammals;
Object.prototype.Girraffes = labs.Girraffes;




describe("Animal Class: Create an animal, make it move", function() {

    it("The animal should be a type of `object`, and an instance of the `Animal` class", function() {
      var snake = new Animals('Snake');
      expect(typeof snake).toEqual(typeof {});
      expect(snake instanceof Animals).toBeTruthy();
    });

    it("The animal should be called 'Animal' if no name is passed as a parameter", function() {
      var anml = new Animals();
      expect(anml.name).toEqual('Animal');
    });

    it("name and breathe should be a property of the animal", function() {
      var snake  = new Animals('Snake');
      expect(snake.name).toBe('Snake');
      expect(snake.name + " breathes").toBe('Snake breathes');
    });

    it("The mammal shoud have four (4) legs except its a man or a monkey", function() {
      var mnk  = new Mammals('Monkey');
      expect(mnk.numOfLegs).toBe(2);
      var dg  = new Mammals('Dog');
      expect(dg.numOfLegs).toBe(4);
    });
});


// labs.Mammals.prototype = new labs.Animals();
// labs.Girraffes.prototype = new labs.Mammals();

// var snake = new labs.Animals("Snake");
// snake.breathe();

