import { Button, DatePicker, Form, Input, Row, Select } from "antd"
import { FC, useState } from "react"
import { rules } from "../utils/rules"
import { IUser } from "../models/IUser"
import { IEvent } from "../models/IEvent"
import { Dayjs } from "dayjs"
import { useAppSelector } from "../hooks/useRedux"
import { authSelector, localeSelector } from "../store/selectors"
import { setLocale } from "../utils/setLocale"
import { Locale } from "../models/LocaleState"

interface EventFormProps {
  guests: IUser[]
  submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = ({ guests, submit }) => {
  const [event, setEvent] = useState<IEvent>({
    author: "",
    guest: "",
    date: "",
    description: "",
  } as IEvent)

  const selectDate = (date: Dayjs | null) => {
    if (date) {
      setEvent({
        ...event,
        date: date.format("YYYY.MM.DD"),
      })
    }
  }

  const { user } = useAppSelector(authSelector)
  const activeLocale = useAppSelector(localeSelector)

  const locale = setLocale(activeLocale)

  const [form] = Form.useForm()

  const submitForm = () => {
    submit({ ...event, author: user.username, id: Math.random() })
    form.resetFields()
    form.setFieldValue("guest", undefined)
  }

  return (
    <Form onFinish={submitForm} form={form}>
      <Form.Item
        label={
          activeLocale === Locale.en ? "Event description" : "Описание события"
        }
        name="description"
        rules={[rules.require()]}
      >
        <Input
          onChange={(e) =>
            setEvent((prevEvent) => ({
              ...prevEvent,
              description: e.target.value,
            }))
          }
          value={event.description}
        />
      </Form.Item>

      <Form.Item
        label={activeLocale === Locale.en ? "Event date" : "Дата события"}
        name="date"
        rules={[rules.require()]}
      >
        <DatePicker onChange={(date) => selectDate(date)} locale={locale} />
      </Form.Item>

      <Form.Item
        label={
          activeLocale === Locale.en
            ? "Choose the guest"
            : "Выберите гостя события"
        }
        name="guest"
      >
        <Select
          onChange={(guest) =>
            setEvent((prevEvent) => ({ ...prevEvent, guest }))
          }
          options={guests.map((guest) => ({
            value: guest.username,
            label: guest.username,
          }))}
        />
      </Form.Item>

      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {activeLocale === Locale.en ? "Create Event" : "Создать событие"}
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}

export default EventForm
