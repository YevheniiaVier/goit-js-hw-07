import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const imgMarkup = createGalleryImgMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', imgMarkup);
galleryRef.addEventListener('click', onImgGalleryClick);

function createGalleryImgMarkup(galleryItems) {
  const markup = galleryItems
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
  return markup;
}

// function onImgGalleryClick(evt) {
//   if (!evt.target.classList.contains('gallery__image')) {
//     return;
//   }
//   console.log(evt.target);
// }
// console.log(galleryItems);
