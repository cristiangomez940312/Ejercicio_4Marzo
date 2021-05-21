import React, { useState } from 'react'

console.log('Componente Contador o Acumulador');

const ContadorApp = ({valor_contador}) =>{
    console.log('.:ContadoroApp:. ');

    const [contador, setcontador] = useState(valor_contador);

    const FunSum = () => {
        setcontador(contador + 1);
        console.log('Contador = ', contador);
    }

    const Reiniciar = () => {
        setcontador(valor_contador);
        console.log('Contador = ', contador);
    }

    const Restar = () => {
        setcontador(contador - 1);
        console.log('Contador = ', contador);
    }

    return (
        <>
             <h1>Contador Component´s React</h1>
             <h5>Acumulador de clicks</h5>
             <hr></hr>
             <h1>Contador = {contador} </h1>
             <hr></hr>
             <button onClick ={FunSum}>Sumar +1</button>
             <button onClick ={Reiniciar}>.:REINICIAR:.</button>
             <button onClick ={Restar}>.RESTAR -1.</button>
         </>
    );
}

export default ContadorApp;