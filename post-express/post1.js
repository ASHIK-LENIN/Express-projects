const express = require('express');

const app = express();


app.use(express.json());

const people = require('./Routes/people');
const auth = require('./Routes/Auth');


app.use('/api/people' , people);
app.use('/login' , auth);




app.listen(7000, () => {
  console.log('Server is running at port 7000...');
});

