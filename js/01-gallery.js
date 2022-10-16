import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const imgMarkup = createGalleryImgMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', imgMarkup);
galleryRef.addEventListener('click', onImgClick);

function createGalleryImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</div>
    `;
    })
    .join('');
}

function onImgClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(`
	<img src = "${evt.target.dataset.source}"width="800" height="600">
`);
  instance.show();
  galleryRef.addEventListener('keydown', evt => {
    if (evt.code === 'Escape') {
      instance.close();
    }
  });
  console.log(evt.target);
}
console.log(galleryItems);
