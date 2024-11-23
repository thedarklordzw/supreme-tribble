import {
  animate,
  stagger,
} from 'https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm';

const mainElement = document.querySelector('.main');
const downloadButton = document.querySelector('.download');

const container = document.querySelector('.container');

animate(
  mainElement,
  { opacity: 1 },
  { duration: 0.5, delay: stagger(0.1), ease: 'circInOut' }
);

animate(
  container,
  { transform: 'translateY(0)' },
  { duration: 0.5, ease: 'circInOut' }
);

downloadButton.addEventListener('mouseover', () => {
  animate(
    downloadButton,
    { transform: 'scale(1.05)', backgroundColor: '#fff' },
    { duration: 0.25, ease: 'circInOut' }
  );
});
downloadButton.addEventListener('mouseout', () => {
  animate(
    downloadButton,
    { transform: 'scale(1)', backgroundColor: '#f89920' },
    { duration: 0.25, ease: 'circInOut' }
  );
});
