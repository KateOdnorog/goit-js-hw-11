import findImages from './js/pixabay-api.js';
import createHTML from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  btnSearch: document.querySelector('.btn-search'),
  input: document.querySelector('.input-field'),
  loader: document.querySelector('.loader'),
  gallery: document.querySelector('.gallery'),
};

refs.loader.classList.add('hidden');

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const searchText = refs.input.value;

  if (searchText === '') {
    return iziToast.error({
      position: 'topRight',
      title: 'ERROR',
      message: 'You have not specified any search parameters.',
    });
  }

  refs.loader.classList.remove('hidden');

  findImages(searchText)
    .then(data => {
      refs.gallery.innerHTML = '';
      createHTML(data.data.hits);
    })
    .catch(err => {
      iziToast.error({
        title: 'ERROR',
        message: `Sorry, there are no images matching your search query. Please try again!`,
        position: 'topRight',
      });
    });

  e.target.reset();
}
