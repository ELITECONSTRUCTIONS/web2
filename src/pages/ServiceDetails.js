import React,{Fragment} from 'react';
import Header from "../components/Header";
import ServiceDetails from "../templates/ServiceDetails";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

const PageServiceDetails = () => {
    return (
        <Fragment>
            <Header/>
            <ServiceDetails/>
                        {/* {<BrandLogo/> */}

{/*             <---<Funfact/> --->
 */}            <CallToAction/>
            <Footer/>
{/*             <LoginRegister/>
 */}            <MobileMenu/>
        </Fragment>
    );
};

export default PageServiceDetails;