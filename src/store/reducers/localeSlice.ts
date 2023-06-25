import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Locale, LocaleState } from "../../models/LocaleState"

const initialState: LocaleState = {
  locale: Locale.en,
}

export const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<undefined | Locale>) => {
      if (action.payload) {
        state.locale = action.payload
      } else {
        const payload = state.locale === Locale.en ? Locale.ru : Locale.en
        state.locale = payload
        localStorage.setItem("locale", payload)
      }
    },
  },
})

export default localeSlice.reducer
