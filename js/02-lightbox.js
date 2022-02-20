import { galleryItems } from "./gallery-items.js";
// Change code below this line
const createGalleryItemMarkup = ({ preview, original, description }) => {
  return `
  <ul class="">
    <a class="gallery__item" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
    </a>
  </ul>
    `;
};

const createGalleryMarkup = galleryItems.map(createGalleryItemMarkup).join("");
const galleryElements = document.querySelector(".gallery");
galleryElements.insertAdjacentHTML("beforeend", createGalleryMarkup);

  /*инициализация библиотеки*/
const lightbox = new SimpleLightbox(".gallery a", {
  /* включаем отображение описания*/
  captions: true,
  /* описание берем из атрибута*/
  captionsData: "alt",
  /* задержка перед отображением подписи*/
  captionDelay: 250,
});
console.log(galleryItems);
