const express = require('express')
const app = express();

const productList = ('./itemlist')

app.use(express.json());

app.get('/api/productList',(req,res) =>{
    res.status(200).json({success : true, data: productList})
});

app.post('/login',(req,res) =>{
    console.log(req.body);
    const { name  } = req.body;
    if(!name){
        return res
        .status(400)
        .json({success :false,msg : 'Please provide a valid name'})
    }
    res.status(201).send({sucess :true , person : name})
})
app.listen(8000, () =>{
    console.log('server is running at port 8000');
})
