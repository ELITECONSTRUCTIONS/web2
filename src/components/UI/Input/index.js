import React from 'react';

const FormInput = ({tag,type,name,placeholder,classes,value,onChangeFunction}) => {
    return (
        <div className="single-input-item">
            <label>
                {(()=>{
                    if(tag === 'input'){
                        return <input type={type} name={name} placeholder={placeholder} className={classes} value={value} onChange={(e)=>{onChangeFunction(e.target.value)}} />
                    }else if(tag === 'textarea'){
                        return  <textarea name={name} cols="30" rows="7" placeholder={placeholder} className={classes} value={value} onChange={(e)=>{onChangeFunction(e.target.value)}} required/>
                    }else if(tag === 'button'){
                        return <button className={`btn-outline ${classes}`} type="submit" >Send Message</button>
                    }
                })()}
            </label>
        </div>
    );
};

export default FormInput;