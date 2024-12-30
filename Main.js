function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

window.onclick = function (event) {
  const menu = document.getElementById("dropdownMenu");
  if (!event.target.matches(".menu-icon")) {
    menu.style.display = "none";
  }
};
function toggleThread() {
  const threadContent = document.getElementById("threadContent");
  if (threadContent.style.display === "none") {
    threadContent.style.display = "block";
  } else {
    threadContent.style.display = "none";
  }
}
function toggleThread() {
  const threadContent = document.getElementById("threadContent");
  const arrow = document.getElementById("arrow");

  if (threadContent.style.display === "none") {
    threadContent.style.display = "block";
    arrow.classList.add("rotate");
    p;
  } else {
    threadContent.style.display = "none";
    arrow.classList.remove("rotate");
  }
}
function toggleSection(sectionId) {
  const content = document.getElementById(sectionId);
  const arrow = content.previousElementSibling.querySelector(".arrow");

  if (content.style.display === "block") {
    content.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
  } else {
    content.style.display = "block";
    arrow.style.transform = "rotate(180deg)";
  }
}

const storyboard = document.getElementById("storyboard");
const header = document.getElementById("header");

header.addEventListener("click", () => {
  storyboard.classList.toggle("open");
});
