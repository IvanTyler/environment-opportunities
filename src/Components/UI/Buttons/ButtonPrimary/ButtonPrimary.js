import './ButtonPrimary.scss';

/**
 * @param {string}   text       — текст кнопки
 * @param {boolean}  disabled   — состояние disabled
 * @param {Function} onClick    — обработчик клика
 * @returns {HTMLButtonElement}
 */
export function ButtonPrimary({ text = 'Пройти оценку', disabled = false, onClick = null } = {}) {
  const el = document.createElement('button');
  el.classList.add('btn-primary');

  if (disabled) {
    el.classList.add('btn-primary--disabled');
    el.disabled = true;
  }

  if (onClick) {
    el.addEventListener('click', onClick);
  }

  el.textContent = text;

  return el;
}
