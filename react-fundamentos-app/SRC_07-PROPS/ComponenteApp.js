import React from 'react'


const persona = {
    nombre: 'Cristian',
    apellido: 'Gomez',
    email: 'Cristian@gmail.com'
}

const ComponenteApp = (props) => {
    console.log('Componente PARAMETROS props');
    console.log('parametro 1: ', props.parm01);
    console.log('parametro 2: ', props.parm02);
    console.log('parametro 3: ', props.parm03);


    return (
<>
     <h1>Parametros en un Component´s React</h1>
     <h5>Multiparametros</h5>
     <hr></hr>
     <p>Parametro 01 = {props.parm01}</p>
     <p>Parametro 02 = {props.parm02}</p>
     <p>Parametro 03 = {props.parm03}</p>
     <hr></hr>
     <p>{JSON.stringify(persona, null, null)}</p>

</>
    );
}

ComponenteApp.defaultProps = {
    parm03: 'SIN VALORES'
}

export default ComponenteApp;
