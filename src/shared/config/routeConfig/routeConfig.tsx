import { About } from 'pages/About/About';
import { MainPage } from 'pages/MainPage';
import { NotfoundPage } from "pages/NotFoundPage"
import { RouteProps } from "react-router-dom"


export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoutes {
  MAIN = "main",
  ABOUT ="about",

  // last
  NOTFOUND = "not_found",
}

export const RoutesPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOTFOUND]: "*",
}

export const routesConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPaths.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutesPaths.about,
    element: <About />,
    authOnly: true
  },
  // last
  [AppRoutes.NOTFOUND]: {
    path: RoutesPaths.not_found,
    element: <NotfoundPage />
  }
}