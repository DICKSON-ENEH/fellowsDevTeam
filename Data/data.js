//the both major  ways of passing a data in reactjs are props and destructuring 

//EXAMPLE BELOW

//DESTRUCTURION

import React from 'react'
// import Home from "folder/filedirectory"

const App = ()=>{
    return (
        <Home name="john" clas="set05" location="wilmer"/>
    )
}

export default App


//home created from another folder will be imported into App file so to make it visible for use

const Home=({name,clas,location}) =>{
    return(

 <Components>
<Body>
    <div>{name}</div>
    <div>{clas}</div>
    <div>{location}</div>
</Body>

 </Components>        
    )
}

//PROPS by using the keyword props 
import React from 'react'
// import Home from "folder/filedirectory"

const App = ()=>{
    return (
        <Home name="john" clas="set05" location="wilmer"/>
    )
}

export default App


//home created from another folder will be imported into App file so to make it visible for use

const Home=({props}) =>{
    return(

 <Components>
<Body>
    <div>{props.name}</div>
    <div>{props.clas}</div>
    <div>{props.location}</div>
</Body>

 </Components>        
    )
}