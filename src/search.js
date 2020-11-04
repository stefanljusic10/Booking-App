import hotel from "./db.js"

// Smisliti resenje za search bar
// Ovo je ???
function searchHotel() {
  let searchText = document.querySelector("#input-text").value;
  let howManyPeople = document.querySelector("#people-number").value;
  let dIn = document.querySelector("#dateFrom").value;
  let dOut = document.querySelector("#dateTo").value;
  // Datume pretvara u objekte zbog konvertovanja u milisekunde
  let dateCheckIn = new Date(dIn);
  let dateCheckOut = new Date(dOut);

  for (let i = 0; i < hotel.length; i++) {
    if (searchText.toLowerCase() === hotel[i].destination.toLowerCase()) {
      for (let roomType in hotel[i].room) {
        const room = hotel[i].room[roomType];
        if (howManyPeople === "")
          howManyPeople = 0;
        if (room.people >= Number(howManyPeople)) {
          // uslov za datume
          for (let i = 0; i < room.reservations.length; i++) {

            // Ne znam da li je potrebna ova for petlja
            for (let reserv in room.reservations) {
              let x = room.reservations[reserv];
              let count = 0;
              // Ispituje da li se uneseni datum rezervacije poklapa sa postojecim rezervacijama
              // count roji koliko puta se poklapa
              // dateFrom i dateTo su polja objekta, u njima se nalaze postojece rezervacije
              for (let i = 0; i < x.length; i++) {
                if (
                  dateCheckIn.getTime() < x[i].dateFrom.getTime() && dateCheckOut.getTime() > x[i].dateFrom.getTime() ||
                  dateCheckIn.getTime() < x[i].dateTo.getTime() && dateCheckOut.getTime() > x[i].dateTo.getTime() ||
                  dateCheckIn.getTime() < x[i].dateFrom.getTime() && dateCheckOut.getTime() > x[i].dateTo.getTime() ||
                  dateCheckIn.getTime() > x[i].dateFrom.getTime() && dateCheckOut.getTime() < x[i].dateTo.getTime()
                )
                  ++count;
              }
              if (count < room.totalRooms) {

              }
            }
          }
        }
      }
    }
    else if (searchText === "") {
      // iskopirati if blok
    }
    if (searchText.toLowerCase() === hotel[i].name.toLowerCase()) {
      // iskopirati if blok
    }
    else if (searchText === "") {
      // iskopirati if blok
    }
  }
}

export default searchHotel;
