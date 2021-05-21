import React from 'react'

console.log('Componente Capturador de Evento en pantalla');

const ComponenteEventoApp = () =>{
    console.log('.:ComponenteEventoApp:. ');

    const eventoClick = (e) => {
        console.log(e);
    }

    return (
        <>
             <h1>Eventos Component´s React</h1>
             <h5>Capturador</h5>
             <hr></hr>
             <button onClick ={eventoClick}>Click Aqui!!</button>
         </>
    );
}

export default ComponenteEventoApp;