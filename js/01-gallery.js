import { galleryItems } from "./gallery-items.js";
const createGalleryItemMarkup = ({ preview, original, description }) => {
  return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
    </a>
  </div>
      `;
};

const createGalleryMarkup = galleryItems.map(createGalleryItemMarkup).join("");
const galleryElements = document.querySelector(".gallery");
galleryElements.insertAdjacentHTML("beforeend", createGalleryMarkup);
galleryElements.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  modalShow(event.target.dataset.source);
}
function modalShow(src) {
  const instance = basicLightbox.create(`<img src="${src}">`, {
    onShow: () => {
      window.addEventListener("keydown", onEscClick);
    },
    onClose: () => {
      window.removeEventListener("keydown", onEscClick);
    },
  });
  function onEscClick(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
  instance.show();
}
console.log(galleryItems);
