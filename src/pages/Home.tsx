import { FC, useEffect, useState } from "react"
import EventCalendar from "../components/EventCalendar"
import { Button, Layout, Modal, Row } from "antd"
import EventForm from "../components/EventForm"
import { useActions } from "../hooks/useActions"
import { useAppSelector } from "../hooks/useRedux"
import { eventSelector } from "../store/selectors"
import { IEvent } from "../models/IEvent"
import { authSelector } from "../store/selectors"

const Home: FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const { guests, events } = useAppSelector(eventSelector)
  const { getUsers, addEvent, getEvents } = useActions()
  const { user } = useAppSelector(authSelector)

  const submitHandler = (event: IEvent) => {
    setModalVisible(false)
    addEvent(event)
  }

  useEffect(() => {
    getUsers()
    getEvents(user.username)
  }, []) // eslint-disable-line

  return (
    <Layout>
      <EventCalendar events={events} />
      <Row
        justify="center"
        style={{ padding: "5px 0 30px", backgroundColor: "white" }}
      >
        <Button size="large" onClick={() => setModalVisible(true)}>
          Add Event
        </Button>
      </Row>
      <Modal
        title="Add Event"
        open={modalVisible}
        // onOk={handleOk}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <EventForm guests={guests} submit={submitHandler} />
      </Modal>
    </Layout>
  )
}

export default Home
