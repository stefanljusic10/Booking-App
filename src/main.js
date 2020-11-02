import hotel from "./db.js";
import autocomplete from "./autocomplete.js";
import allHotelsList from "./list.js";
import { restrictPastDates, fixDateTo } from "./restrictDates.js";

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
        if (howManyPeople === "")
          howManyPeople = 0;
        if (hotel[i].room[roomType].people >= Number(howManyPeople)) {
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
                )
                  ++count;
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
allHotelsList();
document.querySelector("#search-btn").addEventListener("click", findHotel);
document.querySelector("#dateFrom").addEventListener("input", fixDateTo);
for (let i = 0; i < hotel.length; i++) {
  document.querySelector(`#bookbtn${i}`).addEventListener("click", function () {
    // search forma i lista hotela se skidaju sa stranice
    document.querySelector("#search-bar-form").style.display = "none";
    document.body.removeChild(document.querySelector("#show-hotels"));
    document.querySelector("#header-text").textContent = "Book your room"

    // forma za odabrani hotel
    let hotelBlock = document.createElement("div");
    let h1 = document.createElement("h1");
    let imgFile = document.createElement("img");
    let imgPath = hotel[i].images[0];

    hotelBlock.setAttribute("class", "hotel-block");
    h1.setAttribute("class", "text");
    h1.textContent = hotel[i].name;
    imgFile.setAttribute("src", imgPath);
    imgFile.setAttribute("alt", `${hotel[i].name}`);
    imgFile.setAttribute("class", "show-images"); // promeniti klasu, nije odgovarajuca

    hotelBlock.appendChild(h1);
    document.body.appendChild(hotelBlock);
  })
}

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
