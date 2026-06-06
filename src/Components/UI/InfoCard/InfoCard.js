import './InfoCard.scss';
import iconSrc from '../../../assets/icons/rocket.png';

/**
 * @param {string} text — текст карточки
 * @returns {HTMLDivElement}
 */
export function InfoCard({ text = '' } = {}) {
  const el = document.createElement('div');
  el.classList.add('info-card');

  el.innerHTML = `
    <div class="info-card__icon">
      <img src="${iconSrc}" alt="" aria-hidden="true" />
    </div>
    <p class="info-card__text">${text}</p>
  `;

  return el;
}
