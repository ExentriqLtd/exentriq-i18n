/** @format */

interface Translations {
  "button.loading": string;
  "button.signup-success": string;
  "button.create-new-group": string;
  "button.logout": string;
  "button.delete.room": string;
}

interface Button {
  it: Translations;
  en: Translations;
}

export const translationsButton: Button = {
  it: {
    "button.loading": "Caricamento in corso...",
    "button.signup-success": "Torna alla login",
    "button.create-new-group": "Crea gruppo",
    "button.logout": "Esci",
    "button.delete.room": "Nascondi",
  },
  en: {
    "button.loading": "Loading...",
    "button.signup-success": "Back to login",
    "button.create-new-group": "Create New Group",
    "button.logout": "Logout",
    "button.delete.room": "Hide",
  },
};

export type TTranslationsButton = keyof Translations;
