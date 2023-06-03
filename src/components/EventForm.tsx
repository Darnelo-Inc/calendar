import { Button, DatePicker, Form, Input, Row, Select } from "antd"
import { FC, useState } from "react"
import { rules } from "../utils/rules"
import { IUser } from "../models/IUser"
import { IEvent } from "../models/IEvent"
import { Dayjs } from "dayjs"
import { useAppSelector } from "../hooks/useRedux"
import { authSelector } from "../store/selectors"

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

  const submitForm = () => {
    submit({ ...event, author: user.username })
  }

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Event description"
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
        label="Event date"
        name="date"
        rules={[
          rules.require(),
          rules.isDateValid("Сannot select a past date"),
        ]}
      >
        <DatePicker onChange={(date) => selectDate(date)} />
      </Form.Item>

      <Form.Item label="Choose the guest">
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
            Create Event
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}

export default EventForm
