const chalk = require('chalk');
const vehiculo = {
    TamañoTanque: 50,
    KmLitro: 100,
    RadioLLanta: 10,
    Color: 'Magenta',
    Encendido: false,
    CantCombustible: 0,
    KmRecorridos: 0,
    CapacidadTanque: 100,
    Recorrido: 0,
    Aceleracion: 0,
    RecorridoFinal: 0,
    Encender (){
        if (this.CantCombustible >=2){
            this.Encendido = true;
            console.log(chalk.bold.cyan(`\nEl vehiculo esta encendido`));
        }
            else {
                console.log(chalk.bold.cyan(`\nEl vehiculo no cuenta con suficiente Combustible`));
            }
        
    },
    Apagar (){
        if (this.CantCombustible <= 0) {
            this.Encendido = false; 
            console.log(chalk.bold.cyan('\nEl vehiculo se apagó por falta de combustible'));
                    }
                    else {
                        console.log(chalk.bold.cyan('\nAún queda combustible'));
                    }

    },
    RecorridoRadio (){
        const pi = 3.1416;
        this.Recorrido = 2*pi*this.RadioLLanta;
        console.log(chalk.bold.red(`\nEl auto recorre ${this.Recorrido} m por giro` ));


    },
    Tanquear (){
        if (this.CantCombustible < this.CapacidadTanque) {
            this.CantCombustible += Math.random()*100;
            if (this.CantCombustible > this.CapacidadTanque) {
                this.CantCombustible = this.CapacidadTanque;
                console.log(chalk.bold.yellow('\nEl vehiculo se ha llenado de combustible en su totalidad'));
                
            }
            else{
                console.log(chalk.bold.white(`\nLitros nuevos de combustible:  ${this.CantCombustible}`));
            }
        } 
        
    },
    Acelerar (){
        if (this.CantCombustible > 0){
                    this.Aceleracion += Math.random()*10;
                    console.log(chalk.bold.magenta(`\nEl carro acelera a  ${this.Aceleracion} km/hora`))
                    while (this.CantCombustible > 0) {
                        console.log(chalk.bold.magentaBright(`\nQuedan ${this.CantCombustible} litros de combustible\n `)); 
                        this.CantCombustible -= this.Aceleracion;
                        this.RecorridoFinal += this.Aceleracion;
                        if (this.CantCombustible < 10) {
                            console.log(chalk.bold.whiteBright('Queda poco combustible\n'));
                                                    }
                         }
                    console.log(chalk.bold.redBright('\nEl tanque de gasolina esta vacio'));     
               }
               else {
                   console.log(chalk.bold.blueBright('\nPor favor llenar el tanque para acelerar'));
               }
}
}
vehiculo.RecorridoRadio();
vehiculo.Encender();
vehiculo.Tanquear();
vehiculo.Encender();
vehiculo.Acelerar();
vehiculo.Apagar();
console.log(chalk.bold.greenBright(`\n\nEl recorrido final del vehiculo es: ${vehiculo.RecorridoFinal} Kilometros\n`));