import React from 'react';
import Icon from '../components/Icon';
import '../styles/ContactSite.css';
import imgPhone from '../images/phone.svg';
import imgEmail from '../images/email.svg';

const ContactSite = () => {
    return (
        <div className="contact--container">
            <h2>Kontakt</h2>
            <p>Nisi velit do commodo dolore qui eu velit proident mollit veniam commodo occaecat consectetur. Magna do sit qui magna sit id officia est culpa. Amet proident voluptate id magna consequat incididunt velit dolore dolor occaecat labore deserunt. Fugiat enim eiusmod officia sit minim non exercitation elit culpa laborum sint consectetur.
            </p>
            <div className="icons--container">
                <Icon img={imgPhone} desc={'+48 505 123 112'} />
                <Icon img={imgEmail} desc={'przemekPrzemek@gmail.com'} />
            </div>
        </div>
    )
}

export default ContactSite;