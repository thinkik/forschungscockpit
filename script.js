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
      },
      {
        text: 'ChatGPT Deep Research & Custom GPTs nutzen, um Ideen zu vertiefen und Prompt-Bibliotheken zu teilen',
        link: 'https://openai.com/chatgpt'
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
      },
      {
        text: 'GigaBrain scannt Reddit-Diskussionen und liefert TL;DR-Antworten für Trend-Checks',
        link: 'https://gigabrain.ai/'
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
      },
      {
        text: 'Lateral bündelt Literatur, liefert KI-Zusammenfassungen und erstellt Zitationsketten',
        link: 'https://www.lateral.io/'
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
      },
      {
        text: 'Claude analysiert umfangreiche Daten (Text, Bilder, Tabellen) mit Advanced Data Analysis',
        link: 'https://www.anthropic.com/claude'
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
        text: 'Paperpal gibt fachbezogene Grammatik-, Zitier- und Strukturhinweise für akademische Texte',
        link: 'https://paperpal.com/'
      },
      {
        text: 'Writefull generiert Abstracts, Titel und liefert KI-basiertes Sprachfeedback',
        link: 'https://www.writefull.com/'
      },
      {
        text: 'Yomu AI hilft beim Paraphrasieren, Strukturieren und Zitieren ganzer Textabschnitte',
        link: 'https://www.yomu.ai/'
      },
      {
        text: 'DeepL Write oder Grammarly weiter für Stil-Checks und finale Politur nutzen',
        link: 'https://www.deepl.com/write'
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
        text: 'Beautiful.ai organisiert Layouts automatisch und bietet kollaborative Präsentations-Workspaces',
        link: 'https://www.beautiful.ai/'
      },
      {
        text: 'Gamma.app generiert Slides, Websites und Analysen inklusive Export als PDF oder PPT',
        link: 'https://gamma.app/'
      },
      {
        text: 'Simplified bündelt AI Design, Video, Social und Präsentationen in einem Editor',
        link: 'https://simplified.com/'
      },
      {
        text: 'SlidesAI verwandelt deine Texte direkt in Google-Slides-Foliensätze',
        link: 'https://www.slidesai.io/'
      },
      {
        text: 'BioRender liefert wissenschaftliche Icons & Templates für hochwertige Forschungsvisuals',
        link: 'https://biorender.com/'
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

const toolDirectory = [
  {
    name: 'ChatGPT',
    category: 'Assistants',
    description:
      'Generativer KI-Chatbot von OpenAI (GPT-4o, GPT-4.1, GPT-4o mini) für Brainstormings, Recherchebegleitung und multimodale Antworten.',
    poweredBy: 'GPT-4o, GPT-4.1, GPT-4o mini',
    features: [
      'Deep Research (Plus) identifiziert Literatur, fasst Studien zusammen und liefert zitierfähige Referenzen.',
      'Custom GPTs & Prompt Library zum Teilen von Workflows in Kursen oder Teams.',
      'Voice Mode & Audio API für Präsentationsproben, Interviews und Sprachfeedback.',
      'Datei-Uploads inkl. Advanced Data Analysis für Tabellen, Code und PDF-Auswertungen.',
      'Bildgenerierung, Web-Browsing und multimodale Analyse für Visuals und Kontext.'
    ],
    pricing: 'Free- und Plus-Plan; Team & Enterprise verfügbar.',
    notes: 'Account mit Multi-Faktor-Anmeldung empfohlen; Memory-Funktion angekündigt.',
    link: 'https://chat.openai.com/'
  },
  {
    name: 'Poe',
    category: 'Assistants',
    description:
      'KI-Plattform von Quora, auf der sich unterschiedliche Modelle wie ChatGPT, Claude, GPT-4o mini oder Stable LM ausprobieren lassen.',
    poweredBy: 'Quora Poe Infrastruktur + angebundene Large Language Models',
    features: [
      'Wechsle nahtlos zwischen ChatGPT, Claude, GPT-4o mini, Llama und weiteren Modellen.',
      'Erstelle eigene Bots mit Prompt-Vorlagen und teile sie mit deinem Team.',
      'Synchronisiere Chats geräteübergreifend über Web, iOS und Android.',
      'API-Zugriff für automatisierte Workflows in Projekten und Kursen.',
      'Regelmäßige Updates mit neuen Modellen und Feature-Drops.'
    ],
    pricing: 'Free- und Premium-Pläne verfügbar.',
    notes: 'Für einige Modelle sind Token-Limits oder Premium-Zugänge erforderlich.',
    link: 'https://poe.com/'
  },
  {
    name: 'NovelAI',
    category: 'Writers',
    description:
      'Abonnementbasierter KI-Schreibservice für Geschichten, kreative Texte oder experimentelle Narrative.',
    poweredBy: 'Eigene NLP-Modelle & Bilddiffusionsmodelle',
    features: [
      'Textgenerierung mit Story-, Abenteuer- oder Dokumentar-Modi inklusive Stilkontrolle.',
      'Image Generation nach Text-Prompts für Cover oder Illustration.',
      'Interaktive Textabenteuer und Rollenspiele zur Ideenfindung.',
      'Editor mit Themes, Tags und Notizen zur individuellen Schreibumgebung.',
      'Exportfunktionen für Microsoft Word, Google Docs oder Markdown.'
    ],
    pricing: 'Free-Test und Premium-Abos in mehreren Stufen.',
    notes: 'Bitte beachte institutionelle KI-Richtlinien für kreative Inhalte.',
    link: 'https://novelai.net/'
  },
  {
    name: 'Paperpal',
    category: 'Writers',
    description:
      'Akademischer Schreibassistent für Studierende und Forschende mit Fokus auf Struktur, Sprache und Journal-Standards.',
    poweredBy: 'Trainierte Large Language Models für akademische Texte',
    features: [
      'Grammar- und Style-Checks speziell für wissenschaftliche Texte.',
      'Paraphrasier- und Referenzfinder für präzise Quellenangaben.',
      'Research Finder und Journal-Vorschläge nach Fachgebiet.',
      'Plagiats- und Ähnlichkeitscheck mit sofortigen Korrekturhinweisen.',
      'Outline- und Essay-Generator für unterschiedliche Textformate.'
    ],
    pricing: 'Free- und Premium-Pläne verfügbar.',
    notes: 'Integration in Word, Browser-Add-on und Web-App möglich.',
    link: 'https://paperpal.com/'
  },
  {
    name: 'Yomu AI',
    category: 'Writers',
    description:
      'Schreibassistent zum Erstellen und Optimieren von Essays, Seminar- oder Abschlussarbeiten.',
    poweredBy: 'LLM-basiertes Textmodell (Quelle laut Anbieter)',
    features: [
      'Paraphrasieren, Expandieren oder Kürzen kompletter Abschnitte.',
      'Auto-Gliederungen und Bullet-Point-Summaries für Kapitel.',
      'Zitier- und Referenzvorschläge inklusive Formatoptionen.',
      'Section Blueprints für Einleitung, Theorie- oder Methodenteile.',
      'Plagiatsähnliche Passagen hervorheben und umformulieren.'
    ],
    pricing: 'Free- und Premium-Pläne verfügbar.',
    notes: 'Beachte die Nutzungsvorgaben deiner Hochschule.',
    link: 'https://www.yomu.ai/'
  },
  {
    name: 'Writefull',
    category: 'Writers',
    description:
      'KI-gestützte Sprach- und Strukturhilfe für akademische Texte – trainiert auf wissenschaftlichen Korpora.',
    poweredBy: 'Writefull Academic Language Models',
    features: [
      'Spezielle Module für Paraphrasing, Rewrite und GPT-gestützte Textgenerierung.',
      'Abstract- und Titel-Generator auf Basis deiner Manuskriptdaten.',
      'Sentence Palette mit Formulierungsbeispielen aus wissenschaftlichen Datenbanken.',
      'Writefull Revise markiert KI-generierte Abschnitte zur Transparenz.',
      'Integration in Word, Overleaf und Browser-Erweiterungen.'
    ],
    pricing: 'Free- und Premium-Pläne verfügbar.',
    notes: 'Institutionelle Lizenzen für Universitäten verfügbar.',
    link: 'https://www.writefull.com/'
  },
  {
    name: 'Beautiful.ai',
    category: 'Presenters',
    description:
      'Präsentationsplattform mit AI-gestützter Foliengestaltung und Kollaboration.',
    poweredBy: 'Beautiful.ai Design Engine',
    features: [
      'AI-driven Slide Layouts für konsistente Designs in Echtzeit.',
      'Storytelling-Vorlagen und Design-Elemente für Forschungspitches.',
      'Teamspaces zum gleichzeitigen Bearbeiten und Kommentieren.',
      'Brand Kit und Templates für Corporate-Design-Anforderungen.',
      'Export als PowerPoint, PDF oder freigebbare Links.'
    ],
    pricing: 'Free-Test, Pro- und Team-Pläne.',
    notes: 'Beim Upload vertraulicher Daten Datenschutzrichtlinien prüfen.',
    link: 'https://www.beautiful.ai/'
  },
  {
    name: 'Gamma.app',
    category: 'Presenters',
    description:
      'Generiert Präsentationen, Microsites und Handouts auf Basis deiner Stichpunkte.',
    poweredBy: 'Gamma AI Engine',
    features: [
      'Erstellt komplette Slide-Decks, Webseiten oder Dokumente aus Prompts.',
      'Design- und Layout-Anpassungen im Drag-and-Drop-Editor.',
      'Einbindung von Videos, Diagrammen und interaktiven Komponenten.',
      'Analytics zur Nutzung geteilten Materials.',
      'Export als PDF, PPTX oder Einbettung via Link.'
    ],
    pricing: 'Free- und Premium-Pläne verfügbar.',
    notes: 'Urheberrechte bei eingebundenen Medien beachten.',
    link: 'https://gamma.app/'
  },
  {
    name: 'Simplified',
    category: 'Presenters',
    description:
      'All-in-One-Editor für Content, Social Media, Video und Präsentationen mit KI-Unterstützung.',
    poweredBy: 'Simplified AI Content Engine',
    features: [
      'AI Presentation Builder erzeugt Folien aus Stichpunkten.',
      'AI Design, Image und Video Tools für Visuals und Clips.',
      'Social-Media-Planung inklusive automatischer Caption-Vorschläge.',
      'Teamworkflows mit Freigaben und Kommentaren.',
      'Brandkits und Asset Library für einheitliche Auftritte.'
    ],
    pricing: 'Free- und Premium-Pläne verfügbar.',
    notes: 'Prüfe Uploads auf urheberrechtlich geschütztes Material.',
    link: 'https://simplified.com/'
  },
  {
    name: 'SlidesAI',
    category: 'Presenters',
    description:
      'Google-Slides-Add-on, das Texte automatisch in Präsentationsfolien übersetzt.',
    poweredBy: 'SlidesAI Text-to-Slides Engine',
    features: [
      'Magic Write erzeugt bis zu 10 Folien pro Prompt mit passenden Layouts.',
      'Rephrase- und Tone-Optionen für akademische Zielgruppen.',
      'Automatische Bild- und Icon-Vorschläge passend zum Inhalt.',
      'Integration direkt in Google Slides mit Teamfreigaben.',
      'Export als PPTX oder PDF möglich.'
    ],
    pricing: 'Free- und Premium-Pläne verfügbar.',
    notes: 'Erfordert ein Google-Konto für die Installation.',
    link: 'https://www.slidesai.io/'
  },
  {
    name: 'BioRender',
    category: 'Presenters',
    description:
      'Spezialisierter Editor für wissenschaftliche Illustrationen und Poster.',
    poweredBy: 'BioRender Icon & Template Library',
    features: [
      'Über 50.000 wissenschaftliche Icons und Templates.',
      'Drag-and-Drop-Editor mit Layer- und Farbverwaltung.',
      'Custom Icon Requests für spezifische Laborszenarien.',
      'Export in hochauflösenden Formaten (PNG, SVG, PPT).',
      'Team-Workspaces und Versionierung für Kollaboration.'
    ],
    pricing: 'Free- und Premium-Pläne verfügbar.',
    notes: 'Achte auf Lizenzbedingungen bei Publikationen.',
    link: 'https://biorender.com/'
  },
  {
    name: 'AI Cards',
    category: 'Other',
    description:
      'Plattform für akademische Communities zum Teilen didaktischer Einsatzszenarien von KI.',
    poweredBy: 'AI Cards Community-Datenbank',
    features: [
      'Erstelle oder finde Usage Cards mit konkreten Unterrichts- und Forschungsszenarien.',
      'Exam Generator erstellt prüfungsrelevante Fragen inklusive Lösungswegen.',
      'Anbindung an ELLICIT Cards für maschinenlesbare Metadaten.',
      'Inspirationskarten für Ethik, Datenkompetenz und Praxisbeispiele.',
      'Community-Sharing inklusive Kommentaren und Bewertungen.'
    ],
    pricing: 'Kostenlos nutzbar (Registrierung erforderlich).',
    notes: 'Quelle: ai-cards.org – Inhalte stehen unter Creative Commons.',
    link: 'https://ai-cards.org/'
  },
  {
    name: 'ElevenReader',
    category: 'Other',
    description:
      'Text-to-Speech-App von ElevenLabs, die wissenschaftliche Texte barrierearm zugänglich macht.',
    poweredBy: 'ElevenLabs Text-to-Speech',
    features: [
      'Unterstützt PDFs, eBooks, Newsletter und Web-Artikel als Audio.',
      'Wählt aus einer Bibliothek natürlicher Stimmen oder erstellt eigene.',
      'Multi-Plattform-Zugriff über Web, iOS und Android.',
      'Lesezeichen und Notizen für Hörprotokolle.',
      'Offline-Downloads für späteres Anhören.'
    ],
    pricing: 'Free- und Premium-Pläne verfügbar.',
    notes: 'Google-, Facebook- oder SSO-Login wird unterstützt.',
    link: 'https://elevenlabs.io/app/reader'
  },
  {
    name: 'GigaBrain',
    category: 'Finders',
    description:
      'Recherche-Tool, das Milliarden Reddit-Diskussionen nach erprobten Antworten durchsucht.',
    poweredBy: 'Reddit-Datenbank + LLM-Ranking',
    features: [
      'Findet praktische Lösungen und Best Practices aus Community-Diskussionen.',
      'TL;DR-Zusammenfassungen mit Quellenangaben.',
      'Filter nach Zeitraum, Subreddit oder Relevanz.',
      'Speicher favorisierter Antworten für dein Recherche-Dossier.',
      'Browser-Erweiterung für kontextuelle Vorschläge.'
    ],
    pricing: 'Free- und Premium-Pläne verfügbar.',
    notes: 'Nur öffentliche Reddit-Daten werden verarbeitet.',
    link: 'https://gigabrain.ai/'
  },
  {
    name: 'Hugging Face',
    category: 'Finders',
    description:
      'Community-Hub für KI-Modelle, Datensätze und Forschungsprojekte.',
    poweredBy: 'Open-Source-Modelle & Spaces (u. a. Transformers, Diffuser)',
    features: [
      'Durchsuche über 1 Mio. Modelle, Datensätze und Spaces.',
      'Testumgebungen direkt im Browser (Inference Widgets & Spaces).',
      'Datasets-Explorer mit Filtern nach Lizenz, Sprache und Domäne.',
      'Model Cards mit Evaluationen, Bias-Hinweisen und Beispielcode.',
      'API- und Inference-Endpunkte für Integration in eigene Projekte.'
    ],
    pricing: 'Free, Pro und Enterprise-Pläne verfügbar.',
    notes: 'Respektiere Lizenzbedingungen beim Einsatz von Modellen und Daten.',
    link: 'https://huggingface.co/'
  },
  {
    name: 'Lateral',
    category: 'Connectors',
    description:
      'Wissens- und Literaturplattform, die Recherche, Annotation und Zitation bündelt.',
    poweredBy: 'Lateral Knowledge Graph & AI Summaries',
    features: [
      'Zentralisierte Bibliothek mit Uploads und automatischer Metadatenerkennung.',
      'AI-powered Summaries für Paper, Kapitel oder PDFs.',
      'Annotationen, Notizen und Tags direkt im Dokument.',
      'Erweiterte Suche mit Filtern nach Keywords, Clustern oder Zitaten.',
      'Citation Management exportiert Bibliografien (BibTeX, RIS, CSL).' 
    ],
    pricing: 'Free- und Premium-Pläne verfügbar.',
    notes: 'Integration mit Mendeley und Zotero möglich.',
    link: 'https://www.lateral.io/'
  },
  {
    name: 'Claude',
    category: 'Analyzers',
    description:
      'Konversationsmodell von Anthropic mit Fokus auf Sicherheitsmechanismen und komplexe Wissensarbeit.',
    poweredBy: 'Claude 3 Familie (Opus, Sonnet, Haiku)',
    features: [
      'Advanced Data Analysis für große Dokumente, Tabellen oder Code-Repositories.',
      'Kontextfenster bis zu 200k Tokens (Modellabhängig) für umfassende Dossiers.',
      'Bildanalyse inklusive Charts, Screenshots und gescannter Dokumente.',
      'Code-Generierung (HTML, Python, R) mit Debug-Hinweisen.',
      'API- und Tool-Integration für Automatisierungen (z. B. Google Drive, Slack).'
    ],
    pricing: 'Free- und Pro-Plan; Team & Enterprise auf Anfrage.',
    notes: 'Registrierung erfordert Account; siehe Privacy Policy & Anthropic Economic Index.',
    link: 'https://claude.ai/'
  }
];

const statusSelect = document.getElementById('status-select');
const recommendationsContainer = document.getElementById('status-recommendations');
const stepsList = document.getElementById('flight-steps');
const detailContainer = document.getElementById('step-detail');
const viewButtons = document.querySelectorAll('.legend__toggle');
const toolFiltersContainer = document.getElementById('tool-filters');
const toolListContainer = document.getElementById('tool-list');

let currentStep = steps[0].id;
let currentView = 'both';
let activeToolCategory = 'all';

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

function getToolCategories() {
  const categories = new Set(toolDirectory.map((tool) => tool.category));
  return ['all', ...categories];
}

function renderToolFilters() {
  if (!toolFiltersContainer) return;

  toolFiltersContainer.innerHTML = getToolCategories()
    .map((category) => {
      const isActive = category === activeToolCategory;
      const label = category === 'all' ? 'Alle' : category;
      return `<button type="button" class="tool-filter${isActive ? ' tool-filter--active' : ''}" data-category="${category}" aria-pressed="${isActive}">${label}</button>`;
    })
    .join('');
}

function renderToolCards(category = activeToolCategory) {
  if (!toolListContainer) return;

  const filtered = category === 'all' ? toolDirectory : toolDirectory.filter((tool) => tool.category === category);

  toolListContainer.innerHTML = filtered
    .map((tool) => {
      const featureList = tool.features.map((feature) => `<li>${feature}</li>`).join('');
      const poweredBy = tool.poweredBy
        ? `<div class="tool-card__meta-item"><dt>Basis</dt><dd>${tool.poweredBy}</dd></div>`
        : '';
      const pricing = tool.pricing
        ? `<div class="tool-card__meta-item"><dt>Pricing</dt><dd>${tool.pricing}</dd></div>`
        : '';
      const metaSection = poweredBy || pricing ? `<dl class="tool-card__meta">${poweredBy}${pricing}</dl>` : '';
      const notes = tool.notes ? `<p class="tool-card__notes">${tool.notes}</p>` : '';
      const link = tool.link
        ? `<a class="tool-card__link" href="${tool.link}" target="_blank" rel="noopener">Zur Website</a>`
        : '';

      return `
        <article class="tool-card">
          <header class="tool-card__header">
            <span class="tool-card__category">${tool.category}</span>
            <h3>${tool.name}</h3>
          </header>
          <p class="tool-card__description">${tool.description}</p>
          ${metaSection}
          <h4 class="visually-hidden">Features</h4>
          <ul class="tool-card__features">${featureList}</ul>
          ${notes}
          ${link}
        </article>
      `;
    })
    .join('');
}

function setActiveToolCategory(category) {
  activeToolCategory = category;
  renderToolFilters();
  renderToolCards(category);
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

if (toolFiltersContainer) {
  toolFiltersContainer.addEventListener('click', (event) => {
    const button = event.target.closest('.tool-filter');
    if (!button) return;
    const { category } = button.dataset;
    if (!category || category === activeToolCategory) return;
    setActiveToolCategory(category);
  });
}

statusSelect.addEventListener('change', (event) => {
  renderRecommendations(event.target.value);
});

function init() {
  renderSteps();
  renderDetail(currentStep);
  renderRecommendations(statusSelect.value);
  renderToolFilters();
  renderToolCards();
}

document.addEventListener('DOMContentLoaded', init);
