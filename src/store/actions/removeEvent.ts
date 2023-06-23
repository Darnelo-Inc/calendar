import { createAsyncThunk } from "@reduxjs/toolkit"
import { IEvent } from "../../models/IEvent"

export const removeEvent = createAsyncThunk(
  "event/addEvent",
  async (id: number, { rejectWithValue }) => {
    try {
      const events = localStorage.getItem("events") || "[]"
      const json = JSON.parse(events) as IEvent[]

      const index = json.findIndex((event) => event.id === id)

      if (index !== -1) {
        json.splice(index, 1)
      }

      localStorage.setItem("events", JSON.stringify(json))
      return json
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
