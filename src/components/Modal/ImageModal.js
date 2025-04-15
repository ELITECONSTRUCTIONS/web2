import React, { useEffect } from 'react';
import './ImageModal.css';

const ImageModal = ({ isOpen, imageUrl, alt, onClose }) => {
  useEffect(() => {
    console.log("Modal state changed:", isOpen); // Debugging
  }, [isOpen]);

  // Early return with debugging
  if (!isOpen) {
    console.log("Modal is closed");
    return null;
  }

  console.log("Rendering open modal with image:", imageUrl);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {imageUrl && <img src={imageUrl} alt={alt || "Modal image"} className="modal-image" />}
        {!imageUrl && <p>No image to display</p>}
      </div>
    </div>
  );
};

export default ImageModal; 