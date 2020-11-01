import hotel from "./db.js";
import autocomplete from "./autocomplete.js"
import showAllHotels from "./show.js"

localStorage.setItem("hotelArr", JSON.stringify(hotel));

function findHotel() {
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
        if (hotel[i].room[roomType].people >= howManyPeople) {
          // uslov za datume
          for (let i = 0; i < hotel[i].room[roomType].reservations.length; i++) {

            // Ne znam da li je potrebna ova for petlja
            for (let reserv in hotel[i].room[roomType].reservations) {
              let x = hotel[i].room[roomType].reservations[reserv];
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
                ) {
                  ++count;
                }
              }
              if (count < hotel[i].room[roomType].totalRooms) {

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

function isAvailableReservation(checkIn, checkOut) {

}

/*
function numberOfPeople() {
  let howManyPeople = document.querySelector("#people-number").value;

  for (let i = 0; i < hotel.length; i++) {
    for (let roomType in hotel[i].room) {
      if (hotel[i].room[roomType].people >= howManyPeople) {
        console.log(hotel[i].name)
        console.log(hotel[i].room[roomType].name)
      }
    }
  }
}
*/

function restrictPastDates() {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  ++month;
  let day = currentDate.getDate();
  let todayDate = year + '-' + month + '-' + day;
  document.querySelector("#dateFrom").setAttribute("min", `${todayDate}`);
}

function fixDateTo() {
  let dateFrom = document.querySelector("#dateFrom").value;
  document.querySelector("#dateTo").value = dateFrom;
  document.querySelector("#dateTo").setAttribute("min", `${dateFrom}`);
}

let
  inpText = document.querySelector("#input-text"),
  destinationNames = [],
  hotelNames = [];

for (let i = 0; i < hotel.length; i++) {
  destinationNames.push(hotel[i].destination);
  hotelNames.push(hotel[i].name);
}


// pozivi funkcija i event listeneri
autocomplete(inpText, destinationNames, hotelNames);
restrictPastDates();
showAllHotels();
document.querySelector("#search-btn").addEventListener("click", findHotel);
document.querySelector("#dateFrom").addEventListener("input", fixDateTo);

/*
document.querySelector("#search-btn").addEventListener("click", function(e){
  e.preventDefault();
  let dFrom = document.querySelector("#dateFrom").value;
  let dTo = document.querySelector("#dateTo").value;
  hotel[0].room.doubleRoom.reservations[0].dateFrom = dFrom;
  hotel[0].room.doubleRoom.reservations[0].dateTo = dTo;
  localStorage.setItem("hotelArr", JSON.stringify(hotel));
})
*/
