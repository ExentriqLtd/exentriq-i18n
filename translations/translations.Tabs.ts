/** @format */

interface Translations {
  "tabs.label.chat": string;
  "tabs.label.calls": string;
  "tabs.label.settings": string;
}

interface Tabs {
  it: Translations;
  en: Translations;
  fr: Translations;
  de: Translations;
  es: Translations;
}

export const translationsTabs: Tabs = {
  it: {
    "tabs.label.chat": "Chat",
    "tabs.label.calls": "Chiamate",
    "tabs.label.settings": "Impostazioni",
  },
  en: {
    "tabs.label.chat": "Chat",
    "tabs.label.calls": "Calls",
    "tabs.label.settings": "Settings",
  },
  fr: {
    "tabs.label.chat": "Chat",
    "tabs.label.calls": "Appels",
    "tabs.label.settings": "Paramètres",
  },
  de: {
    "tabs.label.chat": "Plaudern",
    "tabs.label.calls": "Anrufe",
    "tabs.label.settings": "Einstellungen",
  },
  es: {
    "tabs.label.chat": "Chat",
    "tabs.label.calls": "Llamadas",
    "tabs.label.settings": "Ajustes",
  },
};

export type TTranslationsTabs = keyof Translations;
