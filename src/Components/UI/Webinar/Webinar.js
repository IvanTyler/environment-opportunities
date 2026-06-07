import './Webinar.scss';
import { PlayButton } from '../PlayButton/PlayButton.js';
import { Modal } from '../Modal/Modal.js';
import videoThumb from '../../../assets/images/vebinar-individual-assessment.png';

export function Webinar() {
  const section = document.createElement('section');
  section.classList.add('webinar');

  section.innerHTML = `
    <div class="container webinar__container">
      <div class="webinar__content">
        <h2 class="webinar__title">Вебинар для руководителей по регулярной оценке</h2>
        <p class="webinar__subtitle">Вебинар поможет разобраться в этапах оценки, критериях и подходе к обратной связи</p>
      </div>
      <div class="webinar__video" id="webinar-video">
        <img class="webinar__thumb" src="${videoThumb}" alt="Превью вебинара" />
        <div class="webinar__overlay"></div>
        <div class="webinar__play" id="webinar-play"></div>
      </div>
    </div>
  `;

  const modal = Modal();

  const playWrap = section.querySelector('#webinar-play');
  playWrap.append(PlayButton({
    onClick: () => modal.open(),
  }));

  return section;
}
