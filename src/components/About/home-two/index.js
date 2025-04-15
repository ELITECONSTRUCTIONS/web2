import React from 'react';
import parse from "html-react-parser";
import aboutData from "../../../data/About/home-two";
import aboutThumb from '../../../assets/img/new-uploads/about-new-check.jpg'
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className="home-two-about-area" style={{position: 'relative', overflow: 'hidden'}}>
            <div className="blur-background" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${aboutThumb})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'blur(2px)',
                zIndex: 1
            }}></div>
            <div className="container" style={{
                position: 'relative', 
                zIndex: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                borderRadius: '8px',
                padding: '20px'
            }}>
                <div className="row align-items-center">
                   {/*  <div className="col-12 d-lg-none">
                        <figure className="about-thumb">
                            <img src={require('../../../assets/img/' + aboutData.thumb)} alt="Businex-About"/>
                        </figure>
                    </div> */}

                    <div className="col-lg-6">
                        <div className="about-content about-content--2">
                            <h2>{aboutData.title}</h2>
                            <h4>{parse(aboutData.heading)}</h4>
                            <span className="about-since">{aboutData.since}</span>
                            <p style={{fontSize: '20px'}}>{parse(aboutData.text)}</p>
                            <Link to={`${process.env.PUBLIC_URL + aboutData.btnLink}`} className="btn-about">{aboutData.btnText} <i className="fa fa-angle-double-right"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
