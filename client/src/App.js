import React from 'react'
import MainPage from './components/mainpage'
import MakeSubmissions from './components/mskeSubmissions'
import ViewSubmissions from './components/viewSubmissions'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/makesubmission',
      element: <MakeSubmissions />,
    },
    {
      path: '/viewsubmissions',
      element: <ViewSubmissions />,
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
