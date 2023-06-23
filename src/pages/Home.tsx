import { FC, useEffect } from "react"
import EventCalendar from "../components/EventCalendar"
import { Layout, Modal } from "antd"
import EventForm from "../components/EventForm"
import { useActions } from "../hooks/useActions"
import { useAppSelector } from "../hooks/useRedux"
import { eventSelector, modalSelector } from "../store/selectors"
import { IEvent } from "../models/IEvent"
import { authSelector } from "../store/selectors"

const Home: FC = () => {
  const modalVisible = useAppSelector(modalSelector)

  const { guests, events } = useAppSelector(eventSelector)
  const { getUsers, addEvent, getEvents, toggleVisible } = useActions()
  const { user } = useAppSelector(authSelector)

  const submitHandler = (event: IEvent) => {
    toggleVisible()
    addEvent(event)
  }

  useEffect(() => {
    getUsers()
    getEvents(user.username)
  }, [])

  return (
    <Layout>
      <EventCalendar events={events} />
      <Modal
        title="Add Event"
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
