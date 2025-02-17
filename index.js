const titles = document.querySelectorAll(".title");

const isMultiple = document.querySelector("#is-multiple");

const handleClick = (event) => {
  Array.from(titles).forEach((title) => {
    if (title === event) {
      title.nextElementSibling.style.display =
        title.nextElementSibling.style.display === "block" ? "none" : "block";
      if (title.nextElementSibling.style.display === "block") {
        title.children[1].children[0].classList.replace("show", "hide")
        title.children[1].children[1].classList.replace("hide", "show");
      }
      if (title.nextElementSibling.style.display === "none") {
        title.children[1].children[0].classList.replace("hide", "show");
        title.children[1].children[1].classList.replace("show", "hide");
      }
    } else {
      if (!isMultiple.checked) {
        title.nextElementSibling.style.display = "none";
        title.children[1].children[0].classList.replace("hide","show");
        title.children[1].children[1].classList.replace("show","hide");
      }
    }
  });
};
