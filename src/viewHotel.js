import hotel from "./db.js";
import crE from "./createElement.js";
import dateDiffInDays from "./dateDifference.js";
import { rc, ac } from "./childFunc.js";
import restrictPastDates from "./restrictDates.js";

function viewHotel(e) {
  document.querySelector("#search-bar-form").style.display = "none";
  document.body.removeChild(document.querySelector("#show-hotels"));
  document.querySelector("#header-text").textContent = "Book your room";

  let i;
  if (e.target.classList.contains("book-button")) {
    i = Number(e.target.id.replace("bookbtn", ""))
  } else { return }

  // kreiranje elemenata sa atributima i appendChild
  let h1 = crE("h1", { class: "text" }, hotel[i].name);
  let imgPath = hotel[i].images[0];
  let imgFile = crE("img", { src: imgPath, style: "width: 70%" });
  let blockOfImages = crE("div", { class: "flex-block-images" });
  let optionRoom = crE("option", {}, "Choose room");
  let selectRoom = crE("select", { id: "select", class: "dropdown" }, optionRoom);
  let dateInText = crE("div", { class: "date-hotel" }, "Check in:");
  let dateOutText = crE("div", { class: "date-hotel" }, "Check out:");
  let dateIn = crE("input", { type: "date", id: "dateIn", class: "date" });
  let dateOut = crE("input", { type: "date", id: "dateOut", class: "date" });
  let btnContinue = crE("button", { id: "book-now", class: "book-continue" }, "Continue to booking");
  let hotelBlock = crE("div", { class: "hotel-block" },
    [h1, imgFile, blockOfImages, selectRoom, dateInText, dateIn, dateOutText, dateOut, btnContinue]);

  restrictPastDates(dateIn, dateOut);
  btnContinue.addEventListener("click", formValidation);

  function formValidation() {
    if (selectRoom.value === "Choose room") {
      alert("Please fill the form.");
      price.textContent = "Total price: ";
      btnContinue.removeEventListener("click", totalPriceCalculator);
    }
    else if (!dateIn.value) {
      alert("Please fill the form.");
      price.textContent = "Total price: ";
      btnContinue.removeEventListener("click", totalPriceCalculator);
    }
    else if (!dateOut.value) {
      alert("Please fill the form.");
      price.textContent = "Total price: ";
      btnContinue.removeEventListener("click", totalPriceCalculator);
    }
    else newForm();
  }

  function totalPriceCalculator() {
    let tempPrice;
    for (let roomName in hotel[i].room) {
      if (selectRoom.value === hotel[i].room[roomName].name)
        tempPrice = hotel[i].room[roomName].price;
    }
    return "Total price: " + (dateDiffInDays(dateIn, dateOut) * tempPrice).toFixed(2) + "rsd";
  }

  function newForm() {
    rc(hotelBlock, [selectRoom, dateInText, dateIn, dateOutText, dateOut, btnContinue]);

    let firstName = crE("input", { type: "text", class: "textbox", placeholder: "First name" });
    let lastName = crE("input", { type: "text", class: "textbox", placeholder: "Last name" });
    let price = crE("div", { id: "price-text" });
    let btnSubmit = crE("button", { class: "book-continue" }, "Submit");
    price.textContent = totalPriceCalculator();

    ac(hotelBlock, [firstName, lastName, price, btnSubmit]);
  }


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
