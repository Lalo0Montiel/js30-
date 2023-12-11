/* Necesito recibir el nombre completo, edad y correo de una persona, y devolver un objeto que contenga esa información.*/
const datosPerson = (completeName, age, emailAddress) => {
    const persona = {};
    persona.nombre=completeName;
    persona.edad=age;
    persona.email=emailAddress;
    return persona
}

let prueba = datosPerson("Eduardo Montiel", 27, "lalo@gmail.com")

console.log(prueba)