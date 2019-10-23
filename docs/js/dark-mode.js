//this will enable a dark mode feature in the app
  var nightModeToggleButton = document.querySelector(".nightmode");
  car h1 = document.querySelector("h1");
  var row = document.querySelector(".row-parent");
  var body = document.querySelector("body");

  nightModeToggleButton.onclick = function () {
    nightModeToggleButton.classList.toggle("night-mode");
    body.classList.toggle("night-mode");
    row.classList.toggle("night-mode");
    h1.classList.toggle("night-mode");
  };
