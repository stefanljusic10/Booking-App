import hotel from "./db.js"

function showHotels(){
  let container = document.querySelector("#showhotels");
  let containerItems = document.createElement("div");
  let containerText = document.createElement("div");
  let imgFile = document.createElement("img");
  let imgPath = hotel[0].images[0];
  let h2 = document.createElement("h2");
  let bookBtn = document.createElement("button");

  containerItems.setAttribute("id", "hotel-container");
  containerItems.setAttribute("class", "flex-container-items");
  imgFile.setAttribute("src", imgPath);
  imgFile.setAttribute("width", "35%");
  h2.textContent = hotel[0].name;
  h2.setAttribute("class", "hotel-name");
  bookBtn.textContent = "Rezervisi";
  bookBtn.setAttribute("class", "book-button");

  // containerText se sastoji od imena hotela, broja slobodnih soba, prosecne cene za jednu noc, dugmeta za rezervaciju...
  containerText.appendChild(h2);
  containerText.appendChild(bookBtn);

  // containerItems se sastoji od dve komponente: imgFile i containerText
  containerItems.appendChild(imgFile);
  containerItems.appendChild(containerText);
  container.appendChild(containerItems);
}

/*

                                 container
____________________________________________________________________________
|                                   |                                      |
|                                   |                                      |
|                                   |                                      |
|              imgFile              |              containerText           |
|                                   |                                      |
|                                   |                                      |
|___________________________________|______________________________________|

*/

export default showHotels;
