require('dotenv').config()
const express = require('express');
const app = express();
const PORT = 3000;
const Fruit = require('./models/fruit')

/*******
Database Setup
******/
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use((req, res, next) => {
  console.log('**********************')
  console.log('***********Middleware checking in***********')
  console.log('I run before all routes')
  console.log('**********************')
  next()
})
app.use(express.urlencoded({ extended: true }))
/*****************
INDUCES Routes
******************/
/*
Index
*/
app.get('/fruits/', (req, res) => {
  Fruit.find({}, (err, foundFruits)=>{
    if(err){
      res.status(404).send({
        msg: err.message
      })
    } else{
      res.render('Index', {
        fruits: foundFruits
      })
    }
  })
})
/*
New
*/
app.get('/fruits/new', (req, res) => {
  res.render('New')
})
/*
Delete
*/
/*
Update
*/
/*
Create
*/
app.post('/fruits', (req, res) =>{
  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
Fruit.create(req.body, (err, createFruit) => {
  if(err){
    res.status(404).send({
      msg: err.message
    })
  } else{
    console.log(createFruit);
    res.redirect('/fruits')
  }
})

})
/*
Edit
*/

/*
Show
*/
/*
Show
*/
app.get('/fruits/:id', (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Show', {
        fruit: foundFruit
      })
    }
  })
})


app.listen(PORT, () => {
  console.log('We in the building', PORT)
})
