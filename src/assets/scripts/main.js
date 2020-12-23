/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  console.log('Hello, UOC!');
})();

/**
 * Coutdown timer
 */
const countDownDate = new Date(2021, 1, 13, 12, 0).getTime();

const x = setInterval(function () {

  const now = new Date().getTime();
  const distance = countDownDate - now;

  const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distance % (1000 * 60)) / 1000);

  // document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  document.getElementById('dias').innerHTML = dias;
  document.getElementById('horas').innerHTML = horas;
  document.getElementById('minutos').innerHTML = minutos;
  document.getElementById('segundos').innerHTML = segundos;

  if (distance < 0) {
    clearInterval(x);
    document.getElementByIds('dias').innerHTML = 'EXPIRED';
    document.getElementByIds('horas').innerHTML = 'EXPIRED';
    document.getElementByIds('minutos').innerHTML = 'EXPIRED';
    document.getElementByIds('segundos').innerHTML = 'EXPIRED';
  }
}, 1000);