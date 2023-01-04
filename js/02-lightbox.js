import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryContentHTML = galleryItems.reduce((str, img) => {
  return (str += `
        <a class="gallery__item" href=${img.original}>
            <img
                class="gallery__image"
                src=${img.preview}
                alt="${img.description}"
                loading="lazy"
            />
        </a>
        `);
}, "");
gallery.insertAdjacentHTML("afterbegin", galleryContentHTML);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
});

const lightbox = new SimpleLightbox(".gallery a", {
  docClose: false,
  animationSpeed: 250,
  captionSelector: "img",
  captionsData: "alt",
  captionDelay: 250
});
