import { Button, Layout, Switch } from "antd"
import { FC } from "react"
import { useAppSelector } from "../hooks/useRedux"
import { authSelector, localeSelector } from "../store/selectors"
import { useActions } from "../hooks/useActions"
import css from "../styles/Header.module.css"
import { Locale } from "../models/LocaleState"

const Nav: FC = () => {
  const { isAuth, user } = useAppSelector(authSelector)
  const activeLocale = useAppSelector(localeSelector)

  const { logout, toggleVisible, setLocale } = useActions()

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
              {activeLocale === Locale.en ? "Add Event" : "Добавить событие"}
            </Button>
            <span>
              <Switch
                defaultChecked={activeLocale === Locale.en ? true : false}
                checkedChildren="en"
                unCheckedChildren="ru"
                onChange={() => setLocale()}
                style={{ backgroundColor: "#ff4d4f" }}
              />

              <Button
                className={[css.navItem, css.logout].join(" ")}
                type="primary"
                onClick={() => logout(user.username)}
              >
                {activeLocale === Locale.en ? "Logout" : "Выйти"}
              </Button>
            </span>
          </div>
        )}
      </Layout.Header>
    </Layout>
  )
}

export default Nav
