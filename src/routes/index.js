'use strict';

const { Router } = require('express');

const router = Router();

router.get('/', (req, res)=>{
    res.send('Hello world')
})

router.get('/signup', (req, res)=>{

})

router.post('/signup', (req, res)=>{

})

router.get('/sigin', (req, res)=>{

})

router.post('/sigin', (req, res)=>{

})

module.exports = router;