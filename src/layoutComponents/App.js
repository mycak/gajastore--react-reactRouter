import React, {useState, useEffect} from 'react';
import Navigation from './Navigation';
import {Hero, goToShopSite} from './Hero';
import ContentModul from './ContentModul';
import Curio from './Curio';
import ContactSite from './ContactSite';
import Route from './Route';
import Shop from './Shop';
import Button from '../components/Button';
import base from '../base';

import "../styles/App.css";


const App = () => {

    // HANDLE NAVIGATION AND OFFER BUTTON

    const [navInAt, SetNavInAt] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => SetNavInAt(window.scrollY));
    },[])

     // TO RENDERING

    return (
        <div className="App" id="hero">
            <Route path='/'>
                <Navigation navInAt={navInAt} />
                <Button name={'Oferta'} addClass={'add'} navInAt={navInAt} onClick={goToShopSite}/>
                <header className="header">
                    <div className="header--container">
                        <Hero />
                    </div>
                </header>

                <section className="section--decription--history" id="history">
                    <ContentModul direction={''} base={base.modulHistory} />
                </section>

                <section className="section--curios">
                    <div className="curios--container">
                        <Curio base={base.modulCurio.one}/>
                        <Curio base={base.modulCurio.one}/>
                        <Curio base={base.modulCurio.one}/>
                    </div>
                </section>

                <section className="section--description--shop" id="shop">
                    <div className="layer--grey--1">
                        <ContentModul direction={'reverse'} base={base.modulAboutShop.one} />
                    </div>
                    <div className="layer--grey--2">
                        <ContentModul base={base.modulAboutShop.two} />
                    </div>
                    <div className="layer--grey--1">
                        <ContentModul direction={'reverse'} base={base.modulAboutShop.three} />
                    </div>
                </section>

                <section className="section--contact" id="contact">
                    <ContactSite />
                </section>

                <footer>

                </footer>
            </Route>

            <Route path='/shop'>
                <Navigation navInAt={400} />
                <Shop />
            </Route>

        </div>
    )
};

export default App;