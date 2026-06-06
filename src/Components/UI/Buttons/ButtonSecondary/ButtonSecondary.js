import './ButtonSecondary.scss';

/**
 * @param {string}   text     — текст кнопки
 * @param {boolean}  disabled — состояние disabled
 * @param {Function} onClick  — обработчик клика
 * @returns {HTMLButtonElement}
 */
export function ButtonSecondary({ text = 'Схема процесса оценки', disabled = false, onClick = null } = {}) {
  const el = document.createElement('button');
  el.classList.add('btn-secondary');

  if (disabled) {
    el.classList.add('btn-secondary--disabled');
    el.disabled = true;
  }

  if (onClick) {
    el.addEventListener('click', onClick);
  }

  el.textContent = text;

  return el;
}
