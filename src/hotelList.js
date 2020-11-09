import hotel from "./db.js";
import crE from "./createElement.js"

function allHotelsList() {
  for (let i = 0; i < hotel.length; i++) {
    let imgPath = hotel[i].images[0];
    let imgFile = crE("img", { src: imgPath, alt: hotel[i].name, class: "show-images" })
    let h2 = crE("h2", { class: "text" }, hotel[i].name + " " + hotel[i].stars + "\u2B50");
    let h3 = crE("h3", { class: "text" }, hotel[i].destination);
    let averagePrice = crE("p", { class: "text" }, "Prosecna cena: " + averagePriceCalculator() + " rsd");
    let bookBtn = crE("button", { id: `bookbtn${i}`, class: "book-button" }, "Book");
    // containerText se sastoji od imena hotela, broja zvezdica, destinacije, prosecne cene za jednu noc
    let containerText = crE("div", { class: "container-text" }, [h2, h3, averagePrice]);
    // containerItems se sastoji od dve komponente: imgFile i containerText
    let containerItems = crE("div", { class: "flex-container-items" }, [imgFile, containerText, bookBtn]);

    document.querySelector("#show-hotels").appendChild(containerItems)
    document.body.appendChild(document.querySelector("#show-hotels"));

    function averagePriceCalculator() {
      let totalPrice = 0;
      let countObj = Object.keys(hotel[i].room).length;
      for (let roomType in hotel[i].room) {
        totalPrice += hotel[i].room[roomType].price;
      }
      return Math.floor(totalPrice / countObj).toFixed(2);
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
