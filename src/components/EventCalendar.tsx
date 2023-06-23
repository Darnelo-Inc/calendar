import { Button, Calendar, Row } from "antd"
import { FC } from "react"
import { IEvent } from "../models/IEvent"
import { DeleteOutlined } from "@ant-design/icons"
import { Dayjs } from "dayjs"
import css from "../styles/Calendar.module.css"
import { useActions } from "../hooks/useActions"

interface EventCalendarProps {
  events: IEvent[]
}

const EventCalendar: FC<EventCalendarProps> = ({ events }) => {
  const { removeEvent } = useActions()

  const dateCellRender = (value: Dayjs) => {
    const formatedValue = value.format("YYYY.MM.DD")
    const currDayEvents = events.filter((event) => event.date === formatedValue)

    return (
      <div>
        {currDayEvents.map((ev) => (
          <Row
            justify="space-between"
            className={css.border}
            key={ev.date + ev.description + ev.guest + ev.author}
          >
            <span className={css.description}>{ev.description}</span>
            <Button
              icon={<DeleteOutlined />}
              className={css.event__icon}
              onClick={() => removeEvent(ev.id)}
            />
          </Row>
        ))}
      </div>
    )
  }

  return <Calendar dateCellRender={dateCellRender} className={css.calendar} />
}

export default EventCalendar
