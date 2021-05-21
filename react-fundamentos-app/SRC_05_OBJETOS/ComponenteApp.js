import React from 'react'

const persona = {
    nombre: 'Cristian',
    apellido: 'Gomez',
    email: 'Cristian@gmail.com'
}

const ComponenteApp = () => {
    console.log('Componente con Objeto');


    return (
<>
     <h1>Saludo desde un Functional Component's React</h1>
     <h5>Retorno multilinea de un componente</h5>
     <hr></hr>
     <p>Esta es una configuracion para un componente multilinea</p>
     <hr></hr>
     <p>Objeto Persona: {persona.nombre} {persona.apellido} </p>
     <p>Email: {persona.email}</p>
     <p>{JSON.stringify(persona, null, null)}</p>

</>
    );
}



export default ComponenteApp;
