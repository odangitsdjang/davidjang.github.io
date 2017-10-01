import { scrollToTop, scrollTo } from './smooth';
export const NAVBAR_OFFSET = 42;
document.addEventListener('DOMContentLoaded', () => {
  const link1 = document.getElementById('link1');
  link1.addEventListener('click', (e) => {
    scrollTo(e.target.name);
  });

  const link2 = document.getElementById('link2');
  link2.addEventListener('click', (e) => {
    scrollTo(e.target.name);
  });

  const top = document.getElementById('top');
  top.addEventListener('click', scrollToTop);




  // scroll bar change css
  const navBar = document.getElementById('navbar');
  window.onscroll = function () {
    // add the offset of the pixel height to change color a little earlier
    if ( (window.scrollY + NAVBAR_OFFSET ) >= window.innerHeight ) {
        navBar.classList.add("colored");
        navBar.classList.remove("transparent");
    }
    else {
        navBar.classList.add("transparent");
        navBar.classList.remove("colored");
    }
  };

});
