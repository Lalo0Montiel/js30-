/* 
2.- Crear una función que utilice el string "La mejor forma de predecir el futuro es
creándolo", y que reemplace todas las letras "e" por alguna otra letra indicada
input => "d"
output => "La mdjor forma dd prdddcir dl futuro ds crdándolo" */

const reemplazo = (frase, letraCambiar, letraIngresada) => {
    let nuevaFrase= frase.replace(letraCambiar,letraIngresada)
    console.log(nuevaFrase)
}

reemplazo("La mejor forma de predecir el futuro escreándolo", "e", "d")