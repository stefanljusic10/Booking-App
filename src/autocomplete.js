function autocomplete(inputText, arr1, arr2) {
  inputText.addEventListener("input", function (e) {
    let a, b, i, val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);

    for (i = 0; i < arr1.length; i++) {
      if (arr1[i].substr(0, val.length).toLowerCase() == val.toLowerCase()) {
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arr1[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr1[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr1[i] + "'>";
        b.addEventListener("click", function (e) {
          inputText.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
    for (i = 0; i < arr2.length; i++) {
      if (arr2[i].substr(0, val.length).toLowerCase() == val.toLowerCase()) {
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arr2[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr2[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr2[i] + "'>";
        b.addEventListener("click", function (e) {
          inputText.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });

  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inputText) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

  export default autocomplete;
