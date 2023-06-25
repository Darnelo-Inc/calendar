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
  const modalVisible = useAppSelector(modalSelector)

  const { guests, events } = useAppSelector(eventSelector)
  const { getUsers, addEvent, getEvents, toggleVisible } = useActions()
  const { user } = useAppSelector(authSelector)
  const activeLocale = useAppSelector(localeSelector)

  const submitHandler = (event: IEvent) => {
    toggleVisible()
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
        open={modalVisible}
        onCancel={() => toggleVisible()}
        footer={null}
      >
        <EventForm guests={guests} submit={submitHandler} />
      </Modal>
    </Layout>
  )
}

export default Home
