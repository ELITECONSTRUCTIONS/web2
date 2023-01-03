import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/home-two";
import Services from "../components/Services";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import Features from "../components/Features";
import Testimonial from "../components/Testimonials/home-two";
import Team from "../components/Team/home-two";

import ServiceThumb from '../assets/img/about.jpg'

const PageAbout = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../assets/img/page-header.jpg')}
                title="ABOUT US"
                content="Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly."
            />
            <About
                title={'Our Team'}
                heading="Meet Our <br/> Expert Member"
                thumb={ServiceThumb}
                content="<b>Elite</b> is a consultancy and construction company in Indore, that has pioneered innovation intelligent design, smart construction & exceptional build quality to craft affordable spaces for you. Here at ELITE we mainly emphasize on sustained standards, Schedule and creative vision. These core values have helped us to construct some of the most aspiring buildings.
                Our roots are in Indore(MP) we have a core team of dedicated Civil engineers, visionary architects &  designers and civil contractors that facilitates Vastu architect, architectural plans, civil drawings, civil consultancy, civil constructions and turn-key solutions.
                ."
            />
            <Services/>
            <Features classes={'sm-top'}/>
            {/* <Testimonial/>
            <Team/>
             <BrandLogo/>
            <Funfact classes="sp-top"/> */}
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageAbout;