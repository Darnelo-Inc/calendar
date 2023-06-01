import { login } from "../actions/login"
import { logout } from "../actions/logout"
import { IUser } from "./../../models/IUser"
import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IAuthState {
  isAuth: boolean
  user: IUser
  loading: boolean
  error: string | null
}

const initialState: IAuthState = {
  isAuth: false,
  user: {} as IUser,
  loading: false,
  error: null,
}

const isError = (action: AnyAction) => action.type.endsWith("rejected")

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
  extraReducers: (build) => {
    build
      .addCase(login.pending, (state) => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.loading = false
        state.error = null
        state.isAuth = true
        state.user = action.payload
      })
      .addCase(logout.pending, (state) => {
        state.loading = true
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false
        state.error = null
        state.isAuth = false
        state.user = {} as IUser
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default authSlice.reducer
