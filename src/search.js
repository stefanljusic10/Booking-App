import hotel from "./db.js"

function searchHotel() {
  let searchText = document.querySelector("#input-text").value;
  let howManyPeople = document.querySelector("#people-number").value;
  // Datumi se ucitavaju i pretvaraju u objekte zbog konvertovanja u milisekunde
  let dIn = document.querySelector("#dateFrom").value;
  let dOut = document.querySelector("#dateTo").value;
  let dateCheckIn = new Date(dIn);
  let dateCheckOut = new Date(dOut);

  for (let i = 0; i < hotel.length; i++) {
    if (searchText.toLowerCase() === hotel[i].destination.toLowerCase()) {
      if (howManyPeople === "")
        howManyPeople = 0;

    }
    else if (searchText === "") {
      // iskopirati if blok
    }
    if (searchText.toLowerCase() === hotel[i].name.toLowerCase()) {
      // iskopirati if blok
    }
    else if (searchText === "") {
      // iskopirati if blok
    }
  }
}

export default searchHotel;
