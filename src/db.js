let hotel = [
  {
    name: "Tornik",
    destination: "Zlatibor",
    stars: 5,
    room: {

      // Ubaciti nekako slobodne/zauzete datume

      doubleRoom: {
        name: "Double room",
        beds: 1,
        people: 2,
        roomSize: "27m",
        price: 17000,
        availableRooms: 20
      },
      twinRoom: {
        name: "Twin room",
        beds: 2,
        people: 2,
        roomSize: "27m",
        price: 17000,
        availableRooms: 20
      },
      juniorSuite: {
        name: "Junior Suite",
        beds: 2,
        people: 4,
        roomSize: "32m",
        price: 22000,
        availableRooms: 15
      },
      standardApartment: {
        name: "Standard Apartment",
        beds: 3,
        people: 5,
        roomSize: "37m",
        price: 27000,
        availableRooms: 10
      },
      superiorApartment: {
        name: "Superior Apartment",
        beds: 4,
        people: 6,
        roomSize: "45m",
        price: 33000,
        availableRooms: 10
      },
      deluxeApartment: {
        name: "Deluxe Apartment",
        beds: 4,
        people: 8,
        roomSize: "52m",
        price: 40000,
        availableRooms: 10
      },
    },
    totalAvailableRooms() {
      return (
        this.room.doubleRoom.availableRooms +
        this.room.twinRoom.availableRooms +
        this.room.juniorSuite.availableRooms +
        this.room.standardApartment.availableRooms +
        this.room.superiorApartment.availableRooms +
        this.room.deluxeApartment.availableRooms
      )
    }
  },

]

export default hotel;
