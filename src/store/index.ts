import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./reducers/authSlice"
import eventSlice from "./reducers/eventSlice"
import modalSlice from "./reducers/modalSlice"
import localeSlice from "./reducers/localeSlice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    event: eventSlice,
    modal: modalSlice,
    locale: localeSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
