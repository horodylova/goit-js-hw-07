import { galleryItems } from './gallery-items.js';

//два варіанти вирішення завдання

const container = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                data-source="${original}" <!-- Добавьте атрибут data-source -->
            />
        </a>
    </li>
`).join("");

container.insertAdjacentHTML('beforeend', markup);

container.addEventListener('click', onClick);

function onClick(e) {
    e.preventDefault(); 

};


let lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
     captionDelay: 250,
     captionPosition: "bottom",
    
     });














// console.log(galleryItems);
// const galleryContainer = document.querySelector(".gallery");
// const itemsMarkup = createItemsMarkup(galleryItems);

// galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);

// function createItemsMarkup(items) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `<a class="gallery__item" href="${original}">
//             <img class="gallery__image" src="${preview}" 
//             alt="${description}" />
//         </a>`;
//     })
//     .join("");
// }

// galleryContainer.addEventListener("click", onImageClick);

// function onImageClick(evt) {
//   evt.preventDefault();
//   if (
//     evt.target.nodeName !== "IMG" &&
//     !document.querySelector(".basicLightbox ")
//   ) {
//     return;
//   }
//   const source = evt.target.dataset.source;

//   const instance = basicLightbox.create(`
//     <img src="${source} "width="800" height="600">`);

//   instance.show();

//   document.addEventListener("keydown", addKeyboardHandler);

//   function addKeyboardHandler(event) {
//     if (event.code === "Escape") {
//       instance.close();
//     }
//   }
// }

// let lightbox = new SimpleLightbox(".gallery a", {
//   captionsData: "alt",
//   captionDelay: 100,
//   captionType: "alt",
// });