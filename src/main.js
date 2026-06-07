import './normalize.scss';
import './main.scss';

import { Banner } from './Components/UI/Banner/Banner.js';
import { NavTabs } from './Components/UI/NavTabs/NavTabs.js';
import { AssessmentCards } from './Components/UI/AssessmentCards/AssessmentCards.js';
import { Webinar } from './Components/UI/Webinar/Webinar.js';

function initApp() {
  const app = document.getElementById('app');

  app.innerHTML = `<main class="main"></main>`;

  const main = document.querySelector('.main');

  main.append(Banner());
  main.append(NavTabs());
  // main.append(AssessmentCards());
  // main.append(Webinar());
}

document.addEventListener('DOMContentLoaded', initApp);
