import { setStorageData, getStorageData } from "./storageAPI";

// Toggle theme
export function setNightMode() {
  document
    .getElementById("toggleThemeBtn")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const isDarkMode = getStorageData("theme");
      if (isDarkMode) {
        setStorageData("theme", false);
        document.querySelector(".material-icons").textContent = 'dark_mode';
        document.querySelector(".logo").textContent = 'Wildberries';
      } else {
        setStorageData("theme", true);
        document.querySelector(".material-icons").textContent = 'wb_sunny';
        document.querySelector(".logo").textContent = 'Blueberries';
      }
      addDarkClass(isDarkMode);
    });
}

function addDarkClass(isDark) {
  const isDarkMode = isDark || getStorageData("theme");
  if (isDarkMode) {
    document.querySelector("html").classList.toggle("dark");
  }
}

addDarkClass();