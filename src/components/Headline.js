import React from 'react';

const Headline = ({size, desc}) => {
    if (size === 'h2') {
        return (
            <div>
                <h2>{desc}</h2>
            </div>
        )
    }
    if (size === 'h3') {
        return (
            <div>
                <h3>{desc}</h3>
            </div>
        )
    }
}

export default Headline;