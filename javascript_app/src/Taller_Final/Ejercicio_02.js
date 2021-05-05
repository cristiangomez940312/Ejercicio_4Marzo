//Elaborar un programa que lea un número y determine la suma de sus digitos//

const chalk = require('chalk');
const { stdout } = require('process');
const readline = require('readline');

let Captura = readline.createInterface({
    input: process.stdin,
    output:stdout
});

function SumDigi(numero){
   let contador = 0;
   while (numero != 0) {
       contador = contador + (numero%10);
       numero = Math.floor( numero / 10);       
   }
   return Number(Math.floor(contador))
};

Captura.question('Introduzca el número al cual desea sumar sus digitos:\n', function(respuesta){
    console.log(chalk.bold.yellowBright(`La sumatoria total de los digitos del número que ingreso es:\n`,chalk.bold.cyan(SumDigi(respuesta))));
    Captura.close();
})

//C:\Users\Prueba>set | findstr USER
//ALLUSERSPROFILE=C:\ProgramData
//FPS_BROWSER_USER_PROFILE_STRING=Default
//USERDOMAIN=FELIPE
//USERDOMAIN_ROAMINGPROFILE=FELIPE
//USERNAME=Prueba
//USERPROFILE=C:\Users\Prueba