import ErrorPage from "./soup_ng/web_pages/ErrorPage"
import HomePage from "./soup_ng/web_pages/HomePage"
import SoupPage from "./soup_ng/web_pages/SoupPage"
import SoupsPage from "./soup_ng/web_pages/SoupsPage"

import { createHashRouter, RouterProvider } from "react-router-dom"

function App() {

  const router = createHashRouter([

    {
      path: "/",
      element: <HomePage />
    },

    {
      path: "/soups",
      element: <SoupsPage />
    },

    {
      path: "/soup/:soupId",
      element: <SoupPage />
    },

    {
      path: "*",
      element: <ErrorPage />
    }
  ])

  return (

    <RouterProvider router={router} />
  )
}

export default App
