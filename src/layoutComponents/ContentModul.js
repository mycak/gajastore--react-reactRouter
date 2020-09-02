import React from 'react';
import '../styles/ContentModul.css';

const ContentModul = ({img, direction, text}) => {
    return (
        <div className={`content--container ${direction}`}>
            <div className="content--text--container">
                <div className="content--title">
                    <h2>{text.title}</h2>
                </div>
                <div className="content--text">
                    <p>{text.text}</p>
                </div>
            </div>
            <div className="content--image">
                <img src={img} alt="img" />
            </div>
        </div>
    )
}

export default ContentModul;