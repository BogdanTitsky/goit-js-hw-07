import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

function createGalleryMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `;
        })
        .join('');
}

new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});
