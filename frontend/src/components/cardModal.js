import React from 'react';
import CardForm from './cardForm';

const CardModal = ({ handleClose , fetchCards}) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-1/2 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-semibold">Add Card</h2>
          <button 
            className="text-gray-600 hover:text-gray-800 text-2xl"
            onClick={handleClose}
          >
            &times;
          </button>
        </div>
        <div className="p-4">
          <CardForm  fetchCards={fetchCards} />
        </div>
      </div>
    </div>
  );
};

export default CardModal;

