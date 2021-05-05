//Elaborar un programa que lea un número y un digito y determine si el digito esta dentro del número//
const chalk = require('chalk');
const { stdout } = require('process');
const readline = require('readline');

let Captura = readline.createInterface({
    input: process.stdin,
    output:stdout
});

function Comparar(numero,numero2){
    let aux = 0;
    while (numero != 0) {
       aux = numero%10;
       if (numero2 == aux) {
        numero = 0;
        aux = 0;}
       else {
            aux = 1;
            numero = Math.floor( numero / 10); }
       }
   if (aux == 1) {
   aux = 'No esta'
   }
   else {
    aux = 'Si esta'
   }
   return aux;
};

Captura.question('\nIntroduzca un número:\n', function(respuesta){
Captura.question('Introduzca un digito:\n', function(respuesta2) {
    console.log(chalk.bold.yellowBright(`\nEl digito `,chalk.bold.cyan(Comparar(respuesta,respuesta2)),' dentro del número ingresado'));
    Captura.close();
})})

//C:\Users\Prueba>set | findstr USER
//ALLUSERSPROFILE=C:\ProgramData
//FPS_BROWSER_USER_PROFILE_STRING=Default
//USERDOMAIN=FELIPE
//USERDOMAIN_ROAMINGPROFILE=FELIPE
//USERNAME=Prueba
//USERPROFILE=C:\Users\Prueba