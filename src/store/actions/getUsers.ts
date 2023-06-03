import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { IUser } from "../../models/IUser"

export const getUsers = createAsyncThunk(
  "auth/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get<IUser[]>("./users.json")
      return res.data
    } catch (error) {
      return rejectWithValue(String(error))
    }
  }
)
