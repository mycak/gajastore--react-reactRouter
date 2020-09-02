import React from 'react';
import Article from '../components/Article';
import '../styles/Shop.css';
import img from '../images/item1.png'

const Shop = () => {
    return (
        <div className="shop--container">
            <Article img={img} />
            <Article img={img} />
            <Article img={img} />
            <Article img={img} />
        </div>
    )
}

export default Shop;