function theme() {
  let body = document.querySelector("body");
  let sideBar = document.querySelector(".sidebar");
  let mode = document.querySelector("#light-dark").checked;
  if (mode) {
    body.classList.add("dark");
    sideBar.classList.add("night");
    body.classList.remove("light");
    sideBar.classList.remove("day");
  } else {
    body.classList.add("light");
    sideBar.classList.add("day");
    body.classList.remove("dark");
    sideBar.classList.remove("night");
  }
}
