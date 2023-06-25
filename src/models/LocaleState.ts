export enum Locale {
  ru = "ru",
  en = "en",
}

export interface LocaleState {
  locale: Locale
}

export type LocaleSetter = string | null
