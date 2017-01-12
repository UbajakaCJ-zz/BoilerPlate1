'use strict';

var labs = require('../labs.js');




describe("Animal Class: Create an animal, make it move", function() {

    it("The animal should be a type of `object`, and an instance of the `Animal` class", function() {
      var snake = new Animals('Snake');
      expect(typeof snake).toEqual(typeof {});
      expect(snake instanceof Animals).toBeTruthy();
    });

    it("name and breathe should be a property of the animal", function() {
      var snake  = new Animals('Snake');
      expect(snake.name).toBe('Snake');
      expect(snake.breathe).toBe('Snake breathes');
    });

});


labs.Mammals.prototype = new labs.Animals();
labs.Girraffes.prototype = new labs.Mammals();

var snake = new labs.Animals("Sanke");

