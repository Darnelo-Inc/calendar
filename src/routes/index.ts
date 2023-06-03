import Login from "../pages/Login"
import Home from "../pages/Home"
import { FC } from "react"

export interface IRoute {
  path: string
  element: FC
}

export enum routePath {
  HOME = "/calendar/",
  LOGIN = "/calendar/login",
}

export const publicRoutes: IRoute[] = [
  { path: routePath.LOGIN, element: Login },
]

export const privateRoutes: IRoute[] = [{ path: routePath.HOME, element: Home }]
