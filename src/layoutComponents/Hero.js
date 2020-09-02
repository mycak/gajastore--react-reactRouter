import React from 'react';
import '../styles/Hero.css';
import Logo from '../components/Logo.js';
import Button from '../components/Button';
import Headline from '../components/Headline';

const goToShopSite = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', 'shop');
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
}

const goToHistory = (e) => {
    e.preventDefault();
    document.querySelector('#history').scrollIntoView({
        behavior: 'smooth'
        });
}

const Hero = ({title}) => {
    return (
        <div className="hero">
            <div className="hero--title--container">
                <Logo title={'Gaja'} />
            </div>
            <Headline size={'h3'} desc={'Produkty BIO, Vege, alkohol, promocje'} />
            <Headline size={'h2'} desc={'Sprzedaż internetowa'} />
            <div className="hero--buttons--container">
                <Button name={'Oferta'} onClick={goToShopSite} />
                <Button name={'O nas'} onClick={goToHistory} />
            </div>
        </div>
    )
}
export {Hero, goToShopSite};