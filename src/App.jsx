import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import { RouterProvider } from 'react-router'

import AbtPg from './Pages/AbtPg'
import Products from './Pages/Products'
import AdCorePg from './Pages/AdCorePg'
import IntelligencePg from './Pages/IntelligencePg'
import Connect from './Components/Connect'
import Privacy from './Pages/Privacy'
import Terms from './Pages/Terms'

const App = () => {
  const router= createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/about',
          element:<AbtPg/>
        },
        {
          path:'/products',
          element:<Products/>
        },
        {
          path:'/adcore-engine',
          element:<AdCorePg/>
        },
        {
          path:'/intelligence-stack',
          element:<IntelligencePg/>
        },
        {
          path:'/connect',
          element:<Connect/>
        },
        {
          path:'/privacy-policy',
          element:<Privacy/>
        },
        {
          path:'/terms',
          element:<Terms/>
        },
      ]
    
    }
  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider> 
    </div>
  )
}

export default App