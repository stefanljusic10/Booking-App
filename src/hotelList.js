import hotel from "./db.js"

function allHotelsList() {
  for (let i = 0; i < hotel.length; i++) {
    let containerItems = document.createElement("div");
    let containerText = document.createElement("div");
    let imgFile = document.createElement("img");
    let imgPath = hotel[i].images[0];
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let averagePrice = document.createElement("p");
    let bookBtn = document.createElement("button");

    containerItems.setAttribute("class", "flex-container-items");
    imgFile.setAttribute("src", imgPath);
    imgFile.setAttribute("alt", `${hotel[i].name}`);
    imgFile.setAttribute("class", "show-images");
    containerText.setAttribute("class", "container-text")
    h2.textContent = hotel[i].name + " " + hotel[i].stars + "\u2B50";
    h2.setAttribute("class", "text");
    h3.textContent = hotel[i].destination;
    h3.setAttribute("class", "text");
    averagePrice.textContent = "Prosecna cena: " + averagePriceCalculator() + " rsd";
    averagePrice.setAttribute("class", "text");
    bookBtn.textContent = "Book";
    bookBtn.setAttribute("id", `bookbtn${i}`);
    bookBtn.setAttribute("class", "book-button");

    // containerText se sastoji od imena hotela, broja zvezdica, destinacije, prosecne cene za jednu noc
    containerText.appendChild(h2);
    containerText.appendChild(h3);
    containerText.appendChild(averagePrice);

    // containerItems se sastoji od dve komponente: imgFile i containerText
    containerItems.appendChild(imgFile);
    containerItems.appendChild(containerText);
    containerItems.appendChild(bookBtn);
    document.querySelector("#show-hotels").appendChild(containerItems)
    document.body.appendChild(document.querySelector("#show-hotels"));

    function averagePriceCalculator(){
      let totalPrice = 0;
      let counter = Object.keys(hotel[i].room).length;
      for (let roomType in hotel[i].room) {
        totalPrice += hotel[i].room[roomType].price;
      }
      return Math.floor(totalPrice / counter).toFixed(2);
    }

  }
}

/*
                                                  containerItems
___________________________________________________________________________________________________________________
|                                   |                                      |                                       |
|                                   |                                      |                                       |
|                                   |                                      |                                       |
|              imgFile              |              containerText           |              book button              |
|                                   |                                      |                                       |
|                                   |                                      |                                       |
|___________________________________|______________________________________|_______________________________________|

*/
/*
        containerItems:
          - imgFile
          - containerText:
            - h2
            - stars
            - averagePrice
          - bookBtn
*/


export default allHotelsList;
