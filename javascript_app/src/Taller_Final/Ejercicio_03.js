//Elaborar un programa que lea un número y determine si es capicúa//

const chalk = require('chalk');
const { stdout } = require('process');
const readline = require('readline');

let Captura = readline.createInterface({
    input: process.stdin,
    output:stdout
});

function capicua(numero){
    let aux = Number(numero.split('').reverse().join('')) 
    return numero == aux ? "Es capicúa" : "No es capicúa"
};

Captura.question('Introduzca el número a determinar si es o no Capicúa :\n', function(respuesta){
    console.log(chalk.bold.yellowBright('El número',chalk.bold.cyan(capicua(respuesta))));
    Captura.close();
})

//C:\Users\Prueba>set | findstr USER
//ALLUSERSPROFILE=C:\ProgramData
//FPS_BROWSER_USER_PROFILE_STRING=Default
//USERDOMAIN=FELIPE
//USERDOMAIN_ROAMINGPROFILE=FELIPE
//USERNAME=Prueba
//USERPROFILE=C:\Users\Prueba