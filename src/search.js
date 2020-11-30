import hotel from "./db.js";
import hotelsList from "./hotelList.js";

function searchHotel() {
  document.querySelector("#show-hotels").style.display = "none";

  let searchText = document.querySelector("#input-text").value;
  let howManyPeople = document.querySelector("#people-number").value;
  // Datumi se ucitavaju i pretvaraju u objekte zbog konvertovanja u milisekunde
  // let dIn = document.querySelector("#dateFrom").value;
  // let dOut = document.querySelector("#dateTo").value;
  // let dateCheckIn = new Date(dIn);
  // let dateCheckOut = new Date(dOut);
  let x = document.querySelector("#show-hotels");
  while (x.firstChild) {
    x.removeChild(x.firstChild);
  }
  // for (let i = 0; i < hotel.length; i++) {
  //   if (searchText.toLowerCase() === hotel[i].destination.toLowerCase()) {
  //     if (howManyPeople === "")
  //       howManyPeople = 0;
  //     for (const key in hotel[i].room) {
  //       if (howManyPeople <= hotel[i].room[key].people) {
  //         hotelsList(i);
  //       }
  //     }
  //   }
  //   else if (searchText === "") {
  //     if (howManyPeople === "")
  //       howManyPeople = 0;
  //     for (const key in hotel[i].room) {
  //       if (howManyPeople <= hotel[i].room[key].people) {
  //         hotelsList(i);
  //       }
  //     }
  //   }
  //   if (searchText.toLowerCase() === hotel[i].name.toLowerCase()) {
  //     if (howManyPeople === "")
  //       howManyPeople = 0;
  //     for (const key in hotel[i].room) {
  //       if (howManyPeople <= hotel[i].room[key].people) {
  //         hotelsList(i);
  //       }
  //     }
  //   }
  //   else if (searchText === "") {
  //     if (howManyPeople === "")
  //       howManyPeople = 0;
  //     for (const key in hotel[i].room) {
  //       if (howManyPeople <= hotel[i].room[key].people) {
  //         hotelsList(i);
  //       }
  //     }
  //   }
  // }
}

export default searchHotel;
