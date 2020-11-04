import hotel from "./db.js";
import searchHotel from "./search.js"
import autocomplete from "./autocomplete.js";
import allHotelsList from "./hotelList.js";
import viewHotel from "./viewHotel.js"
import { restrictPastDates, fixDateTo } from "./restrictDates.js";

localStorage.setItem("hotelArr", JSON.stringify(hotel));

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
document.querySelector("#search-btn").addEventListener("click", searchHotel);
document.querySelector("#dateFrom").addEventListener("input", fixDateTo);
document.querySelector("body").addEventListener("click", viewHotel);
