import loadHomeTab from "./home-tab";

export default function initializePageLoad() {
  setupHeaderAndTabs();
  loadHomeTab();
}

function setupHeaderAndTabs() {
  const contentDiv = document.querySelector("#content");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const tabsDiv = document.createElement("div");
  tabsDiv.classList.add("tabs");

  const homeTab = document.createElement("button");
  homeTab.setAttribute("type", "button");
  homeTab.classList.add("home");
  homeTab.textContent = "Home";
  tabsDiv.appendChild(homeTab);

  const menuTab = document.createElement("button");
  menuTab.setAttribute("type", "button");
  menuTab.classList.add("menu");
  menuTab.textContent = "Menu";
  tabsDiv.appendChild(menuTab);

  const contactTab = document.createElement("button");
  contactTab.setAttribute("type", "button");
  contactTab.classList.add("contact");
  contactTab.textContent = "Contact";
  tabsDiv.appendChild(contactTab);

  headerDiv.appendChild(tabsDiv);

  contentDiv.append(headerDiv);
}
