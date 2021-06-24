require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
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
app.use(express.urlencoded({ extended: true })) // Without this half my code wont work because i need req.body

const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.static('public'));
/****
Dummy Code
For now
*****/
app.post('/products', (req, res) => {
  console.log('Create route accessed');
  console.log('Req.body is:', req.body);
  res.send(req.body)
})
/****
End Dummy Code
*****/




/***
SEED ROUTE
****/
app.get('/fruits/seed', (req, res) => {
  Fruit.create([
    {
            name:'grapefruit',
            color:'pink',
            readyToEat:true
        },
        {
            name:'grape',
            color:'purple',
            readyToEat:false
        },
        {
            name:'avocado',
            color:'green',
            readyToEat:true
        }
  ], (err, data) => {
    res.redirect('/fruits')
  })
});



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
app.delete('/fruits/:id', (req, res) => {
  Fruit.findByIdAndDelete(req.params.id, (err, foundFruit)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.redirect('/fruits')
    }
  })
})


/*
Update
*/
app.put('/fruits/:id', (req, res) => {
  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFruit)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Show', {
        fruit: updatedFruit
      })
    }
  })
})



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
app.get('/fruits/:id/edit', (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Edit', {
        fruit: foundFruit
      })
    }
  })
})
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
