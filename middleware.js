const express = require('express')
const app = express();
const authorize = require('./authorize')
const morgan = require('morgan')


const  middleware = (req,res,next) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);
    next();
}
 
app.use ([middleware,authorize])

app.use(morgan('tiny'))

app.get('/' ,(req,res) =>{
    res.send('Home')
});

app.get('/about' ,(req,res) =>{
    res.send('About')
});

app.listen(5000, ( ) =>{
    console.log('server is running at port 5000');
});