import { Button, Layout } from "antd"
import { FC } from "react"
import { useAppSelector } from "../hooks/useRedux"
import { authSelector } from "../store/selectors"
import { useActions } from "../hooks/useActions"
import css from "../styles/Header.module.css"

const Nav: FC = () => {
  const { isAuth } = useAppSelector(authSelector)

  const { logout, toggleVisible } = useActions()
  const { user } = useAppSelector(authSelector)
  return (
    <Layout>
      <Layout.Header className={css["nav-header"]}>
        <h3 className={css.logo}>Scroll Feed</h3>

        {isAuth && (
          <div className={css.navMenu}>
            <Button
              className={css.navItem}
              onClick={() => toggleVisible()}
              danger
              type="primary"
            >
              Add Event
            </Button>
            <Button
              className={[css.navItem, css.logout].join(" ")}
              type="primary"
              onClick={() => logout(user.username)}
            >
              Logout
            </Button>
          </div>
        )}
      </Layout.Header>
    </Layout>
  )
}

export default Nav
