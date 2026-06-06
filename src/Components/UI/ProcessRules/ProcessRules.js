import './ProcessRules.scss';
import { InfoCard } from '../InfoCard/InfoCard.js';

const DEFAULT_ITEMS = [
  'Участвуют сотрудники, которые отработали от 1 рабочего дня в отчетном квартале',
  'Руководитель оценивает прямых подчиненных по конкретным действиям при решении задач',
  'При оценке руководитель учитывает самооценку сотрудника и дает обратную связь',
  'Сотрудник видит результаты своей оценки',
];

export function ProcessRules({ items = DEFAULT_ITEMS } = {}) {
  const el = document.createElement('div');
  el.classList.add('process-rules');
  items.forEach(text => el.append(InfoCard({ text })));
  return el;
}
