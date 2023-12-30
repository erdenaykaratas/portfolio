function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  window.addEventListener("scroll", () => {
    const scrollPopup = document.querySelector(".scroll-popup");
    const scrollThreshold = 300; // Adjust this value based on your preference

    if (window.scrollY > scrollThreshold) {
      scrollPopup.classList.add("show");
    } else {
      scrollPopup.classList.remove("show");
    }
  });