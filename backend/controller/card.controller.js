const asyncHandler = require('express-async-handler');
const { Card }= require('../models/card.model')

const createCard = asyncHandler(async (req, res) => {
  const { name, about, email, phone, whatsappNumber, websiteLink, instagramUrl, linkedinUrl, facebookUrl } = req.body;

  const profileUrl = req.files['profileImage'] ? `/uploads/${req.files['profileImage'][0].filename}` : '';
  const coverPhotoUrl = req.files['coverImage'] ? `/uploads/${req.files['coverImage'][0].filename}` : '';

  const card = new Card({
    uid: req.user._id,
    companyName: '',
    name,
    about,
    email,
    phone,
    whatsappNumber,
    websiteLink,
    profileUrl,
    coverPhotoUrl,
    instagramUrl,
    linkedinUrl,
    facebookUrl
  });

  const createdCard = await card.save();
  res.status(201).json(createdCard);
});

const getAllCard = asyncHandler(async (req, res) => {
    const cards = await Card.find({ uid: req.user._id }); 
    res.json(cards);
  });
  
  const getCard = asyncHandler(async (req, res) => {
    const card = await Card.findById(req.params.id);
  
    if (card && card.uid.equals(req.user._id)) {
      res.json(card);
    } else {
      res.status(404).json({ message: 'Card not found or access denied' });
    }
  });

const updateCard = asyncHandler(async (req, res) => {
  const { name, about, email, phone, whatsappNumber, websiteLink, instagramUrl, linkedinUrl, facebookUrl } = req.body;

  const card = await Card.findById(req.params.id);

  if (card && card.uid.equals(req.user._id)) {
    card.name = name || card.name;
    card.about = about || card.about;
    card.email = email || card.email;
    card.phone = phone || card.phone;
    card.whatsappNumber = whatsappNumber || card.whatsappNumber;
    card.websiteLink = websiteLink || card.websiteLink;
    
    if (req.files['profileImage']) {
      card.profileUrl = `/uploads/${req.files['profileImage'][0].filename}`;
    }
    if (req.files['coverImage']) {
      card.coverPhotoUrl = `/uploads/${req.files['coverImage'][0].filename}`;
    }

    card.instagramUrl = instagramUrl || card.instagramUrl;
    card.linkedinUrl = linkedinUrl || card.linkedinUrl;
    card.facebookUrl = facebookUrl || card.facebookUrl;

    const updatedCard = await card.save();
    res.json(updatedCard);
  } else {
    res.status(404).json({ message: 'Card not found or access denied' });
  }
});

module.exports = {
  createCard,
  getAllCard,
  getCard,
  updateCard,
};
