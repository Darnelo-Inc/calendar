import { Layout } from "antd"
import AppRouter from "./components/AppRouter"
import Nav from "./components/Nav"
import { Content } from "antd/es/layout/layout"
import "./App.css"
import { useEffect } from "react"
import { useActions } from "./hooks/useActions"
import { IUser } from "./models/IUser"

import dayjs from "dayjs"
import "dayjs/locale/ru"
import { Locale, LocaleSetter } from "./models/LocaleState"
import { getLocale } from "./utils/getLocale"
dayjs.locale("ru")

function App() {
  const { setAuth, setUser, setLocale } = useActions()

  const localeSetter = (locale: LocaleSetter) => {
    if (locale) {
      setLocale(locale as Locale)
    } else {
      setLocale(Locale.en)
    }
  }

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      localeSetter(getLocale())
      setUser({ username: localStorage.getItem("username" || "") } as IUser)
      setAuth(true)
    }
  }, [setAuth, setUser]) //eslint-disable-line

  return (
    <Layout>
      <Nav />
      <Content>
        <AppRouter />
      </Content>
    </Layout>
  )
}

export default App
