/* 3.- necesito saber cuántas palabras cortas hay en el string y cuántas palabras largas
las palabras cortas tienen menos de 5 caracteres, el resto son palabras largas

1. Voy a recibir algo, eso sería el parametro de mi función.
2. Como voy a contar las palabras de ese string, necesito dividir el string por palabras
3. Necesito recorrer todo el string que recibe para ir contando cuantas letras tiene cada palabra
4. Necesito dos variables, una que guarde los cortos y otra que guarde las largas
5. Para eso necesito saber la extención de cada palabra
6. Una vez que sepa la extensión debo preguntar si es mayor a 5 o menor a 5 y con base en eso guardarla en su lugar correspondiente
7. despues a cada variable que guarda las palabras, le debo sacar su extensión para contar cuantas palabras tiene
8. returnar el numero de palabras de cada variable.
*/

const numeroPalabras = (string) => {
    let palabrasLargas = 0;
    let palabrasCortas = 0;
    let corte = string.split(" ");
    let limit = corte.length
    for (let i = 0; i < limit; i++){
       let conteoPalabras = corte[i].length;
        if (conteoPalabras < 5) {
            palabrasCortas++ 
        } else {
            palabrasLargas++
        }
    }
    return `Tenemos ${palabrasCortas} palabras cortas y ${palabrasLargas} palabras largas`
}

let resultado = numeroPalabras("La única diferencia entre el éxito y el fracaso es la capacidad de actuar")
console.log(resultado)