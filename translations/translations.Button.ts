/** @format */

interface Translations {
  "button.loading": string;
  "button.signup-success": string;
  "button.create-new-group": string;
  "button.logout": string;
  "button.delete.room": string;
  "button.fab.user": string;
  "button.fab.call": string;
  "button.fab.group": string;
  "button.fab.groupCall": string;
}

interface Button {
  it: Translations;
  en: Translations;
  fr: Translations;
  de: Translations;
  es: Translations;
}

export const translationsButton: Button = {
  it: {
    "button.loading": "Caricamento in corso...",
    "button.signup-success": "Torna alla login",
    "button.create-new-group": "Crea gruppo",
    "button.logout": "Esci",
    "button.delete.room": "Nascondi",
    "button.fab.user": "Chat",
    "button.fab.call": "Chiamata",
    "button.fab.group": "Chat di Gruppo",
    "button.fab.groupCall": "Chiamata di Gruppo",
  },
  en: {
    "button.loading": "Loading...",
    "button.signup-success": "Back to login",
    "button.create-new-group": "Create New Group",
    "button.logout": "Logout",
    "button.delete.room": "Hide",
    "button.fab.user": "Direct chat",
    "button.fab.call": "Direct call",
    "button.fab.group": "Group chat",
    "button.fab.groupCall": "Group call",
  },
  fr: {
    "button.loading": "Loading...",
    "button.signup-success": "Back to login",
    "button.create-new-group": "Create New Group",
    "button.logout": "Logout",
    "button.delete.room": "Hide",
    "button.fab.user": "Direct chat",
    "button.fab.call": "Direct call",
    "button.fab.group": "Group chat",
    "button.fab.groupCall": "Group call",

  },
  de: {
    "button.loading": "Loading...",
    "button.signup-success": "Back to login",
    "button.create-new-group": "Create New Group",
    "button.logout": "Logout",
    "button.delete.room": "Hide",
    "button.fab.user": "Direct chat",
    "button.fab.call": "Direct call",
    "button.fab.group": "Group chat",
    "button.fab.groupCall": "Group call",

  },
  es: {
    "button.loading": "Loading...",
    "button.signup-success": "Back to login",
    "button.create-new-group": "Create New Group",
    "button.logout": "Logout",
    "button.delete.room": "Hide",
    "button.fab.user": "Direct chat",
    "button.fab.call": "Direct call",
    "button.fab.group": "Group chat",
    "button.fab.groupCall": "Group call",

  },
};

export type TTranslationsButton = keyof Translations;
