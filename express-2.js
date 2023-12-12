const express = require('express')
const Item = require('./products')

const path = require('path')
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Home page</h1><a href='/api/products/'>Products</a>")

});
app.get('/api/products/',(req,res) =>{
    const newProducts = Item.map((product) =>{
        const {id, name, image } = product;
        
        return {id, name, image};
    });
    res.json(newProducts)
});

app.get('/api/products/:productID',(req,res) => { // res.params
    console.log(req.params);
    const {productID} = req.params;
    const singleProduct = Item.filter((product) =>
        product.id === Number(productID))
        res.json(singleProduct);
    
});

app.listen(3000, () => {
    console.log('server running at port 3000');
});

