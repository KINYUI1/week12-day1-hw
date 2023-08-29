const React = require('react')

const Show = (props)=>{
    const {card} = props;
    return<div>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{card.name}</h2>
        <img src={card.img + '.jpg'}/><br/>
        <a href='/pokemon'>Back</a>
    </div>
}

module.exports = Show;