import React,{Fragment} from 'react';
import Header from "../components/Header";
import BlogPage from "../templates/Blog";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";

const PageBlogGrid = () => {
    console.log('inside woc page')
    return (
        <Fragment>
            <Header/>
            <BlogPage blog_type={'grid'} sidebar={false} sidebar_position={'left'} showContent={false} pagefor={'normal'}/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageBlogGrid;