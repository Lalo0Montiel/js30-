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


  const citieFor = (array) => {
    array.forEach((country)=>{
        console.log(`La ${country.ciudad} se encuentra en ${country.pais}`)
    })
  }

  citieFor(cities)
  