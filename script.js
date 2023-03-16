const elementclose = document.getElementsByClassName("overlay");

let i = 0;
elementclose[i].addEventListener("click", function () {
  let url = window.location.href.substr(0, window.location.href.indexOf("#"));
  window.location = url;
});
