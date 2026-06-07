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
  el.classList.add('process-rules', 'swiper');

  const wrapper = document.createElement('div');
  wrapper.classList.add('swiper-wrapper');

  items.forEach(text => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.append(InfoCard({ text }));
    wrapper.append(slide);
  });

  const pagination = document.createElement('div');
  pagination.classList.add('swiper-pagination');

  el.append(wrapper, pagination);

  const mq = window.matchMedia('(max-width: 450px)');
  let swiperInstance = null;

  const initSwiper = () => {
    if (swiperInstance) return;

    swiperInstance = new Swiper(el, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      grabCursor: true,

      pagination: {
        el: pagination,
        clickable: true,
      },

    });
  };

  const destroySwiper = () => {
    if (!swiperInstance) return;

    swiperInstance.destroy(true, true);
    swiperInstance = null;
  };

  const handleMQ = (e) => {
    if (e.matches) {
      initSwiper();
    } else {
      destroySwiper();
    }
  };

  mq.addEventListener('change', handleMQ);
  requestAnimationFrame(() => handleMQ(mq));

  return el;
}
