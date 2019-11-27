/* eslint-disable require-jsdoc */
$(document).ready(() => {
  $('.toogle-button').click(() => {
    animateCSS('.goods-card:nth-child(1)', 'fadeIn');
    animateCSS('.goods-card:nth-child(2)', 'fadeIn');
    animateCSS('.goods-card:nth-child(3)', 'fadeIn');
    $('.goods-cards').prepend($('.goods-card:last').detach());
  });

  $('.toogle-button').mousedown(() => {
    $('.toogle-button').addClass('toogle-button_push');
  });

  $('.toogle-button').mouseup(() => {
    $('.toogle-button').removeClass('toogle-button_push');
  });
});


function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element);
  node.classList.add('animated', animationName);

  function handleAnimationEnd() {
    node.classList.remove('animated', animationName);
    node.removeEventListener('animationend', handleAnimationEnd);

    if (typeof callback === 'function') callback();
  }

  node.addEventListener('animationend', handleAnimationEnd);
}
