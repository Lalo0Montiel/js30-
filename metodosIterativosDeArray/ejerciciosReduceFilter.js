let users = [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Wolf-Dietrich",
        last: "Wagener",
      },
      location: {
        street: {
          number: 1438,
          name: "Schlossstraße",
        },
        city: "Haan",
        state: "Sachsen-Anhalt",
        country: "Germany",
        postcode: 32033,
        coordinates: {
          latitude: "-54.1756",
          longitude: "-145.4598",
        },
        timezone: {
          offset: "-7:00",
          description: "Mountain Time (US & Canada)",
        },
      },
      nat: "DE",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Beau",
        last: "Wood",
      },
      location: {
        street: {
          number: 8431,
          name: "Bank Street",
        },
        city: "Napier",
        state: "Bay of Plenty",
        country: "New Zealand",
        postcode: 81114,
        coordinates: {
          latitude: "-31.4362",
          longitude: "85.5709",
        },
        timezone: {
          offset: "-11:00",
          description: "Midway Island, Samoa",
        },
      },
      nat: "NZ",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Harshil",
        last: "Pai",
      },
      location: {
        street: {
          number: 5851,
          name: "Pali Hill",
        },
        city: "Jamshedpur",
        state: "Chandigarh",
        country: "India",
        postcode: 27674,
        coordinates: {
          latitude: "68.7115",
          longitude: "132.2316",
        },
        timezone: {
          offset: "-8:00",
          description: "Pacific Time (US & Canada)",
        },
      },
      nat: "IN",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Harvey",
        last: "Martin",
      },
      location: {
        street: {
          number: 584,
          name: "Spring St",
        },
        city: "Adelaide",
        state: "Queensland",
        country: "Australia",
        postcode: 504,
        coordinates: {
          latitude: "-54.2917",
          longitude: "-13.3358",
        },
        timezone: {
          offset: "-2:00",
          description: "Mid-Atlantic",
        },
      },
      nat: "AU",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Afina",
        last: "Kotenko",
      },
      location: {
        street: {
          number: 6457,
          name: "Lirnicka",
        },
        city: "Kobelyaki",
        state: "Kiyivska",
        country: "Ukraine",
        postcode: 68278,
        coordinates: {
          latitude: "-61.3173",
          longitude: "-144.5075",
        },
        timezone: {
          offset: "-11:00",
          description: "Midway Island, Samoa",
        },
      },
      nat: "UA",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Arkadiy",
        last: "Ilkiv",
      },
      location: {
        street: {
          number: 6802,
          name: "Ivana Vigovskogo",
        },
        city: "Gorodenka",
        state: "Mikolayivska",
        country: "Ukraine",
        postcode: 61531,
        coordinates: {
          latitude: "39.2066",
          longitude: "-174.0962",
        },
        timezone: {
          offset: "-5:00",
          description: "Eastern Time (US & Canada), Bogota, Lima",
        },
      },
      nat: "UA",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Rosa",
        last: "Harrison",
      },
      location: {
        street: {
          number: 4667,
          name: "Samaritan Dr",
        },
        city: "Bunbury",
        state: "Western Australia",
        country: "Australia",
        postcode: 5506,
        coordinates: {
          latitude: "61.4834",
          longitude: "-141.3813",
        },
        timezone: {
          offset: "+5:30",
          description: "Bombay, Calcutta, Madras, New Delhi",
        },
      },
      nat: "AU",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Oscar",
        last: "Johansen",
      },
      location: {
        street: {
          number: 6563,
          name: "Haveforeningen Rønhøjgård",
        },
        city: "Sandved",
        state: "Sjælland",
        country: "Denmark",
        postcode: 63101,
        coordinates: {
          latitude: "24.1964",
          longitude: "-136.3415",
        },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      nat: "DK",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Tammy",
        last: "Stanley",
      },
      location: {
        street: {
          number: 1051,
          name: "Park Road",
        },
        city: "Swords",
        state: "Waterford",
        country: "Ireland",
        postcode: 24836,
        coordinates: {
          latitude: "-34.7118",
          longitude: "4.0445",
        },
        timezone: {
          offset: "+7:00",
          description: "Bangkok, Hanoi, Jakarta",
        },
      },
      nat: "IE",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Kerttu",
        last: "Ylitalo",
      },
      location: {
        street: {
          number: 9661,
          name: "Hämeentie",
        },
        city: "Kaskinen",
        state: "Satakunta",
        country: "Finland",
        postcode: 63053,
        coordinates: {
          latitude: "-5.7779",
          longitude: "81.8230",
        },
        timezone: {
          offset: "+11:00",
          description: "Magadan, Solomon Islands, New Caledonia",
        },
      },
      nat: "FI",
    },
  ];
  
  /*
      1.- Necesito poder obtener una nueva lista de usuarios basada en su género
      2.- Necesito una nueva lista con las nacionalidades de cada persona pero sin repetir
      */

    const genderList = (array,gender0) =>{
        let newListGender = array.filter((usuario)=>{
            let genero = usuario.gender;
            return genero === gender0
        }); console.log (newListGender)
    }

    genderList (users,"male")
    
    