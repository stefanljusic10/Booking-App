import hotel from "./db.js";
import autocomplete from "./autocomplete.js"
import showAllHotels from "./show.js"

localStorage.setItem("hotelArr", JSON.stringify(hotel));

function findHotel() {
  let searchText = document.querySelector("#input-text").value;

  for (let i = 0; i < hotel.length; i++) {
    if (searchText.toLowerCase() === hotel[i].destination.toLowerCase()) {
      numberOfPeople();
    }
    if (searchText.toLowerCase() === hotel[i].name.toLowerCase()) {
      numberOfPeople();
    }
  }
}

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

function restrictPastDates(){
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  ++month;
  let day = currentDate.getDate();
  let todayDate = year + '-' + month + '-' + day;
  document.querySelector("#dateFrom").setAttribute("min", `${todayDate}`);
}

let
  inpText = document.querySelector("#input-text"),
  destinationNames = [],
  hotelNames = [];

for (let i = 0; i < hotel.length; i++) {
  destinationNames.push(hotel[i].destination);
  hotelNames.push(hotel[i].name);
}

autocomplete(inpText, destinationNames, hotelNames);
restrictPastDates();
showAllHotels();
document.querySelector("#search-btn").addEventListener("click", findHotel);
document.querySelector("#dateFrom").addEventListener("input", function(){
  let dateFrom = document.querySelector("#dateFrom").value;
  document.querySelector("#dateTo").value = dateFrom;
  document.querySelector("#dateTo").setAttribute("min", `${dateFrom}`);
})

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
