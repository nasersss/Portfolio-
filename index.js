const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
app.set('view engine' , 'ejs');
app.set('views','public')

app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.render('index');
})
app.listen(PORT,(req,res)=>{
  console.log('server is runnign....');
})