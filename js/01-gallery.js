import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imagesList = document.querySelector('.gallery');

function createImagesMarkup ({preview, original,description}){
  return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}

const gallery = galleryItems.map(createImagesMarkup).join('');
imagesList.innerHTML = gallery;
let instance;

function onImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
  instance.element().querySelector('img').src = event.target.dataset.source;
    instance.show();

    
};

function onEscapeBtnClick(event) {
        if (event.code === 'Escape') {
          instance.close();
          return;
        }
};

gallery.addEventListener('click', onImageClick);

instance = basicLightbox.create(`
    <img class="gallery__image" src="" width="1280" height="853">
    `,
  {
      show: instance => { window.addEventListener('keydown', onEscapeBtnClick) }
,
      close: instance => { window.removeEventListener('keydown', onEscapeBtnClick) },
  }
);