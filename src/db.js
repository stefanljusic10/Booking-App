let hotel = [
  {
    name: "Hotel Tornik",
    destination: "Zlatibor",
    images: [
      './images/tornik.jpg',
      './images/tornik-bazen.jpg',
      './images/tornik-soba.jpg'
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
      },
      juniorSuite: {
        name: "Junior Suite",
        beds: 2,
        people: 4,
        roomSize: "32m",
        price: 22000,
        totalRooms: 15,
      },
      standardApartment: {
        name: "Standard Apartment",
        beds: 3,
        people: 5,
        roomSize: "37m",
        price: 27000,
        totalRooms: 10,
      },
      superiorApartment: {
        name: "Superior Apartment",
        beds: 4,
        people: 6,
        roomSize: "45m",
        price: 33000,
        totalRooms: 10,
      },
      deluxeApartment: {
        name: "Deluxe Apartment",
        beds: 4,
        people: 8,
        roomSize: "52m",
        price: 40000,
        totalRooms: 10,
      },
    },
  },

]

export default hotel;
