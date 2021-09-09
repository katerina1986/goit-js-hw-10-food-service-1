import './sass/main.scss';
import menu from './menu.json';

import menuCard from './template/menu-list.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuList = document.querySelector('.js-menu');
const checkBodyTheme = document.body.classList;

function buildMenu(item) {
  return menuList.insertAdjacentHTML('beforeend', menuCard(item));
}
buildMenu(menu);

const input = document.querySelector('#theme-switch-toggle');
checkBodyTheme.add(
  localStorage.getItem('theme') === null
    ? Theme.LIGHT
    : localStorage.getItem('theme'),
);
if (checkBodyTheme.value === Theme.DARK) {
  input.checked = true;
}

function changeTheme(event) {
  if (event.target.checked) {
    checkBodyTheme.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    return;
  }
  checkBodyTheme.replace(Theme.DARK, Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}

input.addEventListener('change', changeTheme);
