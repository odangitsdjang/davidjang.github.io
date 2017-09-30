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
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
};

// // Scroll down 100 pixels
// window.scrollBy({
//   top: 100, // could be negative value which would mean scroll up
//   left: 0,
//   behavior: 'smooth'
// });
