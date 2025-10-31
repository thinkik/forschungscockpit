const steps = [
  {
    id: 'assistants',
    step: 'Pre-Flight',
    title: 'ASSISTANTS',
    description:
      'Finde dein Forschungsthema, strukturiere die Fragestellung und plane das Vorhaben. Assistenz-Tools helfen beim Einstieg.',
    tags: ['Themenfindung', 'Scope', 'Planung'],
    classic: [
      {
        text: 'Themenfinder, Forschungsfrage schärfen, Gliederung bauen',
      },
      {
        text: 'Miro-Board oder Concept Mapping, um Ideen zu clustern',
        link: 'https://miro.com/'
      },
      {
        text: 'Exposé schreiben & Feedback vom Lehrstuhl einholen'
      }
    ],
    ai: [
      {
        text: 'KI-Bot zur Themenfindung (z. B. Perplexity) für erste Inspiration',
        link: 'https://www.perplexity.ai/'
      },
      {
        text: 'Prompts für Forschungsfragen mit ChatGPT & Co. testen',
        link: 'https://chat.openai.com/'
      },
      {
        text: 'Mit KI-Planern wie Notion AI grobe Strukturideen entwickeln',
        link: 'https://www.notion.so/product/ai'
      }
    ]
  },
  {
    id: 'finders',
    step: 'Take-off',
    title: 'FINDERS',
    description:
      'Literatur- und Datenquellen identifizieren, Relevanz prüfen und Suchstrategien entwickeln – das ist dein Start in die Recherche.',
    tags: ['Recherche', 'Suchstrings', 'Screening'],
    classic: [
      {
        text: 'Datenbanken wie WISO, EconBiz, JSTOR gezielt durchsuchen',
        link: 'https://www.econbiz.de/'
      },
      {
        text: 'Schlagwortlisten & Boolesche Operatoren vorbereiten'
      },
      {
        text: 'Schneeballprinzip: relevante Quellen in Literaturverzeichnissen finden'
      }
    ],
    ai: [
      {
        text: 'KI-Suchassistenten wie Elicit oder ResearchRabbit nutzen',
        link: 'https://elicit.com/'
      },
      {
        text: 'Mit Iris.ai thematische Karten deiner Recherche erzeugen',
        link: 'https://iris.ai/'
      },
      {
        text: 'Automatisierte Alerts für neue Papers via Connected Papers',
        link: 'https://www.connectedpapers.com/'
      }
    ]
  },
  {
    id: 'connectors',
    step: 'Cruise',
    title: 'CONNECTORS',
    description:
      'Werde zum Navigator zwischen Theorien, Konzepten und Daten. Verbinde Literaturstränge und ordne sie deinem Forschungsvorhaben zu.',
    tags: ['Synthese', 'Konzept', 'Framework'],
    classic: [
      {
        text: 'Concept-Matrix in Excel oder Google Sheets für Vergleich',
        link: 'https://docs.google.com/spreadsheets/'
      },
      {
        text: 'Lesegruppen oder Kolloquien nutzen, um Perspektiven zu verbinden'
      },
      {
        text: 'Mindmap oder Argumentationsketten skizzieren'
      }
    ],
    ai: [
      {
        text: 'Zotero + Zotfile zur Vernetzung & Annotation deiner Quellen',
        link: 'https://www.zotero.org/'
      },
      {
        text: 'KI-gestützte Concept Maps mit Scispace oder Aomni bauen',
        link: 'https://typeset.io/'
      },
      {
        text: 'Zusammenfassungen von Papers mit Scholarcy generieren',
        link: 'https://www.scholarcy.com/'
      }
    ]
  },
  {
    id: 'analyzers',
    step: 'Mission Control',
    title: 'ANALYZERS',
    description:
      'Nutze analytische Tools, um Daten aufzubereiten, Modelle anzuwenden und Erkenntnisse zu generieren – quantitativ wie qualitativ.',
    tags: ['Analyse', 'Methodik', 'Validierung'],
    classic: [
      {
        text: 'Excel, SPSS, STATA für statistische Auswertungen nutzen'
      },
      {
        text: 'Qualitative Inhaltsanalyse mit MAXQDA durchführen',
        link: 'https://www.maxqda.de/'
      },
      {
        text: 'Workshops oder Tutorien zur Methodenvertiefung besuchen'
      }
    ],
    ai: [
      {
        text: 'Explainable AI Tools wie LIME oder SHAP für Modelle prüfen',
        link: 'https://github.com/marcotcr/lime'
      },
      {
        text: 'KI-Co-Piloten (z. B. GitHub Copilot) für Code- und Skriptunterstützung',
        link: 'https://github.com/features/copilot'
      },
      {
        text: 'Automatisierte Datensäuberung mit OpenRefine + KI-Plugins',
        link: 'https://openrefine.org/'
      }
    ]
  },
  {
    id: 'literature',
    step: 'Flight Deck',
    title: 'LITERATURVERWALTUNG & ZITIEREN',
    description:
      'Sorge für verlässliche Zitationsketten, behalte Versionen im Blick und dokumentiere jede Quelle – klassisch oder unterstützt durch KI.',
    tags: ['Zitate', 'Referenzen', 'Plagiate vermeiden'],
    classic: [
      {
        text: 'Citavi oder EndNote für Zitationsstile und Literaturverwaltung',
        link: 'https://www.citavi.com/de'
      },
      {
        text: 'Zitierregeln der Fakultät prüfen und Leitfäden nutzen'
      },
      {
        text: 'Plagiatscheck mit Betreuenden abstimmen'
      }
    ],
    ai: [
      {
        text: 'KI-Zitiervorschläge (Zotero + Better BibTeX) automatisieren',
        link: 'https://retorque.re/zotero-better-bibtex/'
      },
      {
        text: 'Mit SciSpace Copilot Zitate im Kontext nachverfolgen',
        link: 'https://typeset.io/copilot'
      },
      {
        text: 'Verantwortungsvoll KI-Zusammenfassungen dokumentieren (Transparenz!)'
      }
    ]
  },
  {
    id: 'writers',
    step: 'Landing',
    title: 'WRITERS',
    description:
      'Setze deine Argumentation schlüssig in Text um, iteriere Feedbackschleifen und finalisiere dein Manuskript.',
    tags: ['Schreiben', 'Feedback', 'Revision'],
    classic: [
      {
        text: 'Schreib-Sprints mit Pomodoro-Technik organisieren'
      },
      {
        text: 'Feedback-Zyklen mit Peer-Review oder Betreuenden einplanen'
      },
      {
        text: 'Lesen laut & Textlogik mit Checklisten prüfen'
      }
    ],
    ai: [
      {
        text: 'KI-Schreibcoach wie DeepL Write für Stil-Checks nutzen',
        link: 'https://www.deepl.com/write'
      },
      {
        text: 'LanguageTool oder Grammarly für Grammatik prüfen',
        link: 'https://languagetool.org/'
      },
      {
        text: 'Prompt-Vorlagen für Feedbackschleifen dokumentieren'
      }
    ]
  },
  {
    id: 'visuals',
    step: 'Touchdown',
    title: 'VISUALS & PRESENTATION',
    description:
      'Bereite Ergebnisse visuell auf, trainiere deine Präsentation und setze klare Storylines für unterschiedliche Zielgruppen.',
    tags: ['Visualisierung', 'Storytelling', 'Pitch'],
    classic: [
      {
        text: 'Präsentationsfolien in PowerPoint oder Canva strukturieren',
        link: 'https://www.canva.com/'
      },
      {
        text: 'Mock-Presentations mit Freunden oder Lernteam halten'
      },
      {
        text: 'Handouts & Executive Summary erstellen'
      }
    ],
    ai: [
      {
        text: 'Beautiful.ai oder Tome für KI-gestützte Slide-Designs',
        link: 'https://www.tome.app/'
      },
      {
        text: 'Canva Docs Magic Write für Storyline-Ideen',
        link: 'https://www.canva.com/magic-write/'
      },
      {
        text: 'KI-Avatare (Synthesia) für Video-Pitches ausprobieren',
        link: 'https://www.synthesia.io/'
      }
    ]
  }
];

const recommendations = {
  idee: [
    'Formuliere eine präzise Forschungsfrage und kläre den Scope mit deinem Betreuer oder deiner Betreuerin.',
    'Lege ein Projektboard an (Trello, Notion) und definiere grobe Meilensteine.',
    'Baue ein Inspirations-Repository mit relevanten Artikeln und Datensätzen auf.'
  ],
  struktur: [
    'Validiere deine Gliederung mit Literaturbeispielen und Just-in-Time-Feedback.',
    'Erstelle eine Methodentabelle mit Vorteilen/Nachteilen klassisch vs. KI.',
    'Plane Recherche-Blöcke in deinem Kalender und blocke Fokuszeiten.'
  ],
  daten: [
    'Dokumentiere alle Bereinigungsschritte – egal ob manuell oder mit KI.',
    'Überprüfe Annahmen deiner Modelle gemeinsam mit Kommiliton·innen.',
    'Nutze Visualisierungen, um Zwischenergebnisse mit deinem Lehrstuhl zu diskutieren.'
  ],
  schreiben: [
    'Setze dir tägliche Schreibziele und tracke Fortschritt im Forschungslogbuch.',
    'Nutze KI-Tools nur zur Überarbeitung, nicht zum Erstentwurf – Transparenzpflicht!',
    'Finale Checks: Quellenangaben, Plagiatsprüfung, Layout gemäß Fakultätsleitfaden.'
  ]
};

const statusSelect = document.getElementById('status-select');
const recommendationsContainer = document.getElementById('status-recommendations');
const stepsList = document.getElementById('flight-steps');
const detailContainer = document.getElementById('step-detail');
const viewButtons = document.querySelectorAll('.legend__toggle');

let currentStep = steps[0].id;
let currentView = 'both';

function createListItem(item) {
  if (!item.link) {
    return `<li>${item.text}</li>`;
  }
  return `<li><a href="${item.link}" target="_blank" rel="noopener">${item.text}</a></li>`;
}

function renderSteps() {
  stepsList.innerHTML = steps
    .map(
      (step) => `
        <li class="step-item ${step.id === currentStep ? 'step-item--active' : ''}" data-id="${step.id}" data-step="${step.step}">
          <h3>${step.title}</h3>
          <p>${step.description.slice(0, 90)}...</p>
          <span class="step-badge">${step.step}</span>
        </li>
      `
    )
    .join('');
}

function renderDetail(stepId) {
  const step = steps.find((item) => item.id === stepId);
  if (!step) return;

  const classicList = step.classic.map(createListItem).join('');
  const aiList = step.ai.map(createListItem).join('');

  const tags = step.tags.map((tag) => `<span class="tag">${tag}</span>`).join('');

  const showClassic = currentView === 'both' || currentView === 'classic';
  const showAi = currentView === 'both' || currentView === 'ai';

  const classicColumn = showClassic
    ? `<div class="step-detail__column">
        <h4>Klassisch</h4>
        <ul>${classicList}</ul>
      </div>`
    : '';

  const aiColumn = showAi
    ? `<div class="step-detail__column">
        <h4>KI</h4>
        <ul>${aiList}</ul>
      </div>`
    : '';

  detailContainer.innerHTML = `
    <article>
      <div class="tags">${tags}</div>
      <h3>${step.title}</h3>
      <p>${step.description}</p>
      <div class="step-detail__columns">
        ${classicColumn}
        ${aiColumn}
      </div>
    </article>
  `;
}

function renderRecommendations(statusKey) {
  const list = recommendations[statusKey] || [];
  recommendationsContainer.innerHTML = list
    .map((text) => `<div class="recommendation">${text}</div>`)
    .join('');
}

function setActiveStep(stepId) {
  currentStep = stepId;
  renderSteps();
  renderDetail(stepId);
}

stepsList.addEventListener('click', (event) => {
  const item = event.target.closest('.step-item');
  if (!item) return;
  const { id } = item.dataset;
  setActiveStep(id);
});

viewButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const view = button.dataset.view;
    if (currentView === view) return;
    currentView = view;

    viewButtons.forEach((btn) => {
      const isActive = btn === button;
      btn.classList.toggle('legend__toggle--active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    renderDetail(currentStep);
  });
});

statusSelect.addEventListener('change', (event) => {
  renderRecommendations(event.target.value);
});

function init() {
  renderSteps();
  renderDetail(currentStep);
  renderRecommendations(statusSelect.value);
}

document.addEventListener('DOMContentLoaded', init);
