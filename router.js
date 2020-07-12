var express = require('express');
var router = express.Router();
const viewPath = './views/';

router.get('/', (req, res) => {
    res.sendFile(viewPath + 'index.html', { root: __dirname });
});

router.get('/food', (req, res) => {
    res.sendFile(viewPath + 'food.html', { root: __dirname });
});

router.get('/beer', (req, res) => {
    res.sendFile(viewPath + 'beer.html', { root: __dirname });
});


module.exports = router;
