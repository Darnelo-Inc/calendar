import { createAsyncThunk } from "@reduxjs/toolkit"

export const logout = createAsyncThunk(
  "auth/logout",
  async ({ username }: { username: string | undefined }, {}) => {
    if (username) {
      localStorage.setItem("auth", "false")
      localStorage.removeItem(`${username}`)
    }
    return
  }
)
