const express = require ('express')

const router = express.Router();
const express = require('express');

router.get('/patients/1', patientsControllers (req, res, next){
  res.send('respond with a resource');
});
router.get('/patients/2'), patientsControllers (req, res, next) {
    res.send('respond with a resource');
  });

module.exports = router;


  