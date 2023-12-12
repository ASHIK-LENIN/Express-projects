const express = require('express')
const app = express();

const productList = require('./itemlist')
console.log(typeof pro;


app.get('/',(req,res) =>{
    res.send('yyy')
});

app.get('/products',(req,res) =>{
    console.log(req.query);
    let sortedProducts = [...productList];
    if (req.query.category) {
        sortedProducts= sortedProducts.filter((product) =>
             product.category == req.query.category);
      }
      res.status(200).json(sortedProducts)
      console.log(sortedProducts);
    
});

app.listen(5000,() =>{
    console.log('server is running at port 3000...');
})