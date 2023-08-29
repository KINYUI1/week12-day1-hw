const express = require('express')
const jsxEngine = require('jsx-view-engine')
const pokemon = require('./models/pokemon')

const app = express();

const PORT =3000;

// config
app.set('view engine','jsx');
app.engine('jsx', jsxEngine())

app.get('/pokemon',(req,res)=>{
    res.render('Index',{
        pokemon:pokemon
    })
})

app.get('/pokemon/:id',(req,res)=>{
    res.render('Show',{
        card: pokemon[req.params.id]
    })
})



app.listen(PORT,()=>{
    console.log(`Server listening at port ${PORT}`);
})