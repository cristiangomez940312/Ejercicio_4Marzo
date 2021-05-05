//Elaborar un programa que lea un número y lo imprima de forma inversa//

const chalk = require('chalk');
const { stdout } = require('process');
const readline = require('readline');

let Captura = readline.createInterface({
    input: process.stdin,
    output:stdout
});

function invertir(numero){
    return Number(numero.split('').reverse().join(''))
};

Captura.question('Introduzca el número que desea invertir:\n', function(respuesta){
    console.log(chalk.bold.yellowBright(`El inverso del número que ingreso es:\n`,chalk.bold.cyan(invertir(respuesta))));
    Captura.close();
})


//C:\Users\Prueba>set | findstr USER
//ALLUSERSPROFILE=C:\ProgramData
//FPS_BROWSER_USER_PROFILE_STRING=Default
//USERDOMAIN=FELIPE
//USERDOMAIN_ROAMINGPROFILE=FELIPE
//USERNAME=Prueba
//USERPROFILE=C:\Users\Prueba