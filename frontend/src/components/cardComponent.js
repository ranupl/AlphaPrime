import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaGlobe, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export const Card = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    whatsapp: "",
    website: "",
    instagram: "",
    linkedin: "",
    facebook: "",
  });

  const handleProfileChange = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleCoverChange = (e) => {
    setCoverImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setShowForm(false);
  };

  return (
    <div className="max-w-sm mx-auto mt-10 font-sans">
      {/* Cover Image */}
      <div className="relative">
        <div className="h-40 w-full bg-gray-200 rounded-t-lg overflow-hidden">
          {coverImage ? (
            <img
              src={coverImage}
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

        {/* Profile Image and Company Name */}
        <div className="flex justify-around mt-[-50px]">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white ml-1">
            {profileImage ? (
              <img
                src={profileImage}
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

          <div className="mt-3 ml-4 mr-1 w-1200 h-20 bg-black border border-gray-300 rounded-lg p-1 flex items-center justify-center">
            <h6 className="text-md font-bold text-white text-center">Company Name</h6>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="bg-white shadow-md rounded-b-lg pt-6 px-6 pb-6 transition-colors duration-200 hover:bg-red-100">
        {/* Contact Info Links */}
        <div>
          <h2 className="font-bold text-2xl">{formData.name || "Zakiya Fareez"}</h2>
          <p className="text-lg">{formData.title || "Personal Branding Expert"}<br />TECHLEGENDZ</p>
        </div>

        <div className="mt-4 text-center">
          <div className="flex flex-col items-left">
            <div className="flex items-center mb-2">
              <span className="bg-red-500 rounded-full p-2 mr-2">
                <FaEnvelope className="text-white" />
              </span>
              <a href={`mailto:${formData.email || "zakiyafareez@techlegendzdxb.com"}`} className="text-gray-700 p-1 rounded transition-colors duration-200">{formData.email || "zakiyafareez@techlegendzdxb.com"}</a>
            </div>
            <div className="flex items-center mb-2">
              <span className="bg-red-500 rounded-full p-2 mr-2">
                <FaPhone className="text-white" />
              </span>
              <a href={`tel:${formData.phone || "+971505012754"}`} className="text-gray-700 p-1 rounded transition-colors duration-200">{formData.phone || "+971505012754"}</a>
            </div>
            <div className="flex items-center mb-2">
              <span className="bg-red-500 rounded-full p-2 mr-2">
                <FaWhatsapp className="text-white" />
              </span>
              <a href={`https://wa.me/${formData.whatsapp || "971505012754"}`} className="text-gray-700 p-1 rounded transition-colors duration-200">Connect me on WhatsApp</a>
            </div>
            <div className="flex items-center mb-2">
              <span className="bg-red-500 rounded-full p-2 mr-2">
                <FaGlobe className="text-white" />
              </span>
              <a href={formData.website || "https://www.techlegendz.com"} className="text-gray-700 p-1 rounded transition-colors duration-200">Visit our Website</a>
            </div>
            <div className="flex items-center mb-2">
              <span className="bg-red-500 rounded-full p-2 mr-2">
                <FaInstagram className="text-white" />
              </span>
              <a href={formData.instagram || "https://www.instagram.com"} className="text-gray-700 p-1 rounded transition-colors duration-200">Follow me on Instagram</a>
            </div>
            <div className="flex items-center mb-2">
              <span className="bg-red-500 rounded-full p-2 mr-2">
                <FaLinkedin className="text-white" />
              </span>
              <a href={formData.linkedin || "https://www.linkedin.com"} className="text-gray-700 p-1 rounded transition-colors duration-200">Connect with me on LinkedIn</a>
            </div>
            <div className="flex items-center mb-2">
              <span className="bg-red-500 rounded-full p-2 mr-2">
                <FaFacebook className="text-white" />
              </span>
              <a href={formData.facebook || "https://www.facebook.com"} className="text-gray-700 p-1 rounded transition-colors duration-200">Connect with me on Facebook</a>
            </div>
          </div>
        </div>

        {/* Save Contact Button */}
        <div className="mt-6 flex justify-center">
          <button onClick={handleSaveClick} className="bg-red-500 text-white py-2 px-6 rounded-lg">
            Save Contact
          </button>
        </div>

        {/* Form for Details */}
        {showForm && (
          <form onSubmit={handleSubmit} className="mt-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
              required
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
              required
            />
            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
              required
            />
            <input
              type="url"
              name="website"
              placeholder="Website"
              value={formData.website}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
              required
            />
            <input
              type="url"
              name="instagram"
              placeholder="Instagram"
              value={formData.instagram}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
              required
            />
            <input
              type="url"
              name="linkedin"
              placeholder="LinkedIn"
              value={formData.linkedin}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
              required
            />
            <input
              type="url"
              name="facebook"
              placeholder="Facebook"
              value={formData.facebook}
              onChange={handleInputChange}
              className="border rounded p-2 w-full mb-2"
              required
            />
            <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Card;

