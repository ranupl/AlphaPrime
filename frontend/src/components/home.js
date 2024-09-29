import React, { useState, useEffect } from 'react';
import CardModal from './cardModal';
import { getAllCardApi } from "../api/getAllCards";
import { Card } from "./cardComponent";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const fetchCards = async () => {
    try {
      const response = await getAllCardApi();
      setCards(response.data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="relative h-screen">
          <button 
            className="absolute left-7 mb-10 px-4 py-2 bg-red-600 text-white rounded-lg"
            onClick={handleOpenModal}
          >
            Add Card
          </button>
          {showModal && <CardModal handleClose={handleCloseModal} fetchCards={fetchCards}  />}

          <div className="flex flex-wrap mt-10 justify-center justify-start">
            {cards.map(card => (
              <div key={card.id} className="m-2">
                <Card card={card} />
              </div>
            ))}
          </div>
    </div>
  );
};
