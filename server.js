require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;
// Set Up Data
const db = require('./models/db')
db.once('connected', () => {
  console.log('Connected to Mongo')
})
// Set Up View Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
// Set Up Middleware and Controllers
app.use((req, res, next) => {
  res.locals.data = {}
  next()
});
app.use(express.urlencoded({ extended: true })) // Without this half my code wont work because i need req.body
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use('/fruits', require('./controllers/routeController'));
app.listen(PORT, () => {
  console.log('We in the building', PORT)
})
