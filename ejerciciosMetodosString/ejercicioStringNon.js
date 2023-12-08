/*let originalString = "Cuanto más hacemos, más podemos hacer"
let secondOriginalString = "La única diferencia entre el éxito y el fracaso es la capacidad de actuar." */
/* 2.- necesito un nuevo string que contenga las palabras del string original que estén en
una posición non
- más más hacer */

const palabrasNon = (string) =>{
    let palabraImpar = "";
    let corte = string.split(" ")
    let large = corte.length;
    for (let i= 0; i<large; i++){
        if (i % 2 !== 0){
            let char = corte[i];
            palabraImpar += char + " ";
        }
        }
        console.log(palabraImpar)
}

palabrasNon("Cuanto más hacemos, más podemos hacer")