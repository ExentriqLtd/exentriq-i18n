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
  "general.message.start-conversation": string;
  "general.message.new": string;
  "general.messsage.jump-recent": string;
  "general.message.read-more": string;
  "general.message.reply.label": string;
  "general.message.reply.image": string;
  "general.message.reply.video": string;
  "general.message.reply.audio": string;
  "general.message.reply.file": string;
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
  "general.label.no-results": string;
  "general.action.choose": string;
  "general.action.location": string;
  "general.action.camera": string;
  "general.action.call": string;
  "general.action.library": string;
  "general.action.browse": string;
  "general.action.cancel": string;
  "general.action.delete": string;
  "general.action.copyMessage": string;
  "general.action.replyMessage": string;
  "general.action.forwardMessage": string;
  "general.action.sendLocationWarning": string;
  "general.action.openMap": string;
  "general.action.openGMap": string;
  "general.action.openWaze": string;
  "general.label.forwardedMessage": string;
  "general.label.searchMessages": string;
  "general.label.chatList": string;
  "general.label.messages": string;
  "general.label.loadMore": string;
  "general.label.added": string;
  "general.label.removed": string;
  "general.label.renamedGroup": string;
  "general.label.activateTranslation": string;
  "general.label.deActivateTranslation": string;
  "general.label.openProfile": string;
  "general.label.removeTranslation": string;
  "general.label.yes": string;
  "general.label.no": string;
  "general.label.addNewGroup": string;
  "general.label.nothingFound": string;
  "general.label.searchUser": string;
  "general.label.inviteUsers": string;
  "general.label.invited": string;
  "general.label.searchLanguage": string;
  "general.label.languageSelect": string;
  "general.meet.inProgress": string;
  "general.meet.another-call-is-in-progress": string;
  "general.meet.call": string;
  "general.meet.invite": string;
  "general.meet.to-this-call": string;
  "general.meet.is-calling": string;
  "general.meet.would-you-like-to-hangup": string;
  "general.meet.hangup": string;
  "general.meet.answer": string;
  "general.meet.decline": string;
  "general.meet.join": string;
  "general.label.addedUser": string;
  "general.label.removedUser": string;
  "general.label.groupRenamed": string;
  "general.label.taskAttached": string;
  "general.label.imageAttached": string;
  "general.label.audioAttached": string;
  "general.label.videoAttached": string;
  "general.label.fileAttached": string;
  "general.label.messageForwarded": string;
  "general.label.messageReply": string;
  "general.label.userLeft": string;
  "general.label.userJoined": string;
  "general.label.welcomeRocketChat": string;
  "general.label.messageRemoved": string;
  "general.label.userMuted": string;
  "general.label.userUnMuted": string;
  "general.label.subscriptionRoleAdded": string;
  "general.label.subscriptionRoleRemoved": string;
  "general.label.mention": string;
  "general.label.requestPermissionTitle": string;
  "general.label.requestPermissionMessage": string;
  "general.label.geolocationShared": string;
  "general.label.noPermissionGallery": string;
  "general.label.noPermissionCamera": string;
  "general.label.error": string;
  "general.label.changeSettings": string;
}

interface General {
  it: Translations;
  en: Translations;
  fr: Translations;
  de: Translations;
  es: Translations;
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
    "general.message.start-conversation": "Inizio della conversazione",
    "general.message.new": "Nuovo Messaggio",
    "general.messsage.jump-recent": "Salta ai messaggi recenti",
    "general.message.read-more": "Continua a leggere",
    "general.message.reply.label": "Tu",
    "general.message.reply.image": "Immagine",
    "general.message.reply.video": "Video",
    "general.message.reply.audio": "Audio",
    "general.message.reply.file": "File",
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
    "general.action.choose": "Scegliere un'opzione",
    "general.action.location": "Posizione",
    "general.action.camera": "Dalla Camera",
    "general.action.call": "Chiama",
    "general.action.library": "Dalla Galleria",
    "general.action.browse": "Browse",
    "general.action.cancel": "Annulla",
    "general.action.delete": "Elimina",
    "general.action.copyMessage": "Copia Messaggio",
    "general.action.replyMessage": "Rispondi",
    "general.action.forwardMessage": "Forward",
    "general.action.sendLocationWarning": "Per inviare la localizzazione, inserire l'indirizzo completo o selezionare quello suggerito.",
    "general.action.openMap": "Apri con mappe",
    "general.action.openGMap": "Apri con Google Maps",
    "general.action.openWaze": "Apri con Waze",
    "general.label.forwardedMessage": "Forwarded",
    "general.label.searchMessages": "Cerca Messaggi",
    "general.label.chatList": "Lista chat",
    "general.label.messages": "Messaggi",
    "general.label.loadMore": "Carica di più",
    "general.label.added": "ha aggiunto",
    "general.label.removed": "ha rimosso",
    "general.label.renamedGroup": "ha rinominato il gruppo",
    "general.label.activateTranslation": "Attiva la Traduzione",
    "general.label.deActivateTranslation": "Disattiva la Traduzione",
    "general.label.openProfile": "Dettagli Chat",
    "general.label.removeTranslation": "Vuoi disattivare la traduzione in questa chat?",
    "general.label.yes": "Si",
    "general.label.no": "No",
    "general.label.addNewGroup": "Nuovo gruppo",
    "general.label.nothingFound": "Nessun elemento trovato",
    "general.label.searchUser": "Cerca Utente",
    "general.label.inviteUsers": "Invita Utenti",
    "general.label.searchLanguage": "Cerca lingua",
    "general.label.languageSelect": "Seleziona Lingua",
    "general.label.invited": "Invitato",
    "general.meet.inProgress": "Chiamata in corso",
    "general.meet.another-call-is-in-progress": "Un'altra chiamata è in corso",
    "general.meet.call": "Talk Call",
    "general.meet.invite": "Invita",
    "general.meet.to-this-call": "a questa chiamata",
    "general.meet.is-calling": "stà chiamando",
    "general.meet.would-you-like-to-hangup": "Vuoi riattaccare?",
    "general.meet.hangup": "Riaggancia",
    "general.meet.answer": "Risposta",
    "general.meet.decline": "Rifiuta",
    "general.meet.join": "Accedi",
    "general.label.addedUser": "Qualcuno è stato aggiunto al gruppo",
    "general.label.removedUser": "Qualcuno è stato rimosso dal gruppo",
    "general.label.groupRenamed": "Qualcuno ha rinominato il gruppo",
    "general.label.taskAttached": "Task allegato",
    "general.label.imageAttached": "Immagine allegata",
    "general.label.audioAttached": "Audio allegato",
    "general.label.videoAttached": "Video allegato",
    "general.label.fileAttached": "File allegato",
    "general.label.messageForwarded": "Messaggio inoltrato",
    "general.label.messageReply": "Messaggio di risposta",
    "general.label.userLeft": "Qualcuno ha lasciato la chat",
    "general.label.userJoined": "Qualcuno si è unito alla chat",
    "general.label.welcomeRocketChat": "Benvenuto!",
    "general.label.messageRemoved": "Il messaggio è stato rimosso",
    "general.label.userMuted": "L'utente è mutato",
    "general.label.userUnMuted": "L'utente non è mutato",
    "general.label.subscriptionRoleAdded": "Subcription Role Added",
    "general.label.subscriptionRoleRemoved": "Subscription Role Removed",
    "general.label.mention": "utente",
    "general.label.requestPermissionTitle": "Accesso alla posizione richiesto",
    "general.label.requestPermissionMessage": "Questa app deve accedere alla tua posizione",
    "general.label.geolocationShared": "Qualcuno ha condiviso con te una posizione",
    "general.label.noPermissionGallery": 'User did not grant library permission',
    "general.label.noPermissionCamera": 'User did not grant camera permission',
    "general.label.error": "Error",
    "general.label.changeSettings": "Change Settings",
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
    "general.message.start-conversation": "Start of conversation",
    "general.message.new": "New Message",
    "general.messsage.jump-recent": "Jump to recent messages",
    "general.message.read-more": "Read more",
    "general.message.reply.label": "You",
    "general.message.reply.image": "Image",
    "general.message.reply.video": "Video",
    "general.message.reply.audio": "Audio",
    "general.message.reply.file": "File",
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
    "general.action.choose": "Choose an option",
    "general.action.location": "Location",
    "general.action.camera": "From Camera",
    "general.action.call": "Call",
    "general.action.library": "From Library",
    "general.action.browse": "Browse",
    "general.action.cancel": "Cancel",
    "general.action.delete": "Delete",
    "general.action.copyMessage": "Copy Message",
    "general.action.replyMessage": "Reply",
    "general.action.forwardMessage": "Forward",
    "general.action.sendLocationWarning": "To send the location, enter the full address or select the one suggested.",
    "general.action.openMap": "Open with maps",
    "general.action.openGMap": "Open with Google Maps",
    "general.action.openWaze": "Open with Waze",
    "general.label.forwardedMessage": "Forwarded",
    "general.label.searchMessages": "Search Messages",
    "general.label.chatList": "Chat List",
    "general.label.messages": "Messages",
    "general.label.loadMore": "Load More",
    "general.label.added": "added",
    "general.label.removed": "removed",
    "general.label.renamedGroup": "renamed the group",
    "general.label.activateTranslation": "Activate Translation",
    "general.label.deActivateTranslation": "Remove Translation",
    "general.label.openProfile": "Chat Details",
    "general.label.removeTranslation": "Do you want to remove the translation for this chat?",
    "general.label.yes": "Yes",
    "general.label.no": "No",
    "general.label.addNewGroup": "New group",
    "general.label.nothingFound": "Nothing Found",
    "general.label.searchUser": "Search User",
    "general.label.inviteUsers": "Invite Users",
    "general.label.searchLanguage": "Search Language",
    "general.label.languageSelect": "Select Language",
    "general.label.invited": "Invited",
    "general.meet.to-this-call": "to this call.",
    "general.meet.inProgress": "Call in progress",
    "general.meet.another-call-is-in-progress": "Another call is in progress",
    "general.meet.call": "Meet Call",
    "general.meet.invite": "Invite",
    "general.meet.is-calling": "is calling",
    "general.meet.would-you-like-to-hangup": "Would you like to hangup?",
    "general.meet.hangup": "Hangup",
    "general.meet.answer": "Answer",
    "general.meet.decline": "Decline",
    "general.meet.join": "Join",
    "general.label.addedUser": "Someone has been added to the group",
    "general.label.removedUser": "Someone has been removed from the group",
    "general.label.groupRenamed": "Someone has renamed the group",
    "general.label.taskAttached": "Task attached",
    "general.label.imageAttached": "Image attached",
    "general.label.audioAttached": "Audio attached",
    "general.label.videoAttached": "Video attached",
    "general.label.fileAttached": "File attached",
    "general.label.messageForwarded": "Message forwarded",
    "general.label.messageReply": "Reply Message",
    "general.label.userLeft": "Someone left the chat",
    "general.label.userJoined": "Someone joined the chat",
    "general.label.welcomeRocketChat": "Welcome!",
    "general.label.messageRemoved": "Message has been removed",
    "general.label.userMuted": "User is muted",
    "general.label.userUnMuted": "User is unmuted",
    "general.label.subscriptionRoleAdded": "Subcription Role Added",
    "general.label.subscriptionRoleRemoved": "Subscription Role Removed",
    "general.label.mention": "user",
    "general.label.requestPermissionTitle": "Location access required",
    "general.label.requestPermissionMessage": "This app needs to access your location",
    "general.label.geolocationShared": "Someone shared a location",
    "general.label.noPermissionGallery": 'User did not grant library permission',
    "general.label.noPermissionCamera": 'User did not grant camera permission',
    "general.label.error": "Error",
    "general.label.changeSettings": "Change Settings",
  },
  fr: {
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
    "general.message.start-conversation": "Début de la conversation",
    "general.message.new": "New Message",
    "general.messsage.jump-recent": "Aller aux messages récents",
    "general.message.read-more": "Lire la suite",
    "general.message.reply.label": "Toi",
    "general.message.reply.image": "Image",
    "general.message.reply.video": "Vidèo",
    "general.message.reply.audio": "Audio",
    "general.message.reply.file": "File",
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
    "general.action.choose": "Choose an option",
    "general.action.location": "Position",
    "general.action.camera": "From Camera",
    "general.action.call": "Appel",
    "general.action.library": "From Library",
    "general.action.browse": "Browse",
    "general.action.cancel": "Cancel",
    "general.action.delete": "Delete",
    "general.action.copyMessage": "Copy Message",
    "general.action.replyMessage": "Réponse",
    "general.action.forwardMessage": "Forward",
    "general.action.sendLocationWarning": "Pour envoyer l'emplacement, entrez l'adresse complète ou sélectionnez celle suggérée.",
    "general.action.openMap": "Ouvrir avec des cartes",
    "general.action.openGMap": "Ouvrir avec Google Maps",
    "general.action.openWaze": "Ouvrir avec Waze",
    "general.label.forwardedMessage": "Forwarded",
    "general.label.searchMessages": "Search Messages",
    "general.label.chatList": "Liste de chat",
    "general.label.messages": "Messages",
    "general.label.loadMore": "Charger plus",
    "general.label.added": "added",
    "general.label.removed": "removed",
    "general.label.renamedGroup": "renamed the group",
    "general.label.activateTranslation": "Activate Translation",
    "general.label.deActivateTranslation": "Remove Translation",
    "general.label.openProfile": "Chat Details",
    "general.label.removeTranslation": "Do you want to remove the translation for this chat?",
    "general.label.yes": "Yes",
    "general.label.no": "No",
    "general.label.addNewGroup": "New group",
    "general.label.nothingFound": "Nothing Found",
    "general.label.searchUser": "Search User",
    "general.label.inviteUsers": "Invite Users",
    "general.label.invited": "Invited",
    "general.label.searchLanguage": "Search Language",
    "general.label.languageSelect": "Select Language",
    "general.meet.invite": "Invite",
    "general.meet.to-this-call": "to this call.",
    "general.meet.inProgress": "Call in progress",
    "general.meet.another-call-is-in-progress": "Another call is in progress",
    "general.meet.call": "Meet Call",
    "general.meet.is-calling": "is calling",
    "general.meet.would-you-like-to-hangup": "Would you like to hangup?",
    "general.meet.hangup": "Hangup",
    "general.meet.answer": "Answer",
    "general.meet.decline": "Decline",
    "general.meet.join": "Join",
    "general.label.addedUser": "Someone has been added to the group",
    "general.label.removedUser": "Someone has been removed from the group",
    "general.label.groupRenamed": "Someone has renamed the group",
    "general.label.taskAttached": "Task attached",
    "general.label.imageAttached": "Image attached",
    "general.label.audioAttached": "Audio attached",
    "general.label.videoAttached": "Video attached",
    "general.label.fileAttached": "File attached",
    "general.label.messageForwarded": "Message forwarded",
    "general.label.messageReply": "Reply Message",
    "general.label.userLeft": "Someone left the chat",
    "general.label.userJoined": "Someone joined the chat",
    "general.label.welcomeRocketChat": "Welcome!",
    "general.label.messageRemoved": "Message has been removed",
    "general.label.userMuted": "User is muted",
    "general.label.userUnMuted": "User is unmuted",
    "general.label.subscriptionRoleAdded": "Subcription Role Added",
    "general.label.subscriptionRoleRemoved": "Subscription Role Removed",
    "general.label.mention": "utilisateur",
    "general.label.requestPermissionTitle": "Accès à l'emplacement requis",
    "general.label.requestPermissionMessage": "Cette application doit accéder à votre position",
    "general.label.geolocationShared": "Someone shared a location",
    "general.label.noPermissionGallery": 'User did not grant library permission',
    "general.label.noPermissionCamera": 'User did not grant camera permission',
    "general.label.error": "Error",
    "general.label.changeSettings": "Change Settings",
  },
  de: {
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
    "general.message.start-conversation": "Beginn der Konversation",
    "general.message.new": "New Message",
    "general.messsage.jump-recent": "Neue Nachricht im Chat anzeigen",
    "general.message.read-more": "Weiterlesen",
    "general.message.reply.label": "Sie",
    "general.message.reply.image": "Bild",
    "general.message.reply.video": "Video",
    "general.message.reply.audio": "Audio",
    "general.message.reply.file": "Datei",
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
    "general.action.choose": "Choose an option",
    "general.action.location": "Position",
    "general.action.camera": "From Camera",
    "general.action.call": "Wer liebt",
    "general.action.library": "From Library",
    "general.action.browse": "Browse",
    "general.action.cancel": "Cancel",
    "general.action.delete": "Delete",
    "general.action.copyMessage": "Copy Message",
    "general.action.replyMessage": "Antworten",
    "general.action.forwardMessage": "Forward",
    "general.action.sendLocationWarning": "Um den Standort zu senden, geben Sie die vollständige Adresse ein oder wählen Sie die vorgeschlagene aus.",
    "general.action.openMap": "Mit Karten öffnen",
    "general.action.openGMap": "Mit Google Maps öffnen",
    "general.action.openWaze": "Öffnen mit waze",
    "general.label.forwardedMessage": "Forwarded",
    "general.label.searchMessages": "Search Messages",
    "general.label.chatList": "Chat-Liste",
    "general.label.messages": "Mitteilungen",
    "general.label.loadMore": "Mehr laden",
    "general.label.added": "added",
    "general.label.removed": "removed",
    "general.label.renamedGroup": "renamed the group",
    "general.label.activateTranslation": "Activate Translation",
    "general.label.deActivateTranslation": "Remove Translation",
    "general.label.openProfile": "Chat Details",
    "general.label.removeTranslation": "Do you want to remove the translation for this chat?",
    "general.label.yes": "Yes",
    "general.label.no": "No",
    "general.label.addNewGroup": "New group",
    "general.label.nothingFound": "Nothing Found",
    "general.label.searchUser": "Search User",
    "general.label.inviteUsers": "Invite Users",
    "general.label.invited": "Invited",
    "general.label.searchLanguage": "Search Language",
    "general.label.languageSelect": "Select Language",
    "general.meet.inProgress": "Call in progress",
    "general.meet.another-call-is-in-progress": "Another call is in progress",
    "general.meet.call": "Meet Call",
    "general.meet.invite": "Invite",
    "general.meet.to-this-call": "to this call.",
    "general.meet.is-calling": "is calling",
    "general.meet.would-you-like-to-hangup": "Would you like to hangup?",
    "general.meet.hangup": "Hangup",
    "general.meet.answer": "Answer",
    "general.meet.decline": "Decline",
    "general.meet.join": "Join",
    "general.label.addedUser": "Someone has been added to the group",
    "general.label.removedUser": "Someone has been removed from the group",
    "general.label.groupRenamed": "Someone has renamed the group",
    "general.label.taskAttached": "Task attached",
    "general.label.imageAttached": "Image attached",
    "general.label.audioAttached": "Audio attached",
    "general.label.videoAttached": "Video attached",
    "general.label.fileAttached": "File attached",
    "general.label.messageForwarded": "Message forwarded",
    "general.label.messageReply": "Reply Message",
    "general.label.userLeft": "Someone left the chat",
    "general.label.userJoined": "Someone joined the chat",
    "general.label.welcomeRocketChat": "Welcome!",
    "general.label.messageRemoved": "Message has been removed",
    "general.label.userMuted": "User is muted",
    "general.label.userUnMuted": "User is unmuted",
    "general.label.subscriptionRoleAdded": "Subcription Role Added",
    "general.label.subscriptionRoleRemoved": "Subscription Role Removed",
    "general.label.mention": "benutzer",
    "general.label.requestPermissionTitle": "Standortzugriff erforderlich",
    "general.label.requestPermissionMessage": "Diese App muss auf Ihren Standort zugreifen",
    "general.label.geolocationShared": "Someone shared a location",
    "general.label.noPermissionGallery": 'User did not grant library permission',
    "general.label.noPermissionCamera": 'User did not grant camera permission',
    "general.label.error": "Error",
    "general.label.changeSettings": "Change Settings",
  },
  es: {
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
    "general.message.start-conversation": "Inicio de la conversación",
    "general.message.new": "New Message",
    "general.messsage.jump-recent": "Ir a mensajes recientes",
    "general.message.read-more": "Lee mas",
    "general.message.reply.label": "Tù",
    "general.message.reply.image": "Imagen",
    "general.message.reply.video": "Video",
    "general.message.reply.audio": "Audio",
    "general.message.reply.file": "File",
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
    "general.action.choose": "Choose an option",
    "general.action.location": "Posición",
    "general.action.camera": "From Camera",
    "general.action.call": "Quien Ama",
    "general.action.library": "From Library",
    "general.action.browse": "Browse",
    "general.action.cancel": "Cancel",
    "general.action.delete": "Delete",
    "general.action.copyMessage": "Copy Message",
    "general.action.replyMessage": "Respuesta",
    "general.action.forwardMessage": "Forward",
    "general.action.sendLocationWarning": "Para enviar la ubicación, ingrese la dirección completa o seleccione la sugerida.",
    "general.action.openMap": "Abrir con mapas",
    "general.action.openGMap": "Abrir con Google Maps",
    "general.action.openWaze": "Abrir con Waze",
    "general.label.forwardedMessage": "Forwarded",
    "general.label.searchMessages": "Muscar mensajes",
    "general.label.chatList": "Lista de chat",
    "general.label.messages": "mensajes",
    "general.label.loadMore": "Carga más",
    "general.label.added": "added",
    "general.label.removed": "removed",
    "general.label.renamedGroup": "renamed the group",
    "general.label.activateTranslation": "Activate Translation",
    "general.label.deActivateTranslation": "Remove Translation",
    "general.label.openProfile": "Chat Details",
    "general.label.removeTranslation": "Do you want to remove the translation for this chat?",
    "general.label.yes": "Yes",
    "general.label.no": "No",
    "general.label.addNewGroup": "New group",
    "general.label.nothingFound": "Nothing Found",
    "general.label.searchUser": "Search User",
    "general.label.inviteUsers": "Invite Users",
    "general.label.invited": "Invited",
    "general.label.searchLanguage": "Search Language",
    "general.label.languageSelect": "Select Language",
    "general.meet.inProgress": "Call in progress",
    "general.meet.another-call-is-in-progress": "Another call is in progress",
    "general.meet.call": "Meet Call",
    "general.meet.invite": "Invite",
    "general.meet.to-this-call": "to this call.",
    "general.meet.is-calling": "is calling",
    "general.meet.would-you-like-to-hangup": "Would you like to hangup?",
    "general.meet.hangup": "Hangup",
    "general.meet.answer": "Answer",
    "general.meet.decline": "Decline",
    "general.meet.join": "Join",
    "general.label.addedUser": "Someone has been added to the group",
    "general.label.removedUser": "Someone has been removed from the group",
    "general.label.groupRenamed": "Someone has renamed the group",
    "general.label.taskAttached": "Task attached",
    "general.label.imageAttached": "Image attached",
    "general.label.audioAttached": "Audio attached",
    "general.label.videoAttached": "Video attached",
    "general.label.fileAttached": "File attached",
    "general.label.messageForwarded": "Message forwarded",
    "general.label.messageReply": "Reply Message",
    "general.label.userLeft": "Someone left the chat",
    "general.label.userJoined": "Someone joined the chat",
    "general.label.welcomeRocketChat": "Welcome!",
    "general.label.messageRemoved": "Message has been removed",
    "general.label.userMuted": "User is muted",
    "general.label.userUnMuted": "User is unmuted",
    "general.label.subscriptionRoleAdded": "Subcription Role Added",
    "general.label.subscriptionRoleRemoved": "Subscription Role Removed",
    "general.label.mention": "usuario",
    "general.label.requestPermissionTitle": "Se requiere acceso a la ubicación",
    "general.label.requestPermissionMessage": "Esta aplicación debe acceder a tu ubicación",
    "general.label.geolocationShared": "Someone shared a location",
    "general.label.noPermissionGallery": 'User did not grant library permission',
    "general.label.noPermissionCamera": 'User did not grant camera permission',
    "general.label.error": "Error",
    "general.label.changeSettings": "Change Settings",
  },
};

export type TTranslationsGeneral = keyof Translations;
