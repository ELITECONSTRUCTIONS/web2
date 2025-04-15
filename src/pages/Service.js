import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageAbout from "../components/About/page";
import Services from "../components/Services";
import PricingTable from "../components/PricingTable";
import Testimonial from "../components/Testimonials/home-two";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from '../assets/img/about.jpg'

const PageService = () => {
    return (
        <Fragment>
            <Header/>
{/*             <PageHeader
                bgImg={require('../assets/img/page-header.jpg')}
                title="OUR SERVICES"
                content="We provide best and most economical solutions."
            /> */}
            <PageAbout
                title={'Our Services'}
                heading="Provide best <br/> Engineering Solutions"
                thumb={ServiceThumb}
                content="<b>Elite</b> is a consultancy and construction company in Indore, that has pioneered innovation intelligent design, smart construction & exceptional build quality to craft affordable spaces for you. Here at ELITE we mainly emphasize on sustained standards, Schedule and creative vision. These core values have helped us to construct some of the most aspiring buildings.
                Our roots are in Indore(MP) we have a core team of dedicated Civil engineers, visionary architects &  designers and civil contractors that facilitates Vastu architect, architectural plans, civil drawings, civil consultancy, civil constructions and turn-key solutions.
                ."
            />
            <Services classes="sm-top"/>
           {/* <PricingTable/>
             <Testimonial/>
                        {/* {<BrandLogo/> 

            <Funfact classes="sp-top"/> */}
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageService;