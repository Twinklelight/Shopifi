//Route javascript pour connecter l'api au client
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('API is working proprely');
});

module.exports = router;