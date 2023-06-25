import ruLocale from "antd/es/date-picker/locale/ru_RU"
import enLocale from "antd/es/date-picker/locale/en_US"
import { Locale } from "../models/LocaleState"

export const setLocale = (activeLocale: Locale) => {
  let locale

  ruLocale.lang.shortWeekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]

  switch (activeLocale) {
    case Locale.en:
      locale = enLocale
      break
    case Locale.ru:
      locale = ruLocale
      break
  }

  return locale
}
