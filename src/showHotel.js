import hotel from "./db.js";
import crE from "./createElement.js";

function show(counter) {
  let imgPath = hotel[counter].images[0];
  let imgFile = crE("img", { src: imgPath, alt: hotel[counter].name, class: "show-images" })
  let h2 = crE("h2", { class: "text" }, hotel[counter].name + " " + hotel[counter].stars + "\u2B50");
  let h3 = crE("h3", { class: "text" }, hotel[counter].destination);
  let averagePrice = crE("p", { class: "text" }, "Prosecna cena: " + averagePriceCalculator() + " rsd");
  let bookBtn = crE("button", { id: `bookbtn${counter}`, class: "book-button" }, "Book");
  // containerText se sastoji od imena hotela, broja zvezdica, destinacije, prosecne cene za jednu noc
  let containerText = crE("div", { class: "container-text" }, [h2, h3, averagePrice]);
  // containerItems se sastoji od dve komponente: imgFile i containerText
  let containerItems = crE("div", { class: "flex-container-items" }, [imgFile, containerText, bookBtn]);

  document.querySelector("#show-hotels").appendChild(containerItems)
  document.body.appendChild(document.querySelector("#show-hotels"));

  function averagePriceCalculator() {
    let totalPrice = 0;
    let countObj = Object.keys(hotel[counter].room).length;
    for (let roomType in hotel[counter].room) {
      totalPrice += hotel[counter].room[roomType].price;
    }
    return Math.floor(totalPrice / countObj).toFixed(2);
  }
}

export default show;
