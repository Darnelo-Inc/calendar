import { IEvent } from "./IEvent"
import { IUser } from "./IUser"

export interface EventState {
  guests: IUser[]
  events: IEvent[]
}
