import { createSlice } from "@reduxjs/toolkit"
import { IModal } from "../../models/IModal"

const initialState: IModal = {
  visible: false,
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleVisible: (state) => {
      state.visible = !state.visible
    },
  },
})

export default modalSlice.reducer
