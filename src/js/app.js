import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    const image = document.querySelector("div.image")
    image.style.transform = "scale(2)"
    alert("💣");
  });
});
