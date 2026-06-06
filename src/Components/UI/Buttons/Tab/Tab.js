import './Tab.scss';

/**
 * @param {string} text - текст кнопки
 * @param {string} [href] - якорная ссылка (опционально)
 * @returns {HTMLElement}
 */
export function Tab({ text = 'Самооценка', href = null } = {}) {
  const el = document.createElement(href ? 'a' : 'button');
  el.classList.add('tab');

  if (href) {
    el.href = href;
  }

  el.textContent = text;

  return el;
}
