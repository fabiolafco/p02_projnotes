/* eslint-disable no-console */

// Incorporando estilos a mi bundle
import './styles/mystyle.css';
/* Inicializando elementos de materializecss */
document.addEventListener('DOMContentLoaded', () => {
  // Obteniendo la referencia a la barra de navegacion
  // lateral
  const sideNavs = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sideNavs);
});

console.log('🎁Front-End Working!!!');

// Default parameters
const show = (m = '😝') => {
  console.log(m);
};
show();

// Promises
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('function resolve');
    }, 10000);
  });
}

async function asyncCall() {
  console.log('Calling async function!!!');
  const result = await resolveAfter2Seconds();
  console.log(result); // Imprime "function resolve" en la consola
}

asyncCall();
