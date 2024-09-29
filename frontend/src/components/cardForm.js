import React, { useState } from 'react';
import { createCardApi } from "../api/createCard";

const CardForm = ({fetchCards}) => {
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    about: '',
    email: '',
    phone: '',
    whatsappNumber: '',
    websiteLink: '',
    instagramUrl: '',
    facebookUrl: '',
    linkedinUrl: '',
  });

  const handleProfileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleCoverChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    
  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardData = new FormData(); 

    // Append form data
    cardData.append('name', formData.name);
    cardData.append('about', formData.about);
    cardData.append('email', formData.email);
    cardData.append('phone', formData.phone);
    cardData.append('whatsappNumber', formData.whatsappNumber);
    cardData.append('websiteLink', formData.websiteLink);
    cardData.append('instagramUrl', formData.instagramUrl);
    cardData.append('facebookUrl', formData.facebookUrl);
    cardData.append('linkedinUrl', formData.linkedinUrl);

    // Append the image files
    if (profileImage) {
      cardData.append('profileImage', profileImage);
    }
    if (coverImage) {
      cardData.append('coverImage', coverImage);
    }

    // Log the FormData key-value pairs for debugging
    for (let pair of cardData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      // Send the FormData to the API
      const res = await createCardApi(cardData);
      // Reset form data and images after successful submission
      setFormData({
        name: '',
        about: '',
        email: '',
        phone: '',
        whatsappNumber: '',
        websiteLink: '',
        instagramUrl: '',
        facebookUrl: '',
        linkedinUrl: '',
      });
      fetchCards();
      setProfileImage(null);
      setCoverImage(null);
    } catch (error) {
      console.error("Error saving card:", error);
      alert('Failed to save card. Please try again.');
    }
  };
  
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Cover Image Upload */}
      <div className="relative">
        <div className="h-40 w-full bg-gray-300 rounded-t-lg overflow-hidden">
          {coverImage ? (
            <img
              src={URL.createObjectURL(coverImage)}
              alt="Cover"
              className="object-cover h-full w-full"
            />
          ) : (
            <label className="h-full w-full flex justify-center items-center text-gray-500 cursor-pointer">
              Upload Cover Image
              <input
                type="file"
                className="hidden"
                onChange={handleCoverChange}
                accept="image/*"
              />
            </label>
          )}
        </div>

        {/* Profile Image Upload */}
        <div className="flex justify-around mt-[-50px]">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white ml-0">
            {profileImage ? (
              <img
                src={URL.createObjectURL(profileImage)}
                alt="Profile"
                className="object-cover h-full w-full"
              />
            ) : (
              <label className="h-full w-full flex justify-around items-center text-gray-500 cursor-pointer">
                <span className="text-center">Upload Profile Image</span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleProfileChange}
                  accept="image/*"
                />
              </label>
            )}
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div>
        <label className="block text-gray-700">Name</label>
        <input 
          type="text" 
          name="name" 
          className="mt-1 block w-full px-3 py-2 border rounded-lg"
          value={formData.name} 
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-gray-700">About</label>
        <input 
          type="text" 
          name="about" 
          className="mt-1 block w-full px-3 py-2 border rounded-lg"
          value={formData.about} 
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-gray-700">Email</label>
        <input 
          type="email" 
          name="email" 
          className="mt-1 block w-full px-3 py-2 border rounded-lg"
          value={formData.email} 
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-gray-700">Phone</label>
        <input 
          type="text" 
          name="phone" 
          className="mt-1 block w-full px-3 py-2 border rounded-lg"
          value={formData.phone} 
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-gray-700">WhatsApp Number</label>
        <input 
          type="text" 
          name="whatsappNumber" 
          className="mt-1 block w-full px-3 py-2 border rounded-lg"
          value={formData.whatsappNumber} 
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-gray-700">Website Link</label>
        <input 
          type="text" 
          name="websiteLink" 
          className="mt-1 block w-full px-3 py-2 border rounded-lg"
          value={formData.websiteLink} 
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-gray-700">Instagram URL</label>
        <input 
          type="text" 
          name="instagramUrl" 
          className="mt-1 block w-full px-3 py-2 border rounded-lg"
          value={formData.instagramUrl} 
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-gray-700">Facebook URL</label>
        <input 
          type="text" 
          name="facebookUrl" 
          className="mt-1 block w-full px-3 py-2 border rounded-lg"
          value={formData.facebookUrl} 
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-gray-700">LinkedIn URL</label>
        <input 
          type="text" 
          name="linkedinUrl" 
          className="mt-1 block w-full px-3 py-2 border rounded-lg"
          value={formData.linkedinUrl} 
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
        Save Card
      </button>
    </form>
  );
};

export default CardForm;

