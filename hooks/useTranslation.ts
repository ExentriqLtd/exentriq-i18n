/** @format */

import { translations } from "../translations";
import { TTranslationsForm } from "../translations/translations.Form";
import { TTranslationsButton } from "../translations/translations.Button";
import { TTranslationsHeaders } from "../translations/translations.Header";
import { TTranslationsTabs } from "../translations/translations.Tabs";
import { TTranslationsView } from "../translations/translations.View";
import { TTranslationsSideBar } from "../translations/translations.Sidebar";
import { TLocale } from "../declarations";
import { TTranslationsGeneral } from "../translations/translations.General";

export type TTranslation =
  | TTranslationsButton
  | TTranslationsForm
  | TTranslationsHeaders
  | TTranslationsTabs
  | TTranslationsView
  | TTranslationsSideBar
  | TTranslationsGeneral;

interface Params {
  id: TTranslation;
  locale: TLocale;
}

export const useTranslation = ({ id, locale }: Params): string =>
  translations[locale][id];
