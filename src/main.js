import hotel from "./db.js";
import searchHotel from "./search.js"
import autocomplete from "./autocomplete.js";
import allHotelsList from "./hotelList.js";
import crE from "./createElem.js";
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
document.querySelector("body").addEventListener("click", function (e) {
  let i;
  if (e.target.classList.contains("book-button")){
    i = Number(e.target.id.replace("bookbtn", ""))
  } else { return }

  document.querySelector("#search-bar-form").style.display = "none";
  document.body.removeChild(document.querySelector("#show-hotels"));
  document.querySelector("#header-text").textContent = "Book your room";

  // kreiranje elemenata sa atributima
  let h1 = crE("h1", { class: "text" }, hotel[i].name);
  let imgPath = hotel[i].images[0];
  let imgFile = crE("img", { src: imgPath, style: "width: 70%" });
  let blockOfImages = crE("div", { class: "flex-block-images" });
  let hotelBlock = crE("div", { class: "hotel-block" }, [h1, imgFile, blockOfImages]);

  for (let j = 0; j < hotel[i].images.length; j++) {
    let image = crE("img",
      {
        id: `image${j}`,
        src: hotel[i].images[j],
        style: "width: 15%",
      });

    blockOfImages.appendChild(image);
  }

  blockOfImages.addEventListener("click", function (e) {
    imgFile.src = e.target.src;
  })

  document.body.appendChild(hotelBlock);
})
