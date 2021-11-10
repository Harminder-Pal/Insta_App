const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message:`This is comments get request`
    })
})

router.post('/', (req, res, next) =>{
    res.status(200).json({
        message:`This is comments post request`
    })
})

module.exports = router;