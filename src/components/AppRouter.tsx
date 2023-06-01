import { FC } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { useAppSelector } from "../hooks/useRedux"
import { privateRoutes, publicRoutes, routePath } from "../routes"
import { authSelector } from "../store/selectors"

const AppRouter: FC = () => {
  const { isAuth } = useAppSelector(authSelector)
  return (
    <div>
      {isAuth ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
          <Route path="/*" element={<Navigate to={routePath.HOME} replace />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
          <Route
            path="/*"
            element={<Navigate to={routePath.LOGIN} replace />}
          />
        </Routes>
      )}
    </div>
  )
}

export default AppRouter
