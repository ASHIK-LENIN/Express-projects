const express = require('express')
const Item = require('./items')

const path = require('path')
const app = express();


app.get('/',(req, res) =>{
    res.send("<h1>Home page</h1><a href='/api/products/'>Products</a>")
    
})
app.get('/api/products/',(req,res) =>{
    res.send('<h1>Heyy</h1>')
})





app.listen(5000, () => {
    console.log('server running at port 5000');
});
