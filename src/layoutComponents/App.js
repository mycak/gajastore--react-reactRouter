import React, {useState, useEffect} from 'react';
import Navigation from './Navigation';
import {Hero, goToShopSite} from './Hero';
import ContentModul from './ContentModul';
import Curio from './Curio';
import ContactSite from './ContactSite';
import Route from './Route';
import Shop from './Shop';

import "../styles/App.css";
import img1 from '../images/przemek.jpg';
import img2 from '../images/truck.svg';
import text from '../baseText';
import Button from '../components/Button';



const App = () => {

    // HANDLE NAVIGATION AND OFFER BUTTON

    const [navInAt, SetNavInAt] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => SetNavInAt(window.scrollY));
    },[])

     // SMOTH SCROLL TO SECTIONS

    // useEffect(() => {
    //     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //         anchor.addEventListener('click', function (e) {
    //             e.preventDefault();
    //             document.querySelector(this.getAttribute('href')).scrollIntoView({
    //                 behavior: 'smooth'
    //             });
    //         });
    //     });
    // },[])
    //


    // TO RENDERING

    return (
        <div className="App" id="hero">
            <Route path='/'>
                <header className="header">
                    <div className="header--container">
                        <Navigation navInAt={navInAt} />
                        <Hero />
                    </div>
                </header>

                <section className="section--decription--history" id="history">
                    <ContentModul img={img1} direction={''} text={text.modulHistory} />
                    <Button name={'Oferta'} addClass={'add'} navInAt={navInAt} onClick={goToShopSite}/>
                </section>

                <section className="section--curios">
                    <div className="curios--container">
                        <Curio img={img2} text={text.modulCurio.one}/>
                        <Curio img={img2} text={text.modulCurio.one}/>
                        <Curio img={img2} text={text.modulCurio.one}/>
                    </div>
                </section>

                <section className="section--description--shop" id="shop">
                    <div className="layer--grey--1">
                        <ContentModul img={img1} direction={'reverse'} text={text.modulHistory} />
                    </div>
                    <div className="layer--grey--2">
                        <ContentModul img={img1} text={text.modulHistory} />
                    </div>
                    <div className="layer--grey--1">
                        <ContentModul img={img1} direction={'reverse'} text={text.modulHistory} />
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