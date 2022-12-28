import React from 'react';
import SlickSlider from '../../UI/Slick'
import SliderData from '../../../data/Slider/home-1'
import {Link} from "react-router-dom";
import './home-one.css';

const NextArrow = ({className, onClick}) => {
    return (
        <button className={className} onClick={onClick}><i className="fa fa-angle-right"/></button>
    )
};

const PrevArrow = ({className, onClick}) => {
    return (
        <button className={className} onClick={onClick}><i className="fa fa-angle-left"/></button>
    )
};

const Slider = () => {
        const settings = {
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000 ,
            infinite: true,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                }
            ]
        };

        return (
            <div className={'slider-area'}>
                <SlickSlider settings={settings}>
                    {
                        SliderData.map(item => (
                            <div key={item.id}>
                                <div className="slider-item"
                                     style={{backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url(${require('../../../assets/img/' + item.bg)})`}}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-7">
                                                <div className="slider-content" style={{opacity:1}}>
                                                    <h2>{item.title}</h2>
                                                    <p>{item.text}</p>
                                                    <Link to={`${process.env.PUBLIC_URL + item.btnLink}`} className="btn btn-brand">{item.btnText}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </SlickSlider>
            </div>
        );
    }
;

export default Slider;