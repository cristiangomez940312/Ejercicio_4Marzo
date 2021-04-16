//Variables y constantes
console.log('Alcance de variables');

var variableGlobal = "Variable de alcance Global";
const varConstante = 'Constante durante ejecución';
let varLetlocal = 'ABC';
let varLetnumero = 1112;

console.log('Variable Global 1.'+variableGlobal);
console.log('Constante = '+varConstante);

{
    variableGlobal = 'otro valor';
    console.log('Variable Global 2. '+variableGlobal);
    let varLetlocal = 'XYZ';
    console.log('letLocal: '+varLetlocal)
    
}


let evaluacionif = true;
if (evaluacionif) {
    console.log('Adentro del IF');
    let letNumeroy = 11;
    let letNumerox = 76;

    console.log('Operación * = '+(letNumerox*letNumeroy));

}else{
    console.log('Estamos en el ELSE del if');

}

console.log('+-----------SELECTOR-----------+');
let letKey = 2;

switch (letKey) {
    case 1:
        console.log('Caso para 1');
        break;
    case 2:
        console.log('Caso para 2');
        break;
    default:
        console.log('Valor no determinado en el selector');
        break;
}