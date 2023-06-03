import { createAsyncThunk } from "@reduxjs/toolkit"
import { IEvent } from "../../models/IEvent"

export const addEvent = createAsyncThunk(
  "event/addEvent",
  async (event: IEvent, { rejectWithValue }) => {
    try {
      const events = localStorage.getItem("events") || "[]"
      const json = JSON.parse(events) as IEvent[]
      json.push(event)
      localStorage.setItem("events", JSON.stringify(json))
      return json
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
