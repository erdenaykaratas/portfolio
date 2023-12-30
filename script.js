function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const scrollPopup = document.createElement("div");
  scrollPopup.className = "scroll-popup";
  scrollPopup.innerHTML = "Hello! Check out my awesome portfolio!";

  setTimeout(() => {
    scrollPopup.style.top = "20px"; // Adjust the top position based on your preference
    scrollPopup.style.left = "50%";
    scrollPopup.style.transform = "translateX(-50%)";
    scrollPopup.classList.add("show");
    document.body.appendChild(scrollPopup);

    setTimeout(() => {
      scrollPopup.classList.remove("show");
    }, 2000); // Adjust the time the pop-up stays visible
  }, 3000); // Adjust the delay before the pop-up appears
});