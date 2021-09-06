/** @format */

export interface Translations {
  "form.login.username": string;
  "form.login.password": string;
  "form.login.button": string;
  "form.login.button.reset-password": string;
  "form.login.label.dont-have-an-account": string;
  "form.signup.email": string;
  "form.signup.username": string;
  "form.signup.password": string;
  "form.signup.button": string;
  "form.reset-password.email": string;
  "form.reset-password.button": string;
  "form.profile.name": string;
  "form.profile.last-name": string;
  "form.profile.message": string;
  "form.profile.email": string;
  "form.profile.phone": string;
  "form.profile.mobile": string;
  "form.profile.city": string;
  "form.profile.address": string;
  "form.new-group.name": string;
  "form.message.input": string;
  "form.searchbar.user": string;
  "form.location.sharing": string;
}

interface Form {
  it: Translations;
  en: Translations;
  fr: Translations;
  de: Translations;
  es: Translations;
}

export const translationsForm: Form = {
  it: {
    "form.login.username": "Nome Utente",
    "form.login.password": "Password",
    "form.login.button": "Accedi",
    "form.login.button.reset-password": "Password dimenticata?",
    "form.login.label.dont-have-an-account": "Non hai un account?",
    "form.signup.email": "La tua migliore email",
    "form.signup.username": "Crea Username",
    "form.signup.password": "Crea Password",
    "form.signup.button": "Crea Account",
    "form.reset-password.email": "Email Talk",
    "form.reset-password.button": "Invia",
    "form.profile.name": "Nome",
    "form.profile.last-name": "Cognome",
    "form.profile.message": "Messaggio",
    "form.profile.email": "Indirizzo email",
    "form.profile.phone": "Telefono",
    "form.profile.mobile": "Cellulare",
    "form.profile.city": "Città",
    "form.profile.address": "Indirizzo",
    "form.new-group.name": "Nome del gruppo",
    "form.message.input": "Scrivi...",
    "form.searchbar.user": "Cerca",
    "form.location.sharing": "Inserisci la posizione",
  },
  en: {
    "form.login.username": "Username",
    "form.login.password": "Password",
    "form.login.button": "Login",
    "form.login.button.reset-password": "Forgot your password?",
    "form.login.label.dont-have-an-account": "Don't have an account?",
    "form.signup.email": "Your best email",
    "form.signup.username": "Create Username",
    "form.signup.password": "Create Password",
    "form.signup.button": "SIGN UP",
    "form.reset-password.email": "Talk Email",
    "form.reset-password.button": "Send",
    "form.profile.name": "Name",
    "form.profile.last-name": "Last Name",
    "form.profile.message": "Message",
    "form.profile.email": "Email Address",
    "form.profile.phone": "Phone Number",
    "form.profile.mobile": "Mobile Number",
    "form.profile.city": "City",
    "form.profile.address": "Address",
    "form.new-group.name": "Group Name",
    "form.message.input": "Write...",
    "form.searchbar.user": "Search",
    "form.location.sharing": "Enter location",
  },
  fr: {
    "form.login.username": "Username",
    "form.login.password": "Password",
    "form.login.button": "Login",
    "form.login.button.reset-password": "Forgot your password?",
    "form.login.label.dont-have-an-account": "Don't have an account?",
    "form.signup.email": "Your best email",
    "form.signup.username": "Create Username",
    "form.signup.password": "Create Password",
    "form.signup.button": "SIGN UP",
    "form.reset-password.email": "Talk Email",
    "form.reset-password.button": "Send",
    "form.profile.name": "Name",
    "form.profile.last-name": "Last Name",
    "form.profile.message": "Message",
    "form.profile.email": "Email Address",
    "form.profile.phone": "Phone Number",
    "form.profile.mobile": "Mobile Number",
    "form.profile.city": "City",
    "form.profile.address": "Address",
    "form.new-group.name": "Group Name",
    "form.message.input": "Write...",
    "form.searchbar.user": "Search",
    "form.location.sharing": "Entrer l'emplacement",
  },
  de: {
    "form.login.username": "Username",
    "form.login.password": "Password",
    "form.login.button": "Login",
    "form.login.button.reset-password": "Forgot your password?",
    "form.login.label.dont-have-an-account": "Don't have an account?",
    "form.signup.email": "Your best email",
    "form.signup.username": "Create Username",
    "form.signup.password": "Create Password",
    "form.signup.button": "SIGN UP",
    "form.reset-password.email": "Talk Email",
    "form.reset-password.button": "Send",
    "form.profile.name": "Name",
    "form.profile.last-name": "Last Name",
    "form.profile.message": "Message",
    "form.profile.email": "Email Address",
    "form.profile.phone": "Phone Number",
    "form.profile.mobile": "Mobile Number",
    "form.profile.city": "City",
    "form.profile.address": "Address",
    "form.new-group.name": "Group Name",
    "form.message.input": "Write...",
    "form.searchbar.user": "Search",
    "form.location.sharing": "Ort eingeben",
  },
  es: {
    "form.login.username": "Username",
    "form.login.password": "Password",
    "form.login.button": "Login",
    "form.login.button.reset-password": "Forgot your password?",
    "form.login.label.dont-have-an-account": "Don't have an account?",
    "form.signup.email": "Your best email",
    "form.signup.username": "Create Username",
    "form.signup.password": "Create Password",
    "form.signup.button": "SIGN UP",
    "form.reset-password.email": "Talk Email",
    "form.reset-password.button": "Send",
    "form.profile.name": "Name",
    "form.profile.last-name": "Last Name",
    "form.profile.message": "Message",
    "form.profile.email": "Email Address",
    "form.profile.phone": "Phone Number",
    "form.profile.mobile": "Mobile Number",
    "form.profile.city": "City",
    "form.profile.address": "Address",
    "form.new-group.name": "Group Name",
    "form.message.input": "Write...",
    "form.searchbar.user": "Search",
    "form.location.sharing": "Ingrese la ubicación",
  },
};

export type TTranslationsForm = keyof Translations;
