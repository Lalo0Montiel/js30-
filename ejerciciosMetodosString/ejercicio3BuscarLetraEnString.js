/* 3.- Crear una función que reciba un string, un caracter cualquiera, y me indique la
cantidad de veces que ese caracter se encuentra en el string
input => "Merengue", "e"
output => la letra "e" se usa 3 veces en la palabra "Merengue" */

const repeticionCaracter = (string , caracter) => {
    let expR = new RegExp (caracter,"g");
    if (expR.test(string) === true){
        arrayLetra = string.match(expR);
        longitud = arrayLetra.length;
        console.log(`La palabra ${string} aparece ${longitud} veces en la letra ${caracter}`)
    } else{console.log(`La letra ${caracter} no se encuentra en ${string}`)}
}

repeticionCaracter("Hola", "e")