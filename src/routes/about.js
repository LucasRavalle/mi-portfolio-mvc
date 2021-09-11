const express = require ('express');

const router= express.Router();

const controller = require('../controllers/aboutController.js');

router.get('/',controller.about);

module.exports = router;