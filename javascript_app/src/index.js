console.log('+----------------Objetos--------------+');

const persona = {
    nombre: 'Cristian',
    apellidoPatreno: 'Gomez',
    apellidoMaterno: 'Parra',
    fechaNacimiento: '994-03-12',
    direccion: {
        viaPrincipal: 'Calle',
        numeroVia: '53',
        nombreVia: 'San Cristobal',
        placa: '12A-55',
        barrio: 'Libertadores',
        locacion: 'Sur Oriente',
        Amigos:{
            uno: 'Sisas',
            dos: 'Nocas',
            tres: 'lalala'
        }
    }
};

console.table(persona);

let otrapersona01 = {...persona}

otrapersona01.nombre = 'Loco'
otrapersona01.apellidoMaterno = 'Locancio'
otrapersona01.fechanacimiento = '2015-02-54'

console.log('+...........................+');
console.table(persona);
console.table(otrapersona01);

console.log('+----------------Objetos Dinamicos--------------+');

const personaDinamica = {
    nombre: 'Cristian',
    apellidoPatreno: 'Gomez',
    apellidoMaterno: 'Parra',
    fechaNacimiento: '994-03-12',
    direccion: {
        viaPrincipal: 'Calle',
        numeroVia: '53',
        nombreVia: 'San Cristobal',
        placa: '12A-55',
        barrio: 'Libertadores',
        locacion: 'Sur Oriente',
        Amigos:{
            uno: 'Carlos',
            dos: 'Lupita',
            tres: 'Pepito'
        }
    },
fxNombreCompleto(){
    console.log(`Mi nombre es ${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`);
},
fxTabularAtributos(){
    console.table(this);
}
};

let obj =(personaDinamica);

obj.nombre = 'LAURA'
obj.apellidoPaterno = 'SIERRA'
obj.fxNombreCompleto();
obj.fxTabularAtributos();

console.table(obj);

console.log('+...............FIN PROGRAMA............+');

