import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const photo = galleryItems
  .map(
    (galleryItem) =>
      `<div class="gallery__item"> <a class="gallery__link" href="${galleryItem.original}"> <img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a> </div>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", photo);

const keyClose = (event, instance) => {
  if ("Escape" === event.key) {
    instance.close();
  }
};

const images = document.querySelectorAll(".gallery__item .gallery__image");
console.log(images);
images.forEach((image) => {
  image.addEventListener("click", (event) => {
    event.preventDefault();

    basicLightbox
      .create(
        `<img width="1400" height="900" src="${image.dataset.source}" loading="lazy" alt="${image.alt}">`,
        {
          onClose: (instance) => {
            gallery.removeEventListener("keydown", (e) =>
              keyClose(e, instance)
            );
            return true;
          },
          onShow: (instance) => {
            gallery.addEventListener("keydown", (e) => keyClose(e, instance));
            return true;
          },
        }
      )
      .show();
  });
});
