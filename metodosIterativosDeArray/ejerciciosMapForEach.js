  let persons = [
    {
      nombre: "Juan",
      apellidos: "García Pérez",
      edad: 30,
      correo: "juan.garcia@example.com",
    },
    {
      nombre: "María",
      apellidos: "Martínez López",
      edad: 25,
      correo: "maria.martinez@example.com",
    },
    {
      nombre: "Carlos",
      apellidos: "Rodríguez Gómez",
      edad: 28,
      correo: "carlos.rodriguez@example.com",
    },
    {
      nombre: "Ana",
      apellidos: "Hernández Ruiz",
      edad: 35,
      correo: "ana.hernandez@example.com",
    },
    {
      nombre: "Javier",
      apellidos: "Díaz Fernández",
      edad: 22,
      correo: "javier.diaz@example.com",
    },
  ];
  
  /*
  3.- usando el array persons, necesito una nueva lista que contenga únicamente los nombres completos de cada persona.
  4.- usando el array persons, necesito que los correos de todas las personas sean cambiados a {persona}@kodemia.mx
  */


 /*3*/ const personFor = (array) => {
    array.forEach((koder)=>{
        console.log(`${koder.nombre} ${koder.apellidos}`)
    })
  }

  personFor(persons) 
  
/*4*/ const newEmail = (array) => {
    let newArray = array.map((email)=>{
    return email.correo.replace("@example.com", "@kodemia.mx")
       }) 
    console.log(newArray)
}
  
newEmail(persons) 

