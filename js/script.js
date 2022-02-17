document.addEventListener('DOMContentLoaded', function() {
  // TABS
  document.querySelectorAll('.work__tab').forEach( function(tab) {

    tab.addEventListener('click', function(e) {
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.work__tab').forEach(item => item.classList.remove('work__tab_active'));
      tab.classList.add('work__tab_active');

      document.querySelectorAll('.work__content').forEach(content =>
      content.classList.remove('work__content_active'));
      document.querySelector(`[data-target=${path}]`).classList.toggle('work__content_active');
    });

  });

  // SWIPER
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    speed: 800,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 5000,
    }




  });

  // BURGER

  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu');

  burger.addEventListener('click', function() {
    burger.classList.toggle('header__burger_active');
    menu.classList.toggle('header__menu_active');
  });

  // ACCORDION

  $( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content",
      collapsible: true,
      active: false
    });
  } );





});
