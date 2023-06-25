import { RootState } from ".."

export const authSelector = (state: RootState) => state.auth

export const eventSelector = (state: RootState) => state.event

export const modalSelector = (state: RootState) => state.modal.visible

export const localeSelector = (state: RootState) => state.locale.locale
