const express = require('express');
const postController = require('../controller/postController');
const router = express.Router();


router.post('/create', postController.createData);
router.get('/findAll', postController.findAllData);
router.get('/findOne/:id', postController.findOneData)
router.put('/updateData/:id', postController.updateData)
router.delete('/deleteData/:id', postController.deleteData)

module.exports = router;