import { Menu } from "antd"
import { Header } from "antd/es/layout/layout"
import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { routePath } from "../routes"
import { useAppSelector } from "../hooks/useRedux"
import { authSelector } from "../store/selectors"
import { useActions } from "../hooks/useActions"

const Nav: FC = () => {
  const nav = useNavigate()
  const { isAuth } = useAppSelector(authSelector)

  const { logout } = useActions()
  const { user } = useAppSelector(authSelector)
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" selectable={false}>
        <Menu.Item key={999} style={{ cursor: "default" }}>
          {user.username}
        </Menu.Item>
        {isAuth ? (
          <Menu.Item onClick={() => logout(user.username)} key={1}>
            Exit
          </Menu.Item>
        ) : (
          <Menu.Item onClick={() => nav(routePath.LOGIN)} key={1}>
            Login
          </Menu.Item>
        )}
      </Menu>
    </Header>
  )
}

export default Nav
