import ruLocale from "antd/es/date-picker/locale/ru_RU"
import enLocale from "antd/es/date-picker/locale/en_US"
import { Locale } from "../models/LocaleState"

export const setLocale = (activeLocale: Locale) => {
  let locale

  ruLocale.lang.shortWeekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
  ruLocale.lang.shortMonths = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ]

  enLocale.lang.shortMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

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
