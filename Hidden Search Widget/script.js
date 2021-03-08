const searchContainer = document.querySelector('.search-container');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  searchContainer.classList.toggle('active');
  input.focus();
});
