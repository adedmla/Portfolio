function toggleTheme() {
    const body = document.body;
    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
      document.getElementById("theme-toggle").innerHTML =
        '<i class="fa-regular fa-moon"></i>';
    } else {
      body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
      document.getElementById("theme-toggle").innerHTML =
        '<i class="fa-regular fa-sun"></i>';
    }
  }
  
  function toggleMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("active");
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-mode");
      document.getElementById("theme-toggle").innerHTML =
        '<i class="fa-regular fa-sun"></i>';
    }
  });
  