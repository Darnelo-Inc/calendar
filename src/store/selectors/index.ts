import { RootState } from ".."

export const authSelector = (state: RootState) => state.auth

export const eventSelector = (state: RootState) => state.event
