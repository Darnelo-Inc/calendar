import { Layout } from "antd"
import AppRouter from "./components/AppRouter"
import Nav from "./components/Nav"
import { Content } from "antd/es/layout/layout"
import "./App.css"

function App() {
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
