import React from 'react';
import '../styles/Button.css';



const Button = ({name, addClass, navInAt, onClick}) => {

    const checkNav = top => {
        if (top > 520) {
            return 'active'
        } else {
            return ''
        }
    };

    return (
        <div className="button--container">
            <button onClick={onClick} className={`button ${addClass} ${checkNav(navInAt)}`}>{name}</button>
        </div>
    )
}

export default Button;