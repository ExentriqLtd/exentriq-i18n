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
  fr: Translations;
  de: Translations;
  es: Translations;
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
    "header.title.reset-password": "Recover password",
    "header.title.new-message": "New Message",
    "header.title.new-call": "New call",
    "header.text.back": "Back",
  },
  fr: {
    "header.title.login": "Login",
    "header.title.language": "Langue",
    "header.title.profile": "Profil",
    "header.title.user-status": "Statut",
    "header.title.new-group": "Créer",
    "header.button.forward": "Continuer",
    "header.title.signup": "Inscrivez-vous",
    "header.title.reset-password": "Récupérer mot de passe",
    "header.title.new-message": "Nouveau message",
    "header.title.new-call": "Nouvel appel",
    "header.text.back": "Arrière",
  },
  de: {
    "header.title.login": "Anmeldung",
    "header.title.language": "Sprache",
    "header.title.profile": "Profil",
    "header.title.user-status": "Status",
    "header.title.new-group": "Schaffen",
    "header.button.forward": "Weitermachen",
    "header.title.signup": "Anmelden",
    "header.title.reset-password": "Passwort wiederherstellen",
    "header.title.new-message": "Neue Nachricht",
    "header.title.new-call": "Neuer Anruf",
    "header.text.back": "Zurück",
  },
  es: {
    "header.title.login": "Acceso",
    "header.title.language": "Idioma",
    "header.title.profile": "Perfil",
    "header.title.user-status": "Estado",
    "header.title.new-group": "Crear",
    "header.button.forward": "Continuar",
    "header.title.signup": "Inscribirse",
    "header.title.reset-password": "Recuperar contraseña",
    "header.title.new-message": "Nuevo mensaje",
    "header.title.new-call": "Nueva llamada",
    "header.text.back": "Atrás",
  },
};

export type TTranslationsHeaders = keyof Translations;
