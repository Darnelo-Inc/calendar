import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { IUser } from "../../models/IUser"

export const login = createAsyncThunk(
  "auth/login",
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.get<IUser[]>("./users.json")
      const mockUser = res.data.find(
        (user) => user.username === username && user.password === password
      )

      if (mockUser) {
        localStorage.setItem("auth", "true")
        localStorage.setItem("username", mockUser.username)
        return mockUser
      } else {
        throw new Error("incorrect username or password")
      }
    } catch (error) {
      return rejectWithValue(String(error))
    }
  }
)
