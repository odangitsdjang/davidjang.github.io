import { NAVBAR_OFFSET } from './entry';
// inspired from https://css-tricks.com/snippets/jquery/smooth-scrolling/

// scroll to top
export const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

// Scroll to a certain element
export const scrollTo = (element) => {
  console.log(`element is ${document}`);
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
  // window.scrollBy(0, -1 * NAVBAR_OFFSET );
};
