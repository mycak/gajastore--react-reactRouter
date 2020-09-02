import React from 'react';
import '../styles/Curio.css';

const Curio = ({img, text}) => {
    return (
        <div className="curio--container">
            <div className="curio--image">
                <img src={img} className="filter--color" alt="img--curio" />
            </div>
            <div className="curio--title">
                <p>{text.title}</p>
            </div>
            <div className="curio--text">
                <p>{text.text}</p>
            </div>
        </div>
    )
}

export default Curio;