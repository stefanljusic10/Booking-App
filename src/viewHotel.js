import hotel from "./db.js";
import crE from "./createElement.js";

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
  for (let roomType in hotel[i].room){
    let newOption = crE("option", {}, hotel[i].room[roomType].name + " | " + hotel[i].room[roomType].people + " peoples");
    selectRoom.appendChild(newOption);
  }
  let hotelBlock = crE("div", { class: "hotel-block" }, [h1, imgFile, blockOfImages, selectRoom]);

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


  /////////////////////////////////////////////////////////////////

  document.body.appendChild(hotelBlock);
}

export default viewHotel;
