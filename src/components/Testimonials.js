import React, { useState } from "react";
import Modal from "react-modal";
import testimonial1 from "../assets/images/testimonials/testimonial1.jpg";
import testimonial2 from "../assets/images/testimonials/testimonial2.jpg";
import testimonial3 from "../assets/images/testimonials/testimonial3.jpg";
import testimonial4 from "../assets/images/testimonials/testimonial4.jpg";
import testimonial5 from "../assets/images/testimonials/testimonial5.jpg";
import testimonial6 from "../assets/images/testimonials/testimonial6.jpg";

const Testimonials = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <h2>Témoignages</h2>
      <div className="testimonial">
        <div className="card" onClick={() => openModal(testimonial1)}>
          <img src={testimonial1} alt="Avis 1" />
        </div>
        <div className="card" onClick={() => openModal(testimonial2)}>
          <img src={testimonial2} alt="Avis 2" />
        </div>
        <div className="card" onClick={() => openModal(testimonial3)}>
          <img src={testimonial3} alt="Avis 3" />
        </div>
        <div className="card" onClick={() => openModal(testimonial4)}>
          <img src={testimonial4} alt="Avis 4" />
        </div>
        <div className="card" onClick={() => openModal(testimonial5)}>
          <img src={testimonial5} alt="Avis 5" />
        </div>
        <div className="card" onClick={() => openModal(testimonial6)}>
          <img src={testimonial6} alt="Avis 6" />
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            maxWidth: "90%", // Limite la largeur
            maxHeight: "90%", // Limite la hauteur
            margin: "auto", // Centre le modal
            padding: "0", // Supprime le padding
            borderRadius: "10px", // Ajoute des coins arrondis
          },
        }}
      >
        <button className="close-modal" onClick={closeModal}>X</button>
        {selectedImage && <img src={selectedImage} alt="Selected" />}
      </Modal>
    </div>
  );
};

export default Testimonials;
