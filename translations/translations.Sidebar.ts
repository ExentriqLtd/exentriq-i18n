/** @format */

interface Translations {
  "sidebar.label.status": string;
  "sidebar.label.manage": string;
  "sidebar.button.my-page": string;
  "sidebar.button.settings": string;
}

interface Sidebar {
  it: Translations;
  en: Translations;
  fr: Translations;
  de: Translations;
  es: Translations;
}

export const translationsSidebar: Sidebar = {
  it: {
    "sidebar.label.status": "Stato",
    "sidebar.label.manage": "Gestisci",
    "sidebar.button.my-page": "Profilo",
    "sidebar.button.settings": "Impostazioni",
  },
  en: {
    "sidebar.label.status": "Status",
    "sidebar.label.manage": "Manage",
    "sidebar.button.my-page": "My Account",
    "sidebar.button.settings": "Settings",
  },
  fr: {
    "sidebar.label.status": "Statut",
    "sidebar.label.manage": "Gérer",
    "sidebar.button.my-page": "Ma page",
    "sidebar.button.settings": "Paramètres",
  },
  de: {
    "sidebar.label.status": "Status",
    "sidebar.label.manage": "Verwalten",
    "sidebar.button.my-page": "Meine Seite",
    "sidebar.button.settings": "Einstellungen",
  },
  es: {
    "sidebar.label.status": "Estado",
    "sidebar.label.manage": "Administrar",
    "sidebar.button.my-page": "Mi página",
    "sidebar.button.settings": "Ajustes",
  },
};

export type TTranslationsSideBar = keyof Translations;
