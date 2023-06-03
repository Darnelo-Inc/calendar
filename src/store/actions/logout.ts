import { createAsyncThunk } from "@reduxjs/toolkit"

export const logout = createAsyncThunk(
  "auth/logout",
  async (username: string) => {
    if (username) {
      localStorage.setItem("auth", "false")
      localStorage.removeItem("username")
    }
    return
  }
)
