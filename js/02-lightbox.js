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
      <li>
      <div class="gallery">
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="" title="${description}"/>
</a>
</div>
      </li>
       `;
    })
    .join('');
}

function onImgClick(evt) {
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  evt.preventDefault();
  console.log('click');
  let lightbox = new SimpleLightbox('.gallery a', {
    captionPosition: 'bottom',
    captionDelay: 250,
  });
}
console.log(galleryItems);
