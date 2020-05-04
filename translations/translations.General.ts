/** @format */

export interface Translations {
  "general.message.connecting": string;
  "general.message.signup-success": string;
  "general.message.forgot-password-success": string;
  "general.message.no-calls": string;
  "general.message.empty-messages": string;
  "general.message.loading": string;
  "general.message.no-rooms": string;
  "general.message.no-user-found": string;
  "general.item.language": string;
  "general.label.edit": string;
  "general.label.end": string;
  "general.label.new": string;
  "general.label.search": string;
  "general.label.italian": string;
  "general.label.english": string;
  "general.label.settings": string;
  "general.label.welcome": string;
  "general.label.social-login": string;
  "general.label.google-sign-in": string;
  "general.label.email-sign-in": string;
  "general.label.create-new-account": string;
  "general.label.forgot-password": string;
  "general.label.errors": string;
  "general.label.filter": string;
}

interface General {
  it: Translations;
  en: Translations;
}

export const translationsGeneral: General = {
  it: {
    "general.message.connecting": "Connessione in corso...",
    "general.message.signup-success": "Account creato, controlla la tua email",
    "general.message.forgot-password-success":
      "Controlla la tua email per cambiare password",
    "general.message.no-calls": "Nessuna chiamata effettuata",
    "general.message.empty-messages": "Nessun messaggio ricevuto",
    "general.message.loading": "Caricamento in corso...",
    "general.message.no-rooms": "Nessuna chat avviata",
    "general.message.no-user-found": "Nessun utente trovato",
    "general.item.language": "Lingua",
    "general.label.edit": "Modifica",
    "general.label.end": "Fine",
    "general.label.new": "Nuovo",
    "general.label.search": "Cerca",
    "general.label.italian": "Italiano",
    "general.label.english": "Inglese",
    "general.label.filter": "Filtra",
    "general.label.settings": "Impostazioni",
    "general.label.welcome": "Benvenuto su",
    "general.label.social-login": "Accedi con un account social",
    "general.label.google-sign-in": "Accedi con Google",
    "general.label.email-sign-in": "o con la tua email",
    "general.label.create-new-account": "Crea un nuovo account",
    "general.label.forgot-password": "Recupera password",
    "general.label.errors": "Ops! Il server non sembra essere disponibile :(",
    "general.label.no-results": "Nessun risultato trovato",
  },
  en: {
    "general.message.connecting": "Connecting to server...",
    "general.message.signup-success":
      "Account created, check your email to activate it",
    "general.message.forgot-password-success":
      "Check your email to change your password",
    "general.message.no-calls": "No calls",
    "general.message.empty-messages": "No Messages",
    "general.message.loading": "Loading...",
    "general.message.no-rooms": "No rooms",
    "general.message.no-user-found": "User not found",
    "general.item.language": "Language",
    "general.label.edit": "Edit",
    "general.label.end": "End",
    "general.label.new": "New",
    "general.label.search": "Search",
    "general.label.italian": "Italian",
    "general.label.filter": "Filter",
    "general.label.english": "English",
    "general.label.settings": "Settings",
    "general.label.welcome": "Welcome to",
    "general.label.social-login": "Log in with one of your social account",
    "general.label.google-sign-in": "Sign in with Google",
    "general.label.email-sign-in": "or with your email",
    "general.label.create-new-account": "Create a new account",
    "general.label.forgot-password": "Forgot password",
    "general.label.errors": "Ops! Server may be down :(",
    "general.label.no-results": "No results",
  },
};

export type TTranslationsGeneral = keyof Translations;
