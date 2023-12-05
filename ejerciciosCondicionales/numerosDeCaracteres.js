/* Crear una función que reciba un string, cuente la cantidad de caracteres que tiene, y si tiene menos de 10 caracteres, 
indique que el string es corto, si tiene 10 o más indique que el string es largo */

const stringLarge = (string) => {
    let numberString = string.length;
    if (numberString <= 10){
        console.log(`La palabra ${string} es un string corto ya que tiene 10 o menos caracteres`)
    } else {
        console.log(`La palabra ${string} es un string largo ya que tiene más de 10 caracteres`)
    }
}

stringLarge ("Laloooooooo")