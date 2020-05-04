/** @format */

interface Translations {
  "header.title.login": string;
  "header.title.language": string;
  "header.title.profile": string;
  "header.title.user-status": string;
  "header.title.new-group": string;
  "header.button.forward": string;
  "header.title.signup": string;
  "header.title.reset-password": string;
  "header.title.new-message": string;
  "header.title.new-call": string;
  "header.text.back": string;
}

interface Header {
  it: Translations;
  en: Translations;
}

export const translationsHeader: Header = {
  it: {
    "header.title.login": "Login",
    "header.title.language": "Lingua",
    "header.title.profile": "Profilo",
    "header.title.user-status": "Stato",
    "header.title.new-group": "Crea",
    "header.button.forward": "Avanti",
    "header.title.signup": "Registrazione",
    "header.title.reset-password": "Recupera password",
    "header.title.new-message": "Nuovo Messaggio",
    "header.title.new-call": "Nuova chiamata",
    "header.text.back": "Indietro",
  },
  en: {
    "header.title.login": "Login",
    "header.title.language": "Language",
    "header.title.profile": "Profile",
    "header.title.user-status": "Status",
    "header.title.new-group": "Create",
    "header.button.forward": "Continue",
    "header.title.signup": "Signup",
    "header.title.reset-password": "Recovery password",
    "header.title.new-message": "New Message",
    "header.title.new-call": "New call",
    "header.text.back": "Back",
  },
};

export type TTranslationsHeaders = keyof Translations;
