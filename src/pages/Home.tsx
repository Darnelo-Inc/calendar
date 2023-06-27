import { FC, useEffect } from "react"
import EventCalendar from "../components/EventCalendar"
import { Layout, Modal } from "antd"
import EventForm from "../components/EventForm"
import { useActions } from "../hooks/useActions"
import { useAppSelector } from "../hooks/useRedux"
import {
  eventSelector,
  localeSelector,
  modalSelector,
} from "../store/selectors"
import { IEvent } from "../models/IEvent"
import { authSelector } from "../store/selectors"
import { Locale } from "../models/LocaleState"

const Home: FC = () => {
  const { addEventModal } = useAppSelector(modalSelector)
  const { guests, events } = useAppSelector(eventSelector)
  const activeLocale = useAppSelector(localeSelector)
  const { user } = useAppSelector(authSelector)

  const { getUsers, addEvent, getEvents, toggleAddEventModal } = useActions()

  const submitHandler = (event: IEvent) => {
    toggleAddEventModal()
    addEvent(event)
  }

  useEffect(() => {
    getUsers()
    getEvents(user.username)
  }, []) //eslint-disable-line

  return (
    <Layout>
      <EventCalendar events={events} />

      <Modal
        title={activeLocale === Locale.en ? "Add Event" : "Создать событие"}
        open={addEventModal}
        onCancel={() => toggleAddEventModal()}
        centered
        footer={null}
      >
        <EventForm guests={guests} submit={submitHandler} />
      </Modal>
    </Layout>
  )
}

export default Home
