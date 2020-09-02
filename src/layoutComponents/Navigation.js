import React from 'react';
import '../styles/Navigation.css';
import goToAnchor from '../helperFunctions';



const Navigation = ({navInAt}) => {


    const checkNav = top => {
        if (top > 300) {
            return 'active'
        } else {
            return ''
        }
    }

    return (
        <div className={`nav ${checkNav(navInAt)}`}>
            <div className="nav--logo"><a href="#hero" onClick={goToAnchor} >Gaja</a></div>
            <div className="nav--buttons">
                <a href="#history" onClick={goToAnchor}>Historia</a>
                <a href="#shop" onClick={goToAnchor}>Sklep</a>
                <a href="#contact" onClick={goToAnchor}>Kontakt</a>
            </div>

        </div>
    )
}

export default Navigation;