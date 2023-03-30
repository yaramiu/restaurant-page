import initializePageLoad from "./initialize-page-load.js";
import loadHomeTab from "./home-tab.js";
import loadMenuTab from "./menu-tab.js";
import loadContactTab from "./contact-tab.js";
import "./style.css";

function loadPage() {
  initializePageLoad();

  const homeTab = document.querySelector(".home");
  styleHomeTab(homeTab);
  homeTab.addEventListener("click", () => {
    clearTabContents();
    styleHomeTab(homeTab);
    loadHomeTab();
  });

  const menuTab = document.querySelector(".menu");
  menuTab.addEventListener("click", () => {
    clearTabContents();
    unstyleHomeTab(homeTab);
    loadMenuTab();
  });

  const contactTab = document.querySelector(".contact");
  contactTab.addEventListener("click", () => {
    clearTabContents();
    unstyleHomeTab(homeTab);
    loadContactTab();
  });
}

function clearTabContents() {
  const contentDiv = document.querySelector("#content");
  while (contentDiv.firstChild !== contentDiv.lastChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
}

function styleHomeTab(homeTab) {
  homeTab.style.backgroundColor = "darkblue";
}

function unstyleHomeTab(homeTab) {
  homeTab.style.backgroundColor = "lightblue";
}

loadPage();
