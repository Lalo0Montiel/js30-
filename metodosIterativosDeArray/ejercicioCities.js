let cities = [
    { ciudad: "Nueva York", pais: "Estados Unidos" },
    { ciudad: "Los Ángeles", pais: "Estados Unidos" },
    { ciudad: "Toronto", pais: "Canadá" },
    { ciudad: "Buenos Aires", pais: "Argentina" },
    { ciudad: "Sídney", pais: "Australia" },
    { ciudad: "Ciudad de México", pais: "México" },
    { ciudad: "Río de Janeiro", pais: "Brasil" },
    { ciudad: "Santiago", pais: "Chile" },
    { ciudad: "Lima", pais: "Perú" },
    { ciudad: "São Paulo", pais: "Brasil" },
    { ciudad: "Bogotá", pais: "Colombia" },
    { ciudad: "Miami", pais: "Estados Unidos" },
    { ciudad: "Ciudad de Panamá", pais: "Panamá" },
    { ciudad: "Madrid", pais: "España" },
    { ciudad: "París", pais: "Francia" },
    { ciudad: "Londres", pais: "Reino Unido" },
    { ciudad: "Tokio", pais: "Japón" },
    { ciudad: "Sídney", pais: "Australia" },
    { ciudad: "El Cairo", pais: "Egipto" },
    { ciudad: "Ciudad del Cabo", pais: "Sudáfrica" },
  ];

  /* 1.- Necesitamos imprimir en consola un texto por cada elemento del array, con la siguiente estructura:
  `La ciudad {ciudad} se encuentra en {pais}` */

  /* 2.- Necesito mostrar en pantalla los nombres de las ciudades, abreviados
  -si la ciudad tiene una sola palabra, mostramos los primeros 3 caracteres del nombre de la ciudad
      Sidney => Sid
  - si la ciudad tiene más de una palabra, mostramos las iniciales de cada palabra
      ciudad del cabo =>  C.D.C. */

  /*1 */const citieFor = (array) => {
    array.forEach((country)=>{
        console.log(`La ${country.ciudad} se encuentra en ${country.pais}`)
    })
  }

  citieFor(cities)