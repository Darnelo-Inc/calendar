import { Layout } from "antd"
import AppRouter from "./components/AppRouter"
import Nav from "./components/Nav"
import { Content } from "antd/es/layout/layout"
import "./App.css"
import { useEffect } from "react"
import { useActions } from "./hooks/useActions"
import { IUser } from "./models/IUser"

function App() {
  const { setAuth, setUser } = useActions()

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") } as IUser)
      setAuth(true)
    }
  }, [setAuth, setUser])

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
