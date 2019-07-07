import React from 'react';
import './HeroImage.css';

const HeroImage = (props) => {
    return(
        <div className="rmdb-heroimage"
            style={{
            background: 
                `linear-gradient(to bottom, rgba(0,0,0,0)
                39%, rgba(0,0,0,0) 
                41%, rgba(0,0,0,65) 
                100%),
                url(`${ props.image}`), #icicic`
            }}
        >
            <div className='rmdb-heroimage-content'>
                <div className='rmdb-hearimage-text'>
                    <h1>${props.title}</h1>
                    <p>${props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroImage;   

