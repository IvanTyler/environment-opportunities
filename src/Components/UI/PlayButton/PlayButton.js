import './PlayButton.scss';
import playWhite from '../../../assets/icons/play-white.svg';
import playRed from '../../../assets/icons/play-red.svg';

/**
 * @param {string}   ariaLabel — доступность
 * @param {Function} onClick   — обработчик клика
 * @returns {HTMLButtonElement}
 */
export function PlayButton({ ariaLabel = 'Воспроизвести', onClick = null } = {}) {
  const el = document.createElement('button');
  el.classList.add('play-button');
  el.setAttribute('aria-label', ariaLabel);

  el.innerHTML = `
    <img class="play-button__icon play-button__icon--white" src="${playWhite}" alt="" aria-hidden="true" />
    <img class="play-button__icon play-button__icon--red"   src="${playRed}"   alt="" aria-hidden="true" />
  `;

  if (onClick) {
    el.addEventListener('click', onClick);
  }

  return el;
}
