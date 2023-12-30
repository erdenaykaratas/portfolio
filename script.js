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

  window.addEventListener("scroll", () => {
    const scrollPopup = document.createElement("div");
    scrollPopup.className = "scroll-popup";
    scrollPopup.innerHTML = "Hello! Check out my awesome portfolio!";
    
    const scrollThresholds = [300, 600, 900]; // Adjust these values based on your preference
    
    scrollThresholds.forEach((threshold, index) => {
      if (window.scrollY > threshold && !scrollPopup.classList.contains(`show-${index}`)) {
        const randomPosition = Math.floor(Math.random() * (window.innerWidth - 200)); // Adjust 200 based on the pop-up's width
        scrollPopup.style.top = `${threshold}px`;
        scrollPopup.style.left = `${randomPosition}px`;
        scrollPopup.classList.add(`show-${index}`);
        document.body.appendChild(scrollPopup.cloneNode(true));

        setTimeout(() => {
          scrollPopup.classList.remove(`show-${index}`);
        }, 2000); // Adjust the time the pop-up stays visible
      }
    });
  });