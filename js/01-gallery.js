import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
    <li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>    
    </li>
    `;
        })
        .join('');
}

gallery.addEventListener('click', onClickGalleryItem);

function onClickGalleryItem(event) {
    event.preventDefault();

    const targetEl = event.target;

    if (targetEl.nodeName !== 'IMG') {
        return;
    }

    const imgSrc = targetEl.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${imgSrc}"/>
`);

    instance.show();

    document.addEventListener('keydown', onKeyDownESC);

    function onKeyDownESC(event) {
        if (event.code === 'Escape' && instance) {
            instance.close();
        }
    }
}
