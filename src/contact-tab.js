import vaneAndPercivalPng from "./images/contact/vane-and-percival.png";
import siegfriedAndLancelotPng from "./images/contact/siegfried-and-lancelot.png";

export default function loadContactTab() {
  const contentDiv = document.querySelector("#content");

  const contactUsHeader = document.createElement("h1");
  contactUsHeader.textContent = "Contact Us";
  contentDiv.appendChild(contactUsHeader);

  const contactImagesDiv = document.createElement("div");
  contactImagesDiv.classList.add("contact-images");
  const vaneAndPercivalImage = new Image();
  vaneAndPercivalImage.src = vaneAndPercivalPng;
  vaneAndPercivalImage.setAttribute(
    "alt",
    "A man with yellow hair wearing a beret, white t-shirt and black pants standing next to a man with red hair wearing a greyish-brown dress shirt and white pants"
  );
  const siegfriedAndLancelotImage = new Image();
  siegfriedAndLancelotImage.src = siegfriedAndLancelotPng;
  siegfriedAndLancelotImage.setAttribute(
    "alt",
    "A man with brown hair wearing a blueish chef jacket and black pants standing next to a man with black hair wearing a waiters outfit"
  );
  contactImagesDiv.appendChild(vaneAndPercivalImage);
  contactImagesDiv.appendChild(siegfriedAndLancelotImage);
  contentDiv.appendChild(contactImagesDiv);

  const contactParagraph = document.createElement("p");
  contactParagraph.textContent =
    "Have any questions, comments, or concerns? Contact us by calling 111-111-1111 or shoot us an email at dragonknights@notarealemail.com";
  contentDiv.appendChild(contactParagraph);
}
