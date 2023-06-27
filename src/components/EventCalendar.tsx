import { Button, Calendar, Modal, Row } from "antd"
import { FC, useState } from "react"
import { IEvent } from "../models/IEvent"
import { DeleteOutlined } from "@ant-design/icons"
import { Dayjs } from "dayjs"
import css from "../styles/Calendar.module.css"
import { useActions } from "../hooks/useActions"
import { useAppSelector } from "../hooks/useRedux"
import { localeSelector } from "../store/selectors"
import { setLocale } from "../utils/setLocale"
import { Locale } from "../models/LocaleState"

interface EventCalendarProps {
  events: IEvent[]
}

const EventCalendar: FC<EventCalendarProps> = ({ events }) => {
  const [eventToRemove, setEventToRemove] = useState<number | null>(null)
  const activeLocale = useAppSelector(localeSelector)

  const { removeEvent } = useActions()

  const locale = setLocale(activeLocale)

  const removeHandler = (id: number) => {
    setEventToRemove(id)
  }

  const okRemove = () => {
    if (eventToRemove) removeEvent(eventToRemove)
    setEventToRemove(null)
  }

  const cancelRemove = () => {
    setEventToRemove(null)
  }

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
              onClick={() => removeHandler(ev.id)}
            />
          </Row>
        ))}
      </div>
    )
  }

  return (
    <>
      <Calendar
        dateCellRender={dateCellRender}
        className={css.calendar}
        locale={locale}
      />

      <Modal
        title={
          activeLocale === Locale.en
            ? "Are you sure to delete this event?"
            : "Вы уверены, что хотите удалить это событие?"
        }
        open={!!eventToRemove}
        onOk={() => okRemove()}
        onCancel={() => cancelRemove()}
        okText={activeLocale === Locale.en ? "Yes" : "Да"}
        cancelText={activeLocale === Locale.en ? "No" : "Нет"}
        centered
        closable={false}
        style={{
          marginTop: "-5%",
        }}
        className="contentCenter"
      />
    </>
  )
}

export default EventCalendar
