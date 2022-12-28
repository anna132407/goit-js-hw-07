import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const imagesList = document.querySelector('.gallery');

function createImagesMarkup ({preview, description}){
  return `<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}

const gallery = galleryItems.map(createImagesMarkup).join('');
imagesList.innerHTML = gallery;

let showGallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
