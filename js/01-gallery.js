import { galleryItems } from './gallery-items.js';

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
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  evt.preventDefault();

  const onEscPress = evt => {
    if (evt.code === 'Escape') {
      instance.close();
    }
  };
  const instance = basicLightbox.create(
    `<img src = "${evt.target.dataset.source}"width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener('keydown', onEscPress);
      },
      onClose: () => {
        window.removeEventListener('keydown', onEscPress);
      },
    }
  );

  instance.show();
}

console.log(galleryItems);
