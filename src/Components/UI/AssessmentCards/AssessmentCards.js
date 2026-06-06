import './AssessmentCards.scss';
import { ButtonPrimary } from '../Buttons/ButtonPrimary/ButtonPrimary.js';
import imgIndividual from '../../../assets/images/individual-assessment.png';
import img360 from '../../../assets/images/360.png';

const CARDS = [
  {
    title: 'Индивидуальная оценка',
    text: 'Оценка корпоративных компетенций перед назначением на должность, по отдельным проектам',
    btnText: 'Пройти оценку',
    disabled: false,
    img: imgIndividual,
    imgAlt: 'Индивидуальная оценка',
  },
  {
    title: 'Оценка 360°',
    text: 'Комплексная обратная связь от ключевых лиц рабочего окружения по эффективности взаимодействия',
    btnText: 'В разработке',
    disabled: true,
    img: img360,
    imgAlt: 'Оценка 360°',
  },
];

function createCard({ title, text, btnText, disabled, img, imgAlt }) {
  const article = document.createElement('article');
  article.classList.add('assessment-card');
  if (disabled) article.classList.add('assessment-card--disabled');

  article.innerHTML = `
    <h2 class="assessment-card__title">${title}</h2>
    <p class="assessment-card__text">${text}</p>
    <div class="assessment-card__image">
      <img src="${img}" alt="${imgAlt}" />
    </div>
  `;

  article.append(ButtonPrimary({ text: btnText, disabled }));

  return article;
}

export function AssessmentCards() {
  const section = document.createElement('section');
  section.classList.add('assessment-cards');

  section.innerHTML = `<div class="container assessment-cards__container"></div>`;

  const container = section.querySelector('.assessment-cards__container');
  CARDS.forEach(card => container.append(createCard(card)));

  return section;
}
