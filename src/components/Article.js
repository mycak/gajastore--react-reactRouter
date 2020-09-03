import React from 'react';
import '../styles/Article.css';

const Article = ({img}) => {
    return (
        <div className="article--container">
            <h3>Wino Shardoney 'Jesień</h3>
            <div className="article--photo">
                <img alt={'item'} src={img}/>
            </div>
            <div className="article--description">
                <p>Qui enim dolor veniam esse cupidatat mollit sint Lorem nisi velit. Mollit incididunt velit voluptate occaecat anim magna enim amet non pariatur. Tempor tempor aute eiusmod qui pariatur irure aliqua tempor mollit adipisicing elit commodo.</p>
            </div>
            <div className="article--prize">
                <p>19,99 zł</p>
            </div>
        </div>
    )
}

export default Article;