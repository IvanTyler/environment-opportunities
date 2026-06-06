import './NavTabs.scss';

const TABS = [
  { text: 'Самооценка',                href: '#self-assessment' },
  { text: 'Корпоративные компетенции', href: '#competencies' },
  { text: 'Полезные материалы',        href: '#materials' },
  { text: 'Вопросы/ответы',           href: '#faq' },
  { text: 'Контакты',                  href: '#contacts' },
];

export function NavTabs() {
  const nav = document.createElement('nav');
  nav.classList.add('nav-tabs');

  nav.innerHTML = `
    <div class="container nav-tabs__container">
      ${TABS.map(({ text, href }) => `
        <a class="nav-tabs__item" href="${href}">${text}</a>
      `).join('')}
    </div>
  `;

  return nav;
}
