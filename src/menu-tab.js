import quichePng from "./images/menu/entrees/grandmas-drachentrout-quiche.png";
import patePng from "./images/menu/entrees/pate-de-campagne.png";
import fishPng from "./images/menu/entrees/demonbream-poele-with-special-sauce.png";
import chateaubriandPng from "./images/menu/entrees/chateaubrilliant-roast-with-fritters.png";
import guineafowlSoupPng from "./images/menu/soups/white-dragon-pennyfowl-vegetable-soup.png";
import creamOfMushroomSoupPng from "./images/menu/soups/black-dragon-cream-of-porcinido-soup.png";
import sorbetPng from "./images/menu/desserts/elemental-sorbet.png";
import flanPng from "./images/menu/desserts/rich-and-creamy-flan.png";
import coffeePng from "./images/menu/beverages/kopi-leol.png";
import teaPng from "./images/menu/beverages/rugosa-floral-tea.png";

export default function loadMenuTab() {
  const contentDiv = document.querySelector("#content");

  const menuHeader = document.createElement("h1");
  menuHeader.textContent = "Menu";
  contentDiv.appendChild(menuHeader);

  const entreeHeader = document.createElement("h2");
  entreeHeader.textContent = "Entrées";
  contentDiv.appendChild(entreeHeader);

  const entreesDiv = createEntreeDiv();
  contentDiv.appendChild(entreesDiv);

  const soupHeader = document.createElement("h2");
  soupHeader.textContent = "Soups";
  contentDiv.appendChild(soupHeader);

  const soupsDiv = createSoupDiv();
  contentDiv.appendChild(soupsDiv);

  const dessertHeader = document.createElement("h2");
  dessertHeader.textContent = "Desserts";
  contentDiv.appendChild(dessertHeader);

  const dessertsDiv = createDessertDiv();
  contentDiv.appendChild(dessertsDiv);

  const beverageHeader = document.createElement("h2");
  beverageHeader.textContent = "Beverages";
  contentDiv.appendChild(beverageHeader);

  const beveragesDiv = createBeverageDiv();
  contentDiv.appendChild(beveragesDiv);
}

function createEntreeDiv() {
  const entreesDiv = document.createElement("div");
  entreesDiv.classList.add("entrees");

  const quicheDiv = document.createElement("div");
  quicheDiv.classList.add("quiche");
  const quicheHeader = document.createElement("h3");
  quicheHeader.textContent = "Grandma's Drachentrout Quiche";
  quicheDiv.appendChild(quicheHeader);
  const quicheImage = new Image();
  quicheImage.src = quichePng;
  quicheImage.setAttribute("alt", "A plate with a slice of quiche");
  quicheDiv.appendChild(quicheImage);
  entreesDiv.appendChild(quicheDiv);

  const pateDiv = document.createElement("div");
  pateDiv.classList.add("pate");
  const pateHeader = document.createElement("h3");
  pateHeader.textContent = "Pate de Campagne";
  pateDiv.appendChild(pateHeader);
  const pateImage = new Image();
  pateImage.src = patePng;
  pateImage.setAttribute("alt", "A plate of pate de campagne");
  pateDiv.appendChild(pateImage);
  entreesDiv.appendChild(pateDiv);

  const fishDiv = document.createElement("div");
  fishDiv.classList.add("fish");
  const fishHeader = document.createElement("h3");
  fishHeader.textContent = "Demonbream Poele with Special Sauce";
  fishDiv.appendChild(fishHeader);
  const fishImage = new Image();
  fishImage.src = fishPng;
  fishImage.setAttribute(
    "alt",
    "Fish on a poele/pan with some sauce on the side"
  );
  fishDiv.appendChild(fishImage);
  entreesDiv.appendChild(fishDiv);

  const chateaubriandDiv = document.createElement("div");
  chateaubriandDiv.classList.add("chateaubriand");
  const chateaubriandHeader = document.createElement("h3");
  chateaubriandHeader.textContent = "Chateaubrilliant Roast with Fritters";
  chateaubriandDiv.appendChild(chateaubriandHeader);
  const chateaubriandImage = new Image();
  chateaubriandImage.src = chateaubriandPng;
  chateaubriandImage.setAttribute(
    "alt",
    "A tray of chateaubriand with fritters on the side"
  );
  chateaubriandDiv.appendChild(chateaubriandImage);
  entreesDiv.appendChild(chateaubriandDiv);

  return entreesDiv;
}

function createSoupDiv() {
  const soupsDiv = document.createElement("div");
  soupsDiv.classList.add("soups");

  const guineafowlSoupDiv = document.createElement("div");
  guineafowlSoupDiv.classList.add("guineafowl-soup");
  const guineafowlSoupHeader = document.createElement("h3");
  guineafowlSoupHeader.textContent = "White Dragon Pennyfowl Vegetable Soup";
  guineafowlSoupDiv.appendChild(guineafowlSoupHeader);
  const guineafowlSoupImage = new Image();
  guineafowlSoupImage.src = guineafowlSoupPng;
  guineafowlSoupImage.setAttribute(
    "alt",
    "A bowl of guineafowl vegetable soup"
  );
  guineafowlSoupDiv.appendChild(guineafowlSoupImage);
  soupsDiv.append(guineafowlSoupDiv);

  const creamOfMushroomSoupDiv = document.createElement("div");
  creamOfMushroomSoupDiv.classList.add("cream-of-mushroom-soup");
  const creamOfMushroomSoupHeader = document.createElement("h3");
  creamOfMushroomSoupHeader.textContent =
    "Black Dragon Cream of Porcinido Soup";
  creamOfMushroomSoupDiv.appendChild(creamOfMushroomSoupHeader);
  const creamOfMushroomSoupImage = new Image();
  creamOfMushroomSoupImage.src = creamOfMushroomSoupPng;
  creamOfMushroomSoupImage.setAttribute(
    "alt",
    "A bowl of cream of mushroom soup"
  );
  creamOfMushroomSoupDiv.append(creamOfMushroomSoupImage);
  soupsDiv.append(creamOfMushroomSoupDiv);

  return soupsDiv;
}

function createDessertDiv() {
  const dessertsDiv = document.createElement("div");
  dessertsDiv.classList.add("desserts");

  const sorbetDiv = document.createElement("div");
  sorbetDiv.classList.add("sorbet");
  const sorbetHeader = document.createElement("h3");
  sorbetHeader.textContent = "Elemental Sorbet";
  sorbetDiv.appendChild(sorbetHeader);
  const sorbetImage = new Image();
  sorbetImage.src = sorbetPng;
  sorbetImage.setAttribute(
    "alt",
    "A glass bowl of sorbet with fruits on the side and on the top"
  );
  sorbetDiv.appendChild(sorbetImage);
  dessertsDiv.appendChild(sorbetDiv);

  const flanDiv = document.createElement("div");
  flanDiv.classList.add("flan");
  const flanHeader = document.createElement("h3");
  flanHeader.textContent = "Rich and Creamy Flan";
  flanDiv.appendChild(flanHeader);
  const flanImage = new Image();
  flanImage.src = flanPng;
  flanImage.setAttribute("alt", "A tray with flan on it");
  flanDiv.appendChild(flanImage);
  dessertsDiv.appendChild(flanDiv);

  return dessertsDiv;
}

function createBeverageDiv() {
  const beveragesDiv = document.createElement("div");
  beveragesDiv.classList.add("beverages");

  const coffeeDiv = document.createElement("div");
  coffeeDiv.classList.add("coffee");
  const coffeeHeader = document.createElement("h3");
  coffeeHeader.textContent = "Kopi Leol";
  coffeeDiv.appendChild(coffeeHeader);
  const coffeeImage = new Image();
  coffeeImage.src = coffeePng;
  coffeeImage.setAttribute("alt", "A cup of Kopi luwak coffee");
  coffeeDiv.appendChild(coffeeImage);
  beveragesDiv.appendChild(coffeeDiv);

  const teaDiv = document.createElement("div");
  teaDiv.classList.add("tea");
  const teaHeader = document.createElement("h3");
  teaHeader.textContent = "Rugosa Floral Tea";
  teaDiv.appendChild(teaHeader);
  const teaImage = new Image();
  teaImage.src = teaPng;
  teaImage.setAttribute("alt", "A cup of floral tea");
  teaDiv.appendChild(teaImage);
  beveragesDiv.appendChild(teaDiv);

  return beveragesDiv;
}
