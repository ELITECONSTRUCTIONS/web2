import React from 'react';
import From from "./From";
import ContactInfo from "./ContactInfo";

const ContactPage = () => {
    return (
        <div className={'contact-page-area-wrapper sp-y'}>
            <div className="container">
                <div className="contact-content-wrap">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact-form-area contact-method">
                                <h3>Send us a Message</h3>
                                <From/>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="contact-information contact-method">
                                <div className="contact-info-con">
                                    <h3>Contact Info</h3>
                                    <ContactInfo
                                        address=" 102/1, Sarwahara nagar, Indore <br /> Madhya Pradesh, India , 452003<br /> <br/>https://elitebuildin.com/ <br/>(+91) 9827552765 <br/>(+91) 8962250708"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;