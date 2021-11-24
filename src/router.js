import { useRoutes } from "react-router-dom"
import { AppRoutes } from "constants/index"

import Navbar from "components/Navbar"
import Footer from "components/Footer"

import ComingSoon from "components/ComingSoon"
import NotFound from "components/NotFound"

import Dashboard from "containers/Dashboard"
import Verify from "containers/Verify"

const AppRouter = () => {
  let routes = useRoutes([
    { path: AppRoutes.Home, element: <Dashboard /> },
    { path: AppRoutes.Verify, element: <Verify /> },
    { path: AppRoutes.ComingSoon, element: <ComingSoon /> },
    { path: AppRoutes.NotFound, element: <NotFound /> },
  ])

  return (
    <>
      <Navbar />
      {routes}
      <Footer />
    </>
  )
}

export default AppRouter
