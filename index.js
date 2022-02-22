const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const db = require('./config/database')
const passportSetup = require('./config/passport-setup')


const PORT = process.env.PORT || 3000;
const app = express();

// bring ejs template
app.set('view engine' , 'ejs');
app.set('views','public')

// bring body parser 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Set static
app.use(express.static('public'));
app.use(express.static('uploads'))
app.use(express.static('node_modules'))

// session and flash config .
app.use(session({
  secret: 'lorem ipsum',
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 60000 * 15}
}))
app.use(flash())
// bring passport 
app.use(passport.initialize())
app.use(passport.session())
//store user object 

app.get('*', (req,res,next)=> {
  res.locals.user = req.user || null
  next()
})

app.get('/',(req,res)=>{
  res.render('index');
});

// bring user routes
const users = require('./routes/user_routes')
app.use('/users', users)


app.listen(PORT,(req,res)=>{
  console.log('server is runnign....');
});
