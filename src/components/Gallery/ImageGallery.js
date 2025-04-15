import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ImageGallery.css';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  
  useEffect(() => {
    // This function will dynamically import images from the Photo Gallery folder
    const importAll = (r) => {
      return r.keys().map(r);
    };
    
    try {
      // Import all images from the Photo Gallery directory
      const photoGallery = importAll(require.context('../../assets/img/Photo Gallery', false, /\.(png|jpe?g|svg)$/));
      setImages(photoGallery);
      setLoading(false);
    } catch (error) {
      console.error("Error loading gallery images:", error);
      setLoading(false);
    }
  }, []);
  
  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const navigateImage = (direction) => {
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(newIndex);
    }
  };

  return (
    <>
      {/* Simple Header with clean design */}
      <div className="gallery-header-simple">
        <div className="gallery-header-content">
          <h1 className="gallery-header-title">Project Gallery</h1>
          <div className="gallery-header-divider"></div>
          <p className="gallery-header-description">
            Browse our collection of completed construction and design projects
          </p>
        </div>
      </div>
      
      <div className="gallery-container">
        {loading ? (
          <div className="loading">Loading gallery...</div>
        ) : (
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div 
                className="gallery-item" 
                key={index}
                onClick={() => openLightbox(index)}
              >
                <LazyLoadImage
                  alt={`Gallery image ${index + 1}`}
                  effect="blur"
                  src={image}
                  threshold={300}
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
        )}
        
        {selectedImage !== null && (
          <div className="lightbox" onClick={closeLightbox}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="lightbox-nav prev" 
                onClick={() => navigateImage(-1)}
                disabled={selectedImage === 0}
              >
                ‹
              </button>
              
              <img 
                src={images[selectedImage]} 
                alt={`Gallery image ${selectedImage + 1}`}
                className="lightbox-image"
              />
              
              <button 
                className="lightbox-nav next" 
                onClick={() => navigateImage(1)}
                disabled={selectedImage === images.length - 1}
              >
                ›
              </button>
            </div>
            
            <div className="lightbox-counter">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageGallery; 