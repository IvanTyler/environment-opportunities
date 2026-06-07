import './Banner.scss';
import { ButtonPrimary } from '../Buttons/ButtonPrimary/ButtonPrimary.js';
import { ButtonSecondary } from '../Buttons/ButtonSecondary/ButtonSecondary.js';
import { ProcessRules } from '../ProcessRules/ProcessRules.js';
import bannerImage from '../../../assets/images/abc.png';
import bannerImageMobile from '../../../assets/images/abc-mobile.png';

export function Banner() {
  const section = document.createElement('section');
  section.classList.add('banner');

  section.innerHTML = `
    <div class="container banner__container">
      <div class="banner__content">
        <h1 class="banner__title">Регулярная оценка корпоративных компетенций</h1>
        <div class="banner__body">
          <p class="banner__subtitle">Развитие корпоративных компетенций для повышения результативности действий</p>
          <div class="banner__buttons"></div>
        </div>
        <div class="banner__image">
          <picture>
            <source srcset="${bannerImageMobile}" media="(max-width: 580px)" />
            <img src="${bannerImage}" alt="ABC буквы на подиумах" />
          </picture>
        </div>
      </div>
      
    </div>
  `;

  const buttonsEl = section.querySelector('.banner__buttons');
  buttonsEl.append(ButtonPrimary({ text: 'Пройти оценку' }));
  buttonsEl.append(ButtonSecondary({ text: 'Схема процесса оценки' }));

  section.querySelector('.banner__container').append(ProcessRules());

  return section;
}