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
    {pokemon.map((card, i)=>{
        const remainingName = card.name.slice(1)
        return <li><a href={`/pokemon/${i}`}>{card.name.charAt(0).toUpperCase() + remainingName}</a></li>
         
    })}
    </ul>
</div>)
}

module.exports = Index;