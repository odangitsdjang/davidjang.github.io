import { scrollToTop, scrollTo } from './smooth';

document.addEventListener('DOMContentLoaded', () => {
  // var oLink = document.getElementById('link');
  var topLink = document.getElementById('top-link');
  // oLink.addEventListener('click', (link) => scrollTo(link) );
  topLink.addEventListener('click', (e) => {
    console.log("hi");
    e.preventDefault();
    scrollToTop();
  });

  // scroll bar change css
  var navBar = document.getElementById('navbar');
  window.onscroll = function () {
    console.log(window.scrollY);
    // add the offset of the pixel height to change color a little earlier
    if ( (window.scrollY + 32 ) >= window.innerHeight ) {
        navBar.classList.add("colored");
        navBar.classList.remove("transparent");
    }
    else {
        navBar.classList.add("transparent");
        navBar.classList.remove("colored");
    }
  };

});
