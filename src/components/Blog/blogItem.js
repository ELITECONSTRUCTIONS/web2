import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './modal.css'; // Make sure to create this file

function BlogItem(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const blogURL = `/blog/${props.title.split(' ').join('-').toLocaleLowerCase()}?id=${props.id}`;
    
    // Add effect for debugging
    useEffect(() => {
        console.log("Modal state changed:", modalOpen);
    }, [modalOpen]);
    
    const openImageModal = () => {
        console.log("Opening modal");
        setModalOpen(true);
    };
    
    const closeImageModal = () => {
        console.log("Closing modal");
        setModalOpen(false);
    };
    
    console.log("Rendering BlogItem, modalOpen:", modalOpen);
    
    return (
        localStorage.getItem("page") == props.type && (
            <div className={props.cols ? props.cols : 'col-md-6 col-lg-4'}>
                <div className="blog-item">
                    {props.thumb ? (
                        <figure className="blog-thumb" onClick={openImageModal} style={{ cursor: 'pointer' }}>
                            {console.log("check url", props.thumb)}
                            <img src={require('../../assets/img/' + props.thumb)} alt={props.title} />
                        </figure>
                    ) : null}
                    <div className="blog-content" style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                        <h2 className="h5">{props.title}</h2>
                        <p>{props.excerpt}</p>

                        <div className="blog-meta">
                            {/* <Link to={`${process.env.PUBLIC_URL + blogURL}`}>By: {props.postBy}</Link> */}
                            {/* <Link to={`${process.env.PUBLIC_URL + blogURL}`}>{props.date}</Link> */}
                        </div>
                    </div>
                </div>
                
                {/* Modal with inline styles for testing */}
                {modalOpen && (
                    <div 
                        className="debug-modal-overlay"
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 9999
                        }}
                        onClick={closeImageModal}
                    >
                        <div 
                            style={{
                                position: 'relative',
                                maxWidth: '90%',
                                maxHeight: '90vh',
                                backgroundColor: '#fff',
                                padding: '20px',
                                borderRadius: '5px',
                                zIndex: 10000
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span 
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    color: '#000'
                                }}
                                onClick={closeImageModal}
                            >
                                &times;
                            </span>
                            <img 
                                src={require('../../assets/img/' + props.thumb)} 
                                alt={props.title}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '80vh'
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
        )
    );
}

export default BlogItem;