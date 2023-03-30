import restaurantExteriorPng from "./images/main/bistro-feendrache-restaurant-exterior-daytime.png";

export default function loadHomeTab() {
  const contentDiv = document.querySelector("#content");

  const restaurantExteriorImage = new Image();
  restaurantExteriorImage.classList.add("exterior-image");
  restaurantExteriorImage.src = restaurantExteriorPng;
  restaurantExteriorImage.setAttribute(
    "alt",
    "Bistro Feendrache restaurant exterior during the daytime"
  );

  contentDiv.appendChild(restaurantExteriorImage);

  const restaurantNameHeader = document.createElement("h1");
  restaurantNameHeader.textContent = "Bistro Feendrache";

  contentDiv.appendChild(restaurantNameHeader);

  const messageParagraph = document.createElement("p");
  messageParagraph.textContent =
    "Welcome to the homepage of the newly renovated Bistro Feendrache. " +
    "Our elegant and delicious dishes along with our cozy environment are sure to make your dining experience worthwhile. " +
    "Stop by today!";

  contentDiv.appendChild(messageParagraph);
}
