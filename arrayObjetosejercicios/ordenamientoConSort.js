/* Necesito poder ordenar una lista de objetos que representen personas con base en su edad de forma descendente */

let peopleArray = [
    {
      Name: "Israel Salinas Martínez",
      Age: 34,
      Email: "israel@kodemia.mx",
    },
    {
      Name: "Naomi López Puertos",
      Age: 25,
      Email: "naomi@kodemia.mx",
    },
    {
      Name: "Charles Silva",
      Age: 28,
      Email: "charles@kodemia.mx",
    },
    {
      Name: "David Moranchel",
      Age: 29,
      Email: "david@kodemia.mx",
    }
  ];

  const ordenamientoArray = (array) => {
    let arrayOrdenado = array.sort((a,b)=> b.Age-a.Age)
    return arrayOrdenado
  }

  let prueba = ordenamientoArray(peopleArray);
  console.log(prueba)