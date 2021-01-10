const foods = require('../data/foods');

exports.findAll = () => {
  return new Promise(resolve => { resolve(foods); });
}
