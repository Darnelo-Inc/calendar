import { addEvent } from "./../store/actions/addEvent"
import { getUsers } from "./../store/actions/getUsers"
import { eventSlice } from "./../store/reducers/eventSlice"
import { logout } from "./../store/actions/logout"
import { login } from "./../store/actions/login"
import { bindActionCreators } from "@reduxjs/toolkit"
import { authSlice } from "../store/reducers/authSlice"
import { useAppDispatch } from "./useRedux"
import { getEvents } from "../store/actions/getEvents"
import { modalSlice } from "../store/reducers/modalSlice"

const actions = {
  ...authSlice.actions,
  login,
  logout,
  ...eventSlice.actions,
  getUsers,
  addEvent,
  getEvents,
  ...modalSlice.actions,
}

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}
