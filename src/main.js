import hotel from "./db.js";
import searchHotel from "./search.js";
import autocomplete from "./autocomplete.js";
import allHotelsList from "./hotelList.js";
import viewHotel from "./viewHotel.js";
import restrictPastDates from "./restrictDates.js";

localStorage.setItem("hotelArr", JSON.stringify(hotel));

let
  inpText = document.querySelector("#input-text"),
  destinationNames = [],
  hotelNames = [];

for (let i = 0; i < hotel.length; i++) {
  destinationNames.push(hotel[i].destination);
  hotelNames.push(hotel[i].name);
}

let dateFrom = document.querySelector("#dateFrom");
let dateTo = document.querySelector("#dateTo");
// pozivi funkcija i event listeneri
restrictPastDates(dateFrom, dateTo);
autocomplete(inpText, destinationNames, hotelNames);
allHotelsList();
document.querySelector("#search-btn").addEventListener("click", searchHotel);
for (let i = 0; i < hotel.length; i++) {
  document.querySelector(`#bookbtn${i}`).addEventListener("click", viewHotel);
}
