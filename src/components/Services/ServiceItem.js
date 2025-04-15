import React, { useState } from 'react';
import {Link} from "react-router-dom";
import ImageModal from '../Modal/ImageModal';

function ServiceItem(props) {
    console.log("ASKKKKK", props)
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    
    const handleImageClick = () => {
        console.log("Image clicked!");
        setSelectedImage(props.image);
        setModalOpen(true);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') setModalOpen(false);
    };

    React.useEffect(() => {
        if (modalOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [modalOpen, setModalOpen]);

    const serviceURL = `/service/${props.title.split(' ').join('-').toLowerCase()}?id=${props.id}`

    return (
        <div className="col-sm-6 col-lg-4">
            <div className="service-item">
                <figure className="service-thumb">
                    <div 
                        className="service-image" 
                        onClick={handleImageClick}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={selectedImage ? `/images/${selectedImage}` : require('../../assets/img/' + props.thumb)} style={{width: '400px', height: '350px'}} alt={props.title}/>
                    </div>
                    <figcaption className="service-txt">
                        <h5>{props.title}</h5>
                    </figcaption>
                </figure>
                <ImageModal 
                    isOpen={modalOpen}
                    imageUrl={selectedImage ? `/images/${selectedImage}` : require('../../assets/img/' + props.thumb)}
                    alt={props.title}
                    onClose={() => setModalOpen(false)}
                />
            </div>
        </div>
    );
}

export default ServiceItem;