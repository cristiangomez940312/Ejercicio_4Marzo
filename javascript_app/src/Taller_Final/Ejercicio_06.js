//Elaborar un programa que lea un número y determine si es primo//

const chalk = require('chalk');
const { stdout } = require('process');
const readline = require('readline');

let Captura = readline.createInterface({
    input: process.stdin,
    output:stdout
});

function Primo(numero){
    let cont = 0;
    let aux = 0;
    while (aux <= numero) {
        if (numero % aux == 0) {
            cont ++;
            
        }
        aux ++;
    }
    if (cont > 2) {
        cont = 'no es primo';
    } else {
        cont = 'es primo';
    }
  return cont;
};

Captura.question('Introduzca el número a analizar:\n', function(respuesta){
    console.log(chalk.bold.yellowBright(`El número ingresado :\n`,chalk.bold.cyan(Primo(respuesta))));
    Captura.close();
})

//C:\Users\Prueba>set | findstr USER
//ALLUSERSPROFILE=C:\ProgramData
//FPS_BROWSER_USER_PROFILE_STRING=Default
//USERDOMAIN=FELIPE
//USERDOMAIN_ROAMINGPROFILE=FELIPE
//USERNAME=Prueba
//USERPROFILE=C:\Users\Prueba