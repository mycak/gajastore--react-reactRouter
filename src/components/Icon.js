import React from 'react';
import '../styles/Icon.css';

const Icon = ({img, desc}) => {
    return (
        <div className="icon">
            <div className="icon--container">
                <img src={img} alt='icon' />
            </div>
            <div className="icon--desc">
                <p>{desc}</p>
            </div>

        </div>
    )
}

export default Icon;