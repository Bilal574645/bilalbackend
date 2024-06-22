require('dotenv').config()
const express = require("express");  //commonjs style 
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/twitter',(req,res)=>{
    res.send("Bilal");
});

app.get('/login',(req,res)=>{
    res.send('<h1>please login at bilal')
})

app.get('/youtube',(req,res)=>{
  res.send('h1');
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
