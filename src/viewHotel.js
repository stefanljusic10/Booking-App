import hotel from "./db.js";
import crE from "./createElement.js";
import { restrictPastDates, fixDateTo } from "./restrictDates.js";

function viewHotel(e) {
  document.querySelector("#search-bar-form").style.display = "none";
  document.body.removeChild(document.querySelector("#show-hotels"));
  document.querySelector("#header-text").textContent = "Book your room";

  let i;
  if (e.target.classList.contains("book-button")) {
    i = Number(e.target.id.replace("bookbtn", ""))
  } else { return }

  // kreiranje elemenata sa atributima
  let h1 = crE("h1", { class: "text" }, hotel[i].name);
  let imgPath = hotel[i].images[0];
  let imgFile = crE("img", { src: imgPath, style: "width: 70%" });
  let blockOfImages = crE("div", { class: "flex-block-images" });
  let optionRoom = crE("option", {}, "Choose room");
  let selectRoom = crE("select", { id: "select-room", class: "txt-num" }, optionRoom);
  let dateInLabel = crE("label", {class:"date-text"}, "Check in:");
  let dateOutLabel = crE("label", {class:"date-text"}, "Check out:");
  let dateIn = crE("input", { type: "date", id: "dateFrom", class: "date" });
  let dateOut = crE("input", { type: "date", id: "dateTo", class: "date" });
  // Uvesti restrict past dates
  let hotelBlock = crE("div", { class: "hotel-block" }, [h1, imgFile, blockOfImages, selectRoom, dateInLabel, dateIn, dateOutLabel, dateOut]);

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

  for (let roomType in hotel[i].room) {
    let x = hotel[i].room[roomType];
    selectRoom.options[selectRoom.options.length] = new Option(x.name + ` | ${x.people} people`, x.name);
  }

  document.body.appendChild(hotelBlock);
}

export default viewHotel;
