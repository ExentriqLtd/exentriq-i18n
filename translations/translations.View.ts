/** @format */

interface Translations {
  "view.title.chat-list": string;
  "view.title.call-list": string;
  "view.title.activities": string;
  "view.title.googleMap": string;
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
    "view.title.activities": "Attività",
    "view.title.googleMap": "Posizione",
    "view.title.settings": "Impostazioni",
    "view.title.user-status": "Status",
    "view.title.new-room": "Nuova chat",
    "view.title.new-call": "Nuova Chiamata",
    "view.title.new-group": "Crea gruppo",
    "view.title.new-group-call": "Crea Chiamata di gruppo",
    "view.user.is-typing": "sta scrivendo...",
  },
  en: {
    "view.title.chat-list": "Chat",
    "view.title.call-list": "Calls",
    "view.title.activities": "Attività",
    "view.title.googleMap": "Location",
    "view.title.settings": "Settings",
    "view.title.user-status": "Status",
    "view.title.new-room": "New chat",
    "view.title.new-call": "New call",
    "view.title.new-group": "Create group",
    "view.title.new-group-call": "Create call group",
    "view.user.is-typing": "is typing...",
  },
  fr: {
    "view.title.chat-list": "Chat",
    "view.title.call-list": "Appels",
    "view.title.activities": "Activités",
    "view.title.googleMap": "Emplacement",
    "view.title.settings": "Paramètres",
    "view.title.user-status": "Statut",
    "view.title.new-room": "Nouvelle discussion",
    "view.title.new-call": "Nouvel appel",
    "view.title.new-group": "Créer un groupe",
    "view.title.new-group-call": "Créer un groupe d'appel",
    "view.user.is-typing": "est en train d'écrire...",
  },
  de: {
    "view.title.chat-list": "Plaudern",
    "view.title.call-list": "Anrufe",
    "view.title.activities": "Aktivitäten",
    "view.title.googleMap": "Lage",
    "view.title.settings": "Einstellungen",
    "view.title.user-status": "Status",
    "view.title.new-room": "Neuer Chat",
    "view.title.new-call": "Neuer Anruf",
    "view.title.new-group": "Gruppe erstellen",
    "view.title.new-group-call": "Anrufgruppe erstellen",
    "view.user.is-typing": "tippt...",
  },
  es: {
    "view.title.chat-list": "Chat",
    "view.title.call-list": "Llamadas",
    "view.title.activities": "Ocupaciones",
    "view.title.googleMap": "Localización",
    "view.title.settings": "Ajustes",
    "view.title.user-status": "Estado",
    "view.title.new-room": "nueva llamada",
    "view.title.new-call": "Nueva llamada",
    "view.title.new-group": "Crea un grupo",
    "view.title.new-group-call": "Crear grupo de llamadas",
    "view.user.is-typing": "esta escribiendo...",
  },
};

export type TTranslationsView = keyof Translations;
