import hotel from "./db.js"

function showAllHotels() {
  for (let i = 0; i < hotel.length; i++) {
    let containerItems = document.createElement("div");
    let containerText = document.createElement("div");
    let imgFile = document.createElement("img");
    let imgPath = hotel[i].images[0];
    let h2 = document.createElement("h2");
    let stars = document.createElement("p");
    let bookBtn = document.createElement("button");

    containerItems.setAttribute("class", "flex-container-items");
    imgFile.setAttribute("src", imgPath);
    imgFile.setAttribute("class", "show-images");
    containerText.setAttribute("class", "container-text")
    h2.textContent = hotel[i].name;
    h2.setAttribute("class", "text");
    stars.textContent = hotel[i].stars + " &#x2606";
    stars.setAttribute("class", "text")
    bookBtn.textContent = "Book";
    bookBtn.setAttribute("class", "book-button");

    // containerText se sastoji od imena hotela, broja slobodnih soba, prosecne cene za jednu noc, dugmeta za rezervaciju...
    containerText.appendChild(h2);
    containerText.appendChild(stars);
    containerText.appendChild(bookBtn);

    // containerItems se sastoji od dve komponente: imgFile i containerText
    containerItems.appendChild(imgFile);
    containerItems.appendChild(containerText);
    document.querySelector("#show-hotels").appendChild(containerItems)
    document.body.appendChild(document.querySelector("#show-hotels"));
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
