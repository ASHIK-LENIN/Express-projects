const express = require('express');
const { route } = require('./people');

const router = express.Router();

router.post('/', (req,res) => {
    const {name} = req.body;
    if(!name){
      return res
      .status(400)
      .json({success:false, msg: 'please provide a valid name'})
    }
    res.status(201).json({success: true, person:name});
  });

  module.exports = router