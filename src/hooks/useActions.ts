import { logout } from "./../store/actions/logout"
import { login } from "./../store/actions/login"
import { bindActionCreators } from "@reduxjs/toolkit"
import { authSlice } from "../store/reducers/authSlice"
import { useAppDispatch } from "./useRedux"

const actions = { ...authSlice.actions, login, logout }

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}
