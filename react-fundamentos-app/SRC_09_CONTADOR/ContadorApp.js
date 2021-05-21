import React, { useState } from 'react'

console.log('Componente Contador o Acumulador');

const ContadorApp = ({valor_contador}) =>{
    console.log('.:ContadoroApp:. ');

    const [contador, setcontador] = useState(valor_contador);

    const contarClick = () => {
        setcontador(contador + 1);
        console.log('Contador = ', contador);
    }

    return (
        <>
             <h1>Contador Component´s React</h1>
             <h5>Acumulador de clicks</h5>
             <hr></hr>
             <h1>Contador = {contador} </h1>
             <hr></hr>
             <button onClick ={setcontador}>Contar +1</button>
         </>
    );
}

export default ContadorApp;