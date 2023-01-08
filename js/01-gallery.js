import { galleryItems } from "./gallery-items.js";
// Change code below this line

const instanceLB = basicLightbox.create(
  `<img id="modalImg" src="./" loading="lazy">`
);

function escListening(e) {
  if (e.key === "Escape") {
    instanceLB.close(() => {
      document.body.removeEventListener("keydown", escListening);
    });
  }
}

const gallery = document.querySelector(".gallery");
const galleryContentHTML = galleryItems.reduce((str, img) => {
  return (str += `
        <div class="gallery__item">
            <a class="gallery__link" href=${img.original}>
                <img
                    class="gallery__image"
                    src=${img.preview}
                    data-source=${img.original}
                    alt="${img.description}"
                    loading="lazy"
                />
            </a>
        </div>
        `);
}, "");
gallery.insertAdjacentHTML("afterbegin", galleryContentHTML);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  
  instanceLB.element().querySelector("#modalImg").src =
    event.target.dataset.source;
  instanceLB.show(() => {
    document.body.addEventListener("keydown", escListening);
  });
});
