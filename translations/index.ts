/** @format */
import { translationsButton } from "./translations.Button";
import { translationsForm } from "./translations.Form";
import { translationsGeneral } from "./translations.General";
import { translationsHeader } from "./translations.Header";
import { translationsSidebar } from "./translations.Sidebar";
import { translationsTabs } from "./translations.Tabs";
import { translationsView } from "./translations.View";

export const translations = {
  it: {
    ...translationsButton.it,
    ...translationsForm.it,
    ...translationsGeneral.it,
    ...translationsHeader.it,
    ...translationsSidebar.it,
    ...translationsTabs.it,
    ...translationsView.it,
  },
  en: {
    ...translationsButton.en,
    ...translationsForm.en,
    ...translationsGeneral.en,
    ...translationsHeader.en,
    ...translationsSidebar.en,
    ...translationsTabs.en,
    ...translationsView.en,
  },
};
