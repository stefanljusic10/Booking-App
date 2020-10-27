import hotel from "./db.js"

function showAllHotels() {
  for (let i = 0; i < hotel.length; i++) {
    let containerItems = document.createElement("div");
    let containerText = document.createElement("div");
    let imgFile = document.createElement("img");
    let imgPath = hotel[i].images[0];
    let h2 = document.createElement("h2");
    let bookBtn = document.createElement("button");

    containerItems.setAttribute("id", "hotel-container");
    containerItems.setAttribute("class", "flex-container-items");
    imgFile.setAttribute("src", imgPath);
    imgFile.setAttribute("class", "show-images");
    h2.textContent = hotel[i].name;
    h2.setAttribute("class", "hotel-name");
    bookBtn.textContent = "Book";
    bookBtn.setAttribute("class", "book-button");

    // containerText se sastoji od imena hotela, broja slobodnih soba, prosecne cene za jednu noc, dugmeta za rezervaciju...
    containerText.appendChild(h2);
    containerText.appendChild(bookBtn);

    // containerItems se sastoji od dve komponente: imgFile i containerText
    containerItems.appendChild(imgFile);
    containerItems.appendChild(containerText);
    document.body.appendChild(containerItems);
  }
}

/*
                             containerItems
____________________________________________________________________________
|                                   |                                      |
|                                   |                                      |
|                                   |                                      |
|              imgFile              |              containerText           |
|                                   |                                      |
|                                   |                                      |
|___________________________________|______________________________________|

*/

export default showAllHotels;
