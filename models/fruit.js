const { Schema, model } = require('mongoose');

const fruitSchema = new Schema({
  name: {type: String, required: true},
  color: { type: String, required: true},
  readyToEat: {type: Boolean, required: true}
})

const Fruit = model('Fruit', fruitSchema);

module.exports = Fruit;
