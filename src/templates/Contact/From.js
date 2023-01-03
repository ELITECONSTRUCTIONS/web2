import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import FormInput from "../../components/UI/Input";

const From = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [text, setText] = useState('');
    const [responseFromUser, setResponseFromUser] = useState({
        Name: firstName + lastName,
        Email: email,
        Phone: phone,
        Message: text
    })
    // connection url -> https://sheet.best/api/sheets/5bdfc6f1-7225-4bae-a0be-14bcd5e378d0
    /*  useEffect(()=>{
         console.log("first name",firstName) //Amrik
         console.log("last name",lastName) //Singh
         console.log("email",email)// singhamrikkhalsa@gmail.com 
         console.log("phone",phone) // 8965037900
         console.log("text",text) // hi i am amrik 
         setResponseFromUser({
             Name : firstName + lastName,
         Email : email,
         Phone : phone,
         Message : text 
         })
     }) */

    useEffect(() => {
        setResponseFromUser({
            Name: firstName + ' ' + lastName,
            Email: email,
            Phone: phone,
            Message: text
        })
    }, [firstName,lastName,email,phone,text])
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("your message", responseFromUser)
        axios.post("https://sheet.best/api/sheets/5bdfc6f1-7225-4bae-a0be-14bcd5e378d0", responseFromUser).then(response => {
            console.log("response from google sheets", response);
        });

    }
    return (
        <div className="contact-form-wrap">
            <form id="contact-form" onSubmit={(e) => submitHandler(e)}>
                <div className="row">
                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'first_name'}
                            placeholder={'First Name *'}
                            value={firstName}
                            onChangeFunction={setFirstName}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'last_name'}
                            placeholder={'Last Name *'}
                            value={lastName}
                            onChangeFunction={setLastName}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'email'}
                            name={'email_address'}
                            placeholder={'Email address *'}
                            value={email}
                            onChangeFunction={setEmail}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'phone_no'}
                            placeholder={'Phone No'}
                            value={phone}
                            onChangeFunction={setPhone}
                        />
                    </div>

                    <div className="col-12">
                        <FormInput
                            tag={'textarea'}
                            name={'con_message'}
                            placeholder={'Write Your Message *'}
                            value={text}
                            onChangeFunction={setText}
                        />

                        <FormInput
                            tag={'button'}
                            classes={'btn-outline'}
                        />

                        <div className="form-message" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default From;