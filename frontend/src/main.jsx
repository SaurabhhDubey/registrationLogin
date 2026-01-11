import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import  "./App.css"

import Registration from './components/Registration.jsx';
import Login from './components/Login.jsx';



const router = createBrowserRouter([
  {path:"/" , element: <Registration/>},
  {path:"/login" , element: <Login/>},
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
