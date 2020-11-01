let hotel = [
  {
    name: "Hotel Tornik",
    destination: "Zlatibor",
    images: [
      './images/tornik0.jpg',
      './images/tornik1.jpg',
      './images/tornik2.jpg',
      './images/tornik3.jpg',
      './images/tornik4.jpg',
    ],
    stars: 5,
    room: {

      // Ubaciti nekako slobodne/zauzete datume

      doubleRoom: {
        name: "Double room",
        beds: 1,
        people: 2,
        roomSize: "27m",
        price: 17000,
        totalRooms: 20,
        reservations: [{}]
      },
      twinRoom: {
        name: "Twin room",
        beds: 2,
        people: 2,
        roomSize: "27m",
        price: 17000,
        totalRooms: 20,
        reservations: [{}]

      },
      juniorSuite: {
        name: "Junior Suite",
        beds: 2,
        people: 4,
        roomSize: "32m",
        price: 22000,
        totalRooms: 15,
        reservations: [{}]
      },
      standardApartment: {
        name: "Standard Apartment",
        beds: 3,
        people: 5,
        roomSize: "37m",
        price: 27000,
        totalRooms: 10,
        reservations: [{}]
      },
      superiorApartment: {
        name: "Superior Apartment",
        beds: 4,
        people: 6,
        roomSize: "45m",
        price: 33000,
        totalRooms: 10,
        reservations: [{}]
      },
      deluxeApartment: {
        name: "Deluxe Apartment",
        beds: 4,
        people: 8,
        roomSize: "52m",
        price: 40000,
        totalRooms: 10,
        reservations: [{}]
      },
    },
  },
  {
    name: "Hotel Moskva",
    destination: "Beograd",
    images: [
      './images/moskva0.jpg',
      './images/moskva1.jpg',
      './images/moskva2.jpg',
      './images/moskva3.jpg',
      './images/moskva4.jpg',
    ],
    stars: 4,
    room: {

      // Ubaciti nekako slobodne/zauzete datume

      doubleRoom: {
        name: "Double room",
        beds: 1,
        people: 2,
        roomSize: "27m",
        price: 23000,
        totalRooms: 30,
        reservations: [{}]
      },
      twinRoom: {
        name: "Twin room",
        beds: 2,
        people: 2,
        roomSize: "27m",
        price: 20000,
        totalRooms: 25,
        reservations: [{}]
      },
      juniorSuite: {
        name: "Junior Suite",
        beds: 2,
        people: 4,
        roomSize: "32m",
        price: 14000,
        totalRooms: 10,
        reservations: [{}]
      },
      standardApartment: {
        name: "Standard Apartment",
        beds: 3,
        people: 5,
        roomSize: "37m",
        price: 38000,
        totalRooms: 10,
        reservations: [{}]
      },
      superiorApartment: {
        name: "Superior Apartment",
        beds: 4,
        people: 6,
        roomSize: "45m",
        price: 45000,
        totalRooms: 10,
        reservations: [{}]
      },
      deluxeApartment: {
        name: "Deluxe Apartment",
        beds: 4,
        people: 8,
        roomSize: "52m",
        price: 52000,
        totalRooms: 8,
        reservations: [{}]
      },
    },
  },
  {
    name: "Gorski Hotel & Spa",
    destination: "Kopaonik",
    images: [
      './images/gorski0.jpg',
      './images/gorski1.jpg',
      './images/gorski2.jpg',
      './images/gorski3.jpg',
      './images/gorski4.jpg',
    ],
    stars: 4.5,
    room: {

      // Ubaciti nekako slobodne/zauzete datume

      doubleRoom: {
        name: "Double room",
        beds: 1,
        people: 2,
        roomSize: "27m",
        price: 20000,
        totalRooms: 15,
        reservations: [{}]
      },
      twinRoom: {
        name: "Twin room",
        beds: 2,
        people: 2,
        roomSize: "27m",
        price: 22000,
        totalRooms: 20,
        reservations: [{}]
      },
      juniorSuite: {
        name: "Junior Suite",
        beds: 2,
        people: 4,
        roomSize: "32m",
        price: 10000,
        totalRooms: 15,
        reservations: [{}]
      },
      standardApartment: {
        name: "Standard Apartment",
        beds: 3,
        people: 5,
        roomSize: "37m",
        price: 30000,
        totalRooms: 10,
        reservations: [{}]
      },
      superiorApartment: {
        name: "Superior Apartment",
        beds: 4,
        people: 6,
        roomSize: "45m",
        price: 32000,
        totalRooms: 10,
        reservations: [{}]
      },
      deluxeApartment: {
        name: "Deluxe Apartment",
        beds: 4,
        people: 8,
        roomSize: "52m",
        price: 38000,
        totalRooms: 5,
        reservations: [{}]
      },
    },
  },
]

export default hotel;
