const express = require('express')
const jsxEngine = require('jsx-view-engine')
const pokemon = require('./models/pokemon')
const mongoose = require('mongoose')
require('dotenv').config();
const Pokemon = require('./models/pokemonSchema')


const app = express();

const PORT =3000;

// config
app.set('view engine','jsx');
app.engine('jsx', jsxEngine())

// parse and add the incoming data to a req.body object
app.use(express.urlencoded({extended: false}));
// display all the pokemon in a list
app.get('/pokemon',async (req,res)=>{
    const pokemon = await Pokemon.find({})
    res.render('Index',{
        pokemon:pokemon
    })
})

// form to get new pokemon
app.get('/pokemon/new',(req,res)=>{
    res.render('New')
})

app.get('/pokemon/:id',async (req,res)=>{
    const {id} = req.params
    const pokemon = await Pokemon.findById(id)
    res.render('Show',{
        card: pokemon
    })
})

// take new pokemon info from the form and send it to data base.
app.post('/pokemon',async (req,res)=>{
    console.log(req.body);
    await Pokemon.create(req.body)
    res.redirect('/pokemon')
})


mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once('open',()=>{
    console.log('connected to db');
})
app.listen(PORT,()=>{
    console.log(`Server listening at port ${PORT}`);
})