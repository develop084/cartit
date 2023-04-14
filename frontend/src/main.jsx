import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/Counter';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home'
import Add from './pages/Add';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Provider store={store}><App/></Provider>,
  },
  {
    path: '*',
    element: <p>404</p>,
  }, 
  {
    path: '/home', 
    element:<Home/>
  },{
    path: '/add',
    element: <Add/>
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>  
    <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
