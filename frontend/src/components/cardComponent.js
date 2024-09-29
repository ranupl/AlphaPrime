import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaGlobe, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa"; // Ensure this import is correct

export const Card = ({card}) => {
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const serverUrl = "http://localhost:7001";

  const handleProfileChange = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleCoverChange = (e) => {
    setCoverImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="max-w-sm mx-auto mt-10 font-sans">
      {/* Cover Image */}
      <div className="relative">
        <div className="h-40 w-full bg-gray-200 rounded-t-lg overflow-hidden">
          {card.coverPhotoUrl ? (
            <img
            src={`${serverUrl}${card.coverPhotoUrl}`}
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
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white ml-1 ">
            {card.profileUrl ? (
              <img
              src={`${serverUrl}${card.profileUrl}`}
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
            <h6 className="text-md font-bold text-white text-center">{card.companyName}</h6>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="bg-white shadow-md rounded-b-lg pt-6 px-6 pb-6">
        {/* Contact Info Links */}
        <div>
          <h2 className="font-bold text-2xl">{card.name}</h2>
          <p className="text-lg">{card.about}</p>
        </div>

        <div className="mt-4 text-center">
          <div className="flex flex-col items-left">
            <div className="flex items-center mb-2  hover:bg-pink-100">
              <span className="bg-red-500 rounded-full p-2 mr-2">
                <FaEnvelope className="text-white" />
              </span>
              <a
                href="mailto:zakiyafareez@techlegendzdxb.com"
                className="text-gray-700 p-1 rounded transition-colors duration-200"
              >
                {card.email}
              </a>
            </div>
            <div className="flex items-center mb-2 hover:bg-pink-100">
              <span className="bg-red-500 rounded-full p-2 mr-2">
                <FaPhone className="text-white" />
              </span>
              <a
                href="tel:+971505012754"
                className="text-gray-700 p-1 rounded transition-colors duration-200"
              >
                {card.phone}
              </a>
            </div>
            <div className="flex items-center mb-2 hover:bg-pink-100">
              <span className="bg-red-500 rounded-full p-2 mr-2">
                <FaWhatsapp className="text-white" />
              </span>
              <a
                href="https://wa.me/971505012754"
                className="text-gray-700 p-1 rounded transition-colors duration-200"
              >
                {card.whatsappNumber}
              </a>
            </div>
            <div className="flex items-center mb-2 hover:bg-pink-100">
              <span className="bg-red-500 rounded-full p-2 mr-2">
                <FaGlobe className="text-white" />
              </span>
              <a
                href={card.websiteLink}
                className="text-gray-700 p-1 rounded transition-colors duration-200"
              >
                Visit our Website
              </a>
            </div>
            <div className="flex items-center mb-2 hover:bg-pink-100">
              <span className="bg-red-500 rounded-full p-2 mr-2">
                <FaInstagram className="text-white" />
              </span>
              <a
                href={card.instagramUrl}
                className="text-gray-700 p-1 rounded transition-colors duration-200"
              >
                Follow me on Instagram
              </a>
            </div>
            <div className="flex items-center mb-2 hover:bg-pink-100">
              <span className="bg-red-500 rounded-full p-2 mr-2">
                <FaLinkedin className="text-white" />
              </span>
              <a
                href={card.linkedinUrl}
                className="text-gray-700 p-1 rounded transition-colors duration-200"
              >
                Connect with me on LinkedIn
              </a>
            </div>
            <div className="flex items-center mb-2 hover:bg-pink-100">
              <span className="bg-red-500 rounded-full p-2 mr-2">
                <FaFacebook className="text-white" />
              </span>
              <a
                href={card.facebookUrl}
                className="text-gray-700 p-1 rounded transition-colors duration-200"
              >
                Connect with me on Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Save Contact Button */}
        {/* <div className="mt-6 flex justify-center">
          <button className="bg-red-500 text-white py-2 px-6 rounded-lg">
            Save Contact
          </button>
        </div> */}
      </div>
    </div>
  );
};
