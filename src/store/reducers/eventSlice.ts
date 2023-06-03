import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { EventState } from "../../models/EventState"
import { IUser } from "../../models/IUser"
import { IEvent } from "../../models/IEvent"
import { getUsers } from "../actions/getUsers"
import { addEvent } from "../actions/addEvent"
import { getEvents } from "../actions/getEvents"

const initialState: EventState = {
  events: [],
  guests: [],
}

const isError = (action: AnyAction) => action.type.endsWith("rejected")

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setGuests: (state, action: PayloadAction<IUser>) => {
      state.guests.push(action.payload)
    },
    setEvents: (state, action: PayloadAction<IEvent>) => {
      state.events.push(action.payload)
    },
  },
  extraReducers: (build) => {
    build
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.guests = action.payload
      })
      .addCase(addEvent.fulfilled, (state, action: PayloadAction<IEvent[]>) => {
        state.events = action.payload
      })
      .addCase(
        getEvents.fulfilled,
        (state, action: PayloadAction<IEvent[]>) => {
          state.events = action.payload
        }
      )
      .addMatcher(isError, (_, action: PayloadAction<string>) => {
        console.log(action.payload)
      })
  },
})

export default eventSlice.reducer
