console.log('+----------------String Template--------------+');

const apellido  = 'Gomez';
let nombre = 'Felipe';

let variable = 11;

console.log('Señor  '+apellido+' su multiplicacion es: '+(variable*7));

let stringTemplate = 'STRING TEMPLATE:
Señor $(apellido)
su multiplicacion es: $( variable * 7)';

console.log(stringTemplate);
console.log(´Llamado a una funcion desde String Template ==>> ${fx_randomico('XYZ')}´);

function fx_randomico(parmstring) {
    return 'Numero Random ${Math.random() * 100} Parametro >>>> ${parmString}';
}