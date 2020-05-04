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
    "sidebar.button.my-page": "My page",
    "sidebar.button.settings": "Settings",
  },
};

export type TTranslationsSideBar = keyof Translations;
