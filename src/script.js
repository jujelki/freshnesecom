document.querySelector('.burger-menu').onclick = function() {
  document.querySelector('.burger-menu').classList.toggle("burger-menu--open");
  document.querySelector('.menu').classList.toggle('menu--active');
}

const menuItems = document.querySelectorAll('.menu__item');

for (let item of menuItems) {
  item.addEventListener('click', toOpen);
}

function toOpen(elem) {
  this.classList.toggle("is-open");
}

const btnToGrid = document.getElementById("view-grid");
const btnToList = document.getElementById("view-list");

btnToGrid.addEventListener('click', changeToGrid);
btnToList.addEventListener('click', changeToList);

function changeToGrid() {
  document.querySelector('.products').classList.remove('products--full');
  document.querySelector('.products').classList.add('products--compact');
}

function changeToList() {
  document.querySelector('.products').classList.remove('products--compact');
  document.querySelector('.products').classList.add('products--full');
}
