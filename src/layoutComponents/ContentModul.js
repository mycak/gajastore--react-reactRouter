import React from 'react';
import '../styles/ContentModul.css';

const ContentModul = ({direction, base}) => {
    return (
        <div className={`content--container ${direction}`}>
            <div className="content--text--container">
                <div className="content--title">
                    <h2>{base.title}</h2>
                </div>
                <div className="content--text">
                    <p>{base.text}</p>
                </div>
            </div>
            <div className="content--image">
                <img src={base.img} alt="img" />
            </div>
        </div>
    )
}

export default ContentModul;