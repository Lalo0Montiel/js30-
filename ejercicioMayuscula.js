/* let originalString = "Cuanto más hacemos, más podemos• hacer"
let secondOriginalString = "La única diferencia entre el éxito y el fracaso es la capacidad de actuar."
/*
1.- necesito obtener el mismo string (somestring) pero con todas las letras en mayúscula */

const mayusculas = (string) => {
    let stringMayus = string.toUpperCase();
    return console.log (stringMayus)
} 

mayusculas("Cuanto más hacemos, más podemos hacer")