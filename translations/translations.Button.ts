/** @format */

interface Translations {
  "button.loading": string;
  "button.signup-success": string;
  "button.create-new-group": string;
  "button.logout": string;
  "button.my-page": string;
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
    "button.my-page": "Profilo",
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
    "button.my-page": "My Page",
    "button.delete.room": "Hide",
    "button.fab.user": "Direct chat",
    "button.fab.call": "Direct call",
    "button.fab.group": "Group chat",
    "button.fab.groupCall": "Group call",
  },
  fr: {
    "button.loading": "Chargement...",
    "button.signup-success": "Retourner à la connexion",
    "button.create-new-group": "Créer un nouveau groupe",
    "button.logout": "Se déconnecter",
    "button.my-page": "Ma page",
    "button.delete.room": "Cacher",
    "button.fab.user": "Chat direct",
    "button.fab.call": "Appel direct",
    "button.fab.group": "Chat de groupe",
    "button.fab.groupCall": "Appel de groupe",
  },
  de: {
    "button.loading": "Wird geladen...",
    "button.signup-success": "Zurück zur Anmeldung",
    "button.create-new-group": "neue Gruppe erstellen",
    "button.logout": "Ausloggen",
    "button.my-page": "Meine Seite",
    "button.delete.room": "Verstecken",
    "button.fab.user": "Direkter Chat",
    "button.fab.call": "Direktwahl",
    "button.fab.group": "Gruppenchat",
    "button.fab.groupCall": "Gruppenanruf",

  },
  es: {
    "button.loading": "Cargando...",
    "button.signup-success": "Atrás para iniciar sesión",
    "button.create-new-group": "Crear nuevo grupo",
    "button.logout": "Cerrar sesión",
    "button.my-page": "Mi página",
    "button.delete.room": "Esconder",
    "button.fab.user": "Chat directo",
    "button.fab.call": "Llamada directa",
    "button.fab.group": "Grupo de chat",
    "button.fab.groupCall": "Llamada grupal",

  },
};

export type TTranslationsButton = keyof Translations;
