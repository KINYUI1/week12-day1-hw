const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

const Index = (props)=>{
const {pokemon} = props;

return(<div style={myStyle}>
    <h1>See All The Pokemon</h1>
    <ul>
    {pokemon.map((card)=>{
        const remainingName = card.name.slice(1)
        return <li key={card._id}><a href={`/pokemon/${card._id}`}>{card.name.charAt(0).toUpperCase() + remainingName}</a></li>
         
    })}
    </ul>
    <a href='/pokemon/new'>Add Pokemon</a>
</div>)
}

module.exports = Index;