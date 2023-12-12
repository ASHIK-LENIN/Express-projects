const express = require('express')
const app  = express();
const path = require('path')

const Item1 = './products1';
console.log(typeof Item1);

app.get('/',(req,res) =>{
    res.send('<h1>Hii</h1>')
})

app.get("/products/query",(req,res)=>{
    console.log(req.query);
    const {search,limit} =req.query;
    let sortedProducts=Item1.filter((products)=>{
        return products.name.startsWith(search)
    });
       if(limit){
                sortedProducts=sortedProducts.slice(0,Number(limit));
            }
        
            if(sortedProducts.length<1){
                res.status(200).send("No products matched your search")
            }
            
            res.status(200).json(sortedProducts)
        });

app.listen(3000,() =>{
    console.log('server is runnning at port 3000');
})