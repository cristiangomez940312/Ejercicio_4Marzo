console.log('+----------------Bucles--------------+');

let limiteBucle = 10;
let Contador =0;

console.log('+----------Bucle: Do While----------+');
do {
    Contador++;
    console.log('Contador:'+Contador);
} while (Contador < limiteBucle);

console.log('+----------Bucle: While----------+');
let letCondicion = true;
let Con2 =0;
let Acum =0;

while (letCondicion) {
    let letRandom = Math.random() *10; 
    console.log('Numero Randomico: '+letRandom);
    if (letRandom > 5){
        letCondicion = false;
        console.log('Salida del Bucle: '+letCondicion);
           }
           Acum=Acum+letRandom;
           Con2++;
   }
console.log('#Bucles: '+Con2);  
console.log('Total: '+Acum);  

console.log('+----------Bucle: For----------+');

let limitefor = 10;

for (let index = 0; index < limitefor; index++) {
    let randomfor = Number.parseInt((Math.random() *10),10);
    console.log('Conteo: '+index);
    console.log('Random: '+randomfor);
    
}