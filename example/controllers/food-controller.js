const Food = require('../models/food-model');

exports.getAllFoods = async (req, res) => {
  try {
    const foods = await Food.findAll();
    res.writeHead(200, { 'Content-Type' : 'application/json' }).end(JSON.stringify(foods));
  } 
  catch (error) { console.log(error) }
}
