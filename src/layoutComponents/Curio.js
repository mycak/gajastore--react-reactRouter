import React from 'react';
import '../styles/Curio.css';

const Curio = ({base}) => {
    return (
        <div className="curio--container">
            <div className="curio--image">
                <img src={base.img} className="filter--color" alt="img--curio" />
            </div>
            <div className="curio--title">
                <p>{base.title}</p>
            </div>
            <div className="curio--text">
                <p>{base.text}</p>
            </div>
        </div>
    )
}

export default Curio;