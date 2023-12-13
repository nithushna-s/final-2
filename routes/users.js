
const express = require('express');
const router = express.Router();
const userModel = require('../models/userModels');
module.exports = router;

router.post('/singuppost', async (req, res) => {
  const data = new userModel({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//Get all Method

//Get all Method
// /getAll file path
router.get('/ singupget', async (req, res) => {
  // model find jeson 
  try{
      const data = await userModel.find();
      res.json(data)
  }
  //  // Handles errors and sends a 500 status with error message JSON response .
  catch(error){
      res.status(500).json({message: error.message})
  }
})
//Get by ID Method
// This route responds with the parameter 'id' from the URL.
router.get('/getOneem/:id', (req, res) => {
  res.send(req.params.id)
})
// 