const express = require('express')

const path = require('path')
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./folder/index.html'));

});

app.get('/about', (req, res) => {
    res.status(200).send('about page')
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>')
});

app.listen(3000, () => {
    console.log('server running at port 3000');
});
