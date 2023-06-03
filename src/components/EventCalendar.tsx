import { Calendar } from "antd"
import { FC } from "react"
import { IEvent } from "../models/IEvent"
import { Dayjs } from "dayjs"

interface EventCalendarProps {
  events: IEvent[]
}

const EventCalendar: FC<EventCalendarProps> = ({ events }) => {
  const dateCellRender = (value: Dayjs) => {
    const formatedValue = value.format("YYYY.MM.DD")
    const currDayEvents = events.filter((event) => event.date === formatedValue)
    return (
      <div>
        {currDayEvents.map((e) => (
          <div key={Math.random()}>{e.description}</div>
        ))}
      </div>
    )
  }

  return <Calendar dateCellRender={dateCellRender} />
}

export default EventCalendar
