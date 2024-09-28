const express = require('express');
const { createCard, getAllCard, getCard, updateCard } = require('../../controller/card.controller');
const { protectUser } = require('../../middleware/authMiddleware');
const upload = require('../../middleware/multerMiddleware');

const router = express.Router();

router.post('/createCard', protectUser, upload.fields([{ name: 'profileImage', maxCount: 1 }, { name: 'coverImage', maxCount: 1 }]), createCard);

router.get('/getAllCard', protectUser, getAllCard);

router.get('/getCard/:id', protectUser, getCard);

router.put('/updateCard/:id', protectUser, upload.fields([{ name: 'profileImage', maxCount: 1 }, { name: 'coverImage', maxCount: 1 }]), updateCard);

module.exports = router;
