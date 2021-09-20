/** @format */

interface Translations {
  "view.title.chat-list": string;
  "view.title.call-list": string;
  "view.title.settings": string;
  "view.title.user-status": string;
  "view.title.new-room": string;
  "view.title.new-call": string;
  "view.title.new-group": string;
  "view.title.new-group-call": string;
  "view.user.is-typing": string;
}

interface View {
  it: Translations;
  en: Translations;
  fr: Translations;
  de: Translations;
  es: Translations;
}

export const translationsView: View = {
  it: {
    "view.title.chat-list": "Chat",
    "view.title.call-list": "Chiamate",
    "view.title.settings": "Impostazioni",
    "view.title.user-status": "Status",
    "view.title.new-room": "Nuova chat",
    "view.title.new-call": "Nuova Chiamata";
    "view.title.new-group": "Crea gruppo",
    "view.title.new-group-call": "Crea Chiamata di gruppo",
    "view.user.is-typing": "sta scrivendo...",
  },
  en: {
    "view.title.chat-list": "Chat",
    "view.title.call-list": "Calls",
    "view.title.settings": "Settings",
    "view.title.user-status": "Status",
    "view.title.new-room": "New chat",
    "view.title.new-call": "New call";
    "view.title.new-group-call": "Create call group",
    "view.user.is-typing": "is typing...",
  },
  fr: {
    "view.title.chat-list": "Chat",
    "view.title.call-list": "Calls",
    "view.title.settings": "Settings",
    "view.title.user-status": "Status",
    "view.title.new-room": "New chat",
    "view.title.new-call": "Nouvel appel",
    "view.title.new-group": "Create group",
    "view.title.new-group-call": "Créer un groupe d'appel",
    "view.user.is-typing": "is typing...",
  },
  de: {
    "view.title.chat-list": "Chat",
    "view.title.call-list": "Calls",
    "view.title.settings": "Settings",
    "view.title.user-status": "Status",
    "view.title.new-room": "New chat",
    "view.title.new-call": "Neuer Anruf",
    "view.title.new-group": "Create group",
    "view.title.new-group-call": "Anrufgruppe erstellen",
    "view.user.is-typing": "is typing...",
  },
  es: {
    "view.title.chat-list": "Chat",
    "view.title.call-list": "Calls",
    "view.title.settings": "Settings",
    "view.title.user-status": "Status",
    "view.title.new-room": "nueva llamada",
    "view.title.new-call": "Nouvel appel",
    "view.title.new-group": "Create group",
    "view.title.new-group-call": "Crear grupo de llamadas",
    "view.user.is-typing": "is typing...",
  },
};

export type TTranslationsView = keyof Translations;
