import './Modal.scss';
import videoSrc from '../../../assets/video/bachata.mp4';

export function Modal() {
  const overlay = document.createElement('div');
  overlay.classList.add('modal');

  overlay.innerHTML = `
    <button class="modal__close" aria-label="Закрыть">
      <span class="modal__close-line modal__close-line--1"></span>
      <span class="modal__close-line modal__close-line--2"></span>
    </button>
    <div class="modal__dialog">
      <video class="modal__video" src="${videoSrc}" controls></video>
    </div>
  `;

  const video = overlay.querySelector('.modal__video');

  const close = () => {
    overlay.classList.remove('modal--open');
    video.pause();
  };

  const open = () => {
    overlay.classList.add('modal--open');
    video.play();
  };

  overlay.querySelector('.modal__close').addEventListener('click', close);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  overlay.open = open;
  overlay.close = close;

  document.body.append(overlay);

  return overlay;
}
