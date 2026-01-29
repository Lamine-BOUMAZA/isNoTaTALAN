'use strict';

export function rules({ onClose } = {}) {
  const body = document.querySelector('body');

  const bodyContainer = document.createElement('section');
  bodyContainer.className = 'body_container';

  const div = document.createElement('div');
  div.className = 'rules_container';

  const header = document.createElement('h1');
  header.textContent = 'RÈGLES DU JEU :';
  header.className = 'information';
  div.appendChild(header);

  const rulesList = document.createElement('div');
  rulesList.className = 'rules_list';

  const normalRules = [
    '- Récupère la clé pour ouvrir la porte.',
    '- Atteins la porte avec la clé.',
    '- Sors du labyrinthe dans le temps imparti.',
    '- ATTENTION : Le temps augmente à chaque niveau !',
    '- Chaque niveau est plus difficile.',
    '- Termine les 5 niveaux pour gagner.',
  ];

  const infiniteRules = [
    '- Récupère la clé pour ouvrir la porte.',
    '- Atteins la porte avec la clé.',
    '- Sors du labyrinthe dans le temps imparti.',
    '- ATTENTION : Le temps augmente à chaque niveau !',
    '- Chaque niveau est plus difficile.',
    "- Les niveaux montes à l'infini.",
  ];

  const hardcoreRules = [
    '- Récupère la clé qui est caché dans un coffre.',
    '- Atteins la porte avec la clé.',
    '- Mais ATTENTION à ce qui est caché dans les coffres.',
    '- ATTENTION AUX ENNEMIS',
    '- Fini le niveau dans le temps imparti.',
    '- Chaque niveau est beaucoup plus difficile.',
    '- Termine les 5 niveaux pour gagner.',
  ];

  const gameMode = localStorage.getItem('selectedMode');
  if (gameMode === 'normal') {
    normalRules.forEach((rule) => {
      const h2 = document.createElement('h2');
      h2.textContent = rule;
      rulesList.appendChild(h2);
    });
  } else if (gameMode === 'infinity') {
    infiniteRules.forEach((rule) => {
      const h2 = document.createElement('h2');
      h2.textContent = rule;
      rulesList.appendChild(h2);
    });
  } else if (gameMode === 'hardcore') {
    hardcoreRules.forEach((rule) => {
      const h2 = document.createElement('h2');
      h2.textContent = rule;
      rulesList.appendChild(h2);
    });
  }
  div.appendChild(rulesList);

  div.addEventListener('click', () => {
    bodyContainer.remove();
    if (onClose) onClose();
  });

  bodyContainer.appendChild(div);
  body.appendChild(bodyContainer);
}
