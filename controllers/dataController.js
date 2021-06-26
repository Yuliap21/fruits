const Fruit = require('../models/fruit')
const dataController = {
  index(req, res, next){
      Fruit.find({}, (err, foundFruits) => {
        if(err){
          res.status(404).send({
            msg: err.message
          })
        } else {
          res.locals.data.fruits = foundFruits
          next()
        }
      })
  },
  show(req, res, next){
    Fruit.findById(req.params.id, (err, foundFruit) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.fruit = foundFruit;
        next();
      }
    })
  },
  create(req, res, next){
    req.body.readyToEat === 'on'
      ? req.body.readyToEat = true
      : req.body.readyToEat = false
    Fruit.create(req.body, (err, createdFruit) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.fruit = createdFruit;
        next();
      }
    })
  },
  destroy(req, res, next){
    Fruit.findByIdAndDelete(req.params.id, (err, deletedFruit) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.fruit = deletedFruit;
        next();
      }
    })
  },
  update(req, res, next){
    req.body.readyToEat === 'on'
      ? req.body.readyToEat = true
      : req.body.readyToEat = false
    Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedFruit) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.fruit = updatedFruit;
        next();
      }
    })
  }
}
module.exports = dataController;
