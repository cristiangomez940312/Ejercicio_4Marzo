//Elaborar un programa que lea un número y determine el mayor de sus digitos//

const chalk = require('chalk');
const { stdout } = require('process');
const readline = require('readline');

let Captura = readline.createInterface({
    input: process.stdin,
    output:stdout
});

function Mayor(numero){
   let aux = numero%10;
   let aux2 = 0;
   numero = Math.floor( numero / 10);
   while (numero != 0) {
       aux2 = numero%10;
       if (aux >= aux2) {
           aux = aux;           
       } else {
           aux = aux2;
       } 
       numero = Math.floor( numero / 10);     
   }
   return Number(aux)
};

Captura.question('Introduzca el número a analizar:\n', function(respuesta){
    console.log(chalk.bold.yellowBright(`El digito mayor del número ingresado es:\n`,chalk.bold.cyan(Mayor(respuesta))));
    Captura.close();
})

//C:\Users\Prueba>set | findstr USER
//ALLUSERSPROFILE=C:\ProgramData
//FPS_BROWSER_USER_PROFILE_STRING=Default
//USERDOMAIN=FELIPE
//USERDOMAIN_ROAMINGPROFILE=FELIPE
//USERNAME=Prueba
//USERPROFILE=C:\Users\Prueba