import { createSlice } from "@reduxjs/toolkit"
import { IModal } from "../../models/IModal"

const initialState: IModal = {
  addEventModal: false,
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleAddEventModal: (state) => {
      state.addEventModal = !state.addEventModal
    },
  },
})

export default modalSlice.reducer
