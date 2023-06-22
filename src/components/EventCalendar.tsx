import { Button, Calendar, Row } from "antd"
import { FC } from "react"
import { IEvent } from "../models/IEvent"
import { DeleteOutlined } from "@ant-design/icons"
import { Dayjs } from "dayjs"
import css from "../styles/Calendar.module.css"

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
          <Row
            justify="space-between"
            className={css.border}
            key={e.date + e.description + e.guest + e.author}
          >
            <span className={css.description}>{e.description}</span>
            <Button icon={<DeleteOutlined />} className={css.event__icon} />
          </Row>
        ))}
      </div>
    )
  }

  return <Calendar dateCellRender={dateCellRender} className={css.calendar} />
}

export default EventCalendar
