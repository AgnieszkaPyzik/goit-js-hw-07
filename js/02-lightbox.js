import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
console.log(gallery);

const photo = galleryItems
  .map(
    (galleryItem) =>
      `<a class="gallery__item" href="${galleryItem.original}"> <img class="gallery__image" src="${galleryItem.preview}" data-caption="${galleryItem.description}" alt="${galleryItem.description}" loading="lazy"/></a>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", photo);
console.log(photo);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(lightbox);
