const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new mongoose.Schema({
  uid: {
    type: Schema.Types.ObjectId,
    ref: 'User',  
    required: true
  },
  companyName: {
    type: String,
    trim: true,
    required: true 
  },
  name: {
    type: String,
    default: "",
    trim: true,
  },
  about: {
    type: String,
    default: "", 
    trim: true,
  },
  email: {
    type: String,
    default: "",
    trim: true,
  },
  phone: {
    type: String,
    default: "", // Default value if not provided
    trim: true,
  },
  whatsappNumber: {
    type: String,
    default: "", 
    trim: true,
  },
  websiteLink: {
    type: String,
    default: "", 
    trim: true,
  },
  profileUrl: {
    type: String,
    default: "", 
  },
  coverPhotoUrl: {
    type: String,
    default: "", 
  },
  instagramUrl: {
    type: String,
    default: "", 
    trim: true,
  },
  linkedinUrl: {
    type: String,
    default: "", 
    trim: true,
  },
  facebookUrl: {
    type: String,
    default: "", 
    trim: true,
  },
}, { timestamps: true });

const Card = mongoose.model('Card', cardSchema);

module.exports = { Card };
