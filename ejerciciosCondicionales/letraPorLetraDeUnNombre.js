/* Crear una función que escriba en consola letra por letra de un nombre */

const letra = (name) => {
    limit = name.length
    for (let i=0; i<limit; i++){
        console.log(name[i])
    }
}

letra ("Eduardo Montiel")