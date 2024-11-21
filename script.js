import {
  animate,
  scroll,
  stagger,
} from 'https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm';

const mainElement = document.querySelector('.main');
const downloadButton = document.querySelector('.download');

animate(
  mainElement,
  { opacity: 1, transform: 'translateY(0)' },
  { duration: 0.5, delay: stagger(0.1), ease: 'circInOut' }
);

downloadButton.addEventListener('mouseover', () => {
  animate(
    downloadButton,
    { transform: 'scale(1.05)', backgroundColor: '#fca311' },
    { duration: 0.25, ease: 'circInOut' }
  );
});
downloadButton.addEventListener('mouseout', () => {
  animate(
    downloadButton,
    { transform: 'scale(1)', backgroundColor: '#03045e' },
    { duration: 0.25, ease: 'circInOut' }
  );
});

downloadButton.addEventListener('click', () => {
  animate(
    mainElement,
    { transform: 'translateY(-250)', opacity: 0 },
    { duration: 0.5, delay: stagger(0.1), ease: 'circInOut' }
  );
});
