const React = require('react')

const New = (props)=>{

return<main>
    <form action='/pokemon' method='POST'>
        name: <input type='text' name='name'/><br/>
        Image link: <input type='text' name='img' placeholder={`img link without '.jpg'`}/><br/>
        <input type='submit' value='Create Pokemon'/>
    </form>
</main>

}

module.exports = New;