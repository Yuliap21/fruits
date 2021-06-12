const express = require('express');
const app = express();
const PORT = 3000;
const fruits = require('./models/fruit')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use((req, res, next) => {
  console.log('**********************')
  console.log('***********Middleware checking in***********')
  console.log('I run before all routes')
  console.log('**********************')
  next()
})

app.use(express.urlencoded({extended:true}))

/*****************
INDUCES Routes
******************/



/*
Index
*/

app.get('/fruits/', (req, res) => {
  res.render('Index', { fruits: fruits })
})

/*
New
*/
app.get('/fruits/new', (req,res) =>{
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
app.post('/fruits', (req,res) =>{
  if(req.body.readyToEat ==='on'){
    req.body.readyToEat = true;
  } else{
    req.body.readyToEat = false;
  }
  fruits.push(req.body);
  res.redirect('/fruits');
})


/*
Edit
*/

/*
Show
*/
app.get('/fruits/:indexOfFruitsArray', (req,res) =>{
  res.render('Show',{
    fruit:
    fruits[req.params.indexOfFruitsArray],
    superman: 'Is corny'
  })
})



app.listen(PORT,() =>{
  console.log('We in the building', PORT)
})
