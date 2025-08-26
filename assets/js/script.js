const form = document.querySelector("form");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (form.checkValidity()) {
    popup.style.display = "flex"; 
    form.reset(); 
  } else {
    form.reportValidity();
  }
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
