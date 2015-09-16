var parse = require('csv-parse');
var FS = require('fs');
var _ = require('highland');

function doublePrice(car) {
  car.Price = parseFloat(car.Price) * 2;
  return car;
}

_(FS.createReadStream('./cars.csv')).through(parse({columns: true})).map(doublePrice).map(_.log).resume();
