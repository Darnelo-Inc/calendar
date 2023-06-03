import { createAsyncThunk } from "@reduxjs/toolkit"
import { IEvent } from "../../models/IEvent"

export const getEvents = createAsyncThunk(
  "auth/getEvents",
  async (username: string, { rejectWithValue }) => {
    try {
      const events = localStorage.getItem("events") || "[]"
      const json = JSON.parse(events) as IEvent[]
      const currentUserEvents = json.filter(
        (event) => event.author === username || event.guest === username
      )
      return currentUserEvents
    } catch (error) {
      return rejectWithValue(String(error))
    }
  }
)
