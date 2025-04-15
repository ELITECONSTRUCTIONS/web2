import React, { Fragment } from 'react';

import About from '../components/About/home-one';
import CallToAction from "../components/CallToAction";
import Features from '../components/Features';
import Footer from "../components/Footer";
import Header from '../components/Header';
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import Services from '../components/Services';
import Slider from '../components/Slider/home-one';
import PageGallery from "./Gallery";
const HomeOne = () => {
    return (
        <Fragment>
            <Header/>
            <Slider/>
            <About/>
            <Features classes="sp-top"/>
            <Services classes="sm-top-wt"/>
{/*             <Testimonials/>
             <Team/>
            <Blog/>
                        {/* {<BrandLogo/> 

            <Funfact/> */}
            <CallToAction/>
            <Footer/>
            <MobileMenu/>
            <LoginRegister/>
            <PageGallery/>
        </Fragment>
    );
};

export default HomeOne;