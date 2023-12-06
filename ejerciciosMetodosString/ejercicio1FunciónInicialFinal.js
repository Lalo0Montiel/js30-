/* 1.- Crear una función que reciba un string, una posición inicial, una posición final,
y nos devuelva un nuevo string formado por los caracteres que se encuentren en las
posiciones indicadas
Input = "Regresamos a las sombras", 3, 8
output = "resam" */

const position = (string,pInicial,pFInal) => {
    nuevoString = string.substring(pInicial,pFInal)
    console.log(nuevoString)
}

position("Hola mundo", 0,5)