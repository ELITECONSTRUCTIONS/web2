import React from 'react';
import Text from "../UI/Text";
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";
import { Link } from "react-router-dom";
import Logo from '../../assets/img/logo-dark.png'

function Footer() {
    return (
        <footer className="footer-area sp-bottom ">
            <div className="container">
                <div className="row mtn-40">
                    <div className="col-lg-4 order-4 order-lg-0">
                        <div className="widget-item">
                            <div className="about-widget">
                                <Link to={`${process.env.PUBLIC_URL + "/"}`}>
                                    <img src={Logo} alt="Logo" />
                                </Link>

                                <Text classes="copyright-txt">
                                    &copy; {new Date().getFullYear()} Elite Constructions. <br /> All Rights Reserved.
                                </Text>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Information">
                            <List classes="widget-list">
                                <LI><Link to={`${process.env.PUBLIC_URL + "/about"}`}>Our company</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/contact"}`}>Contact us</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/services"}`}>Our services</Link></LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Social Links">
                            <List classes="widget-list">
                                <LI><a href="https://www.facebook.com/share/16ErDhhq7K/" target="_blank" rel="noopener noreferrer">Facebook</a></LI>
                                <LI><a href="https://www.instagram.com/elite.constructions13?igsh=MWhidmF3bG14N2F2dw==" target="_blank" rel="noopener noreferrer">Instagram</a></LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <Widget title="Contact Us">
                            <address>
                                102/1, Sarwahara nagar, Indore <br /> Madhya Pradesh, India , 452003<br />
                                https://elitebuildin.com/<br />
                                (+91) 9827552765 <br /> (+91) 8962250708
                            </address>
                        </Widget>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;