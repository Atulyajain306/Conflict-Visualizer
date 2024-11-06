import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import About from "./components/About.jsx" 
import Visualize from "./components/Visualize.jsx"
import Europe from './components/Europe.jsx'
import Oceania from './components/Oceania.jsx'
import South_Asia from './components/South_Asia.jsx'
import Central_Asia from './components/Central_Asia.jsx'
import East_Asia from './components/East_Asia.jsx'
import North_America from './components/North_America.jsx'
import South_America from './components/South_America.jsx'
import Africa from './components/Africa.jsx'
import South_East_Asia from './components/South_East_Asia.jsx'
import Middle_East from './components/Middle_East.jsx'
import Central_America from './components/Central_America.jsx'
const router=createBrowserRouter([
  {
    path:"/home",
    element:<App/>
  },
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/about",
    element:<About/> 
  },
  {
    path:"/analysis",
    element:<Visualize/>
  },
  {
    path:"/analysis/Europe",
    element:<Europe/>

  },
  {
    path:"/analysis/Oceania",
    element:<Oceania/>
  },
  {
    path:"/analysis/South_Asia",
    element:<South_Asia/>
  },
  {
    path:"/analysis/Central_Asia",
    element:<Central_Asia/>
  },
  {
    path:"/analysis/East_Asia",
    element:<East_Asia/>
  },
  {
    path:"/analysis/North_America",
    element:<North_America/> 
  },
  {
    path:"/analysis/South_America", 
    element:<South_America/>
  },
  {
    path:"/analysis/Africa",
    element:<Africa/>
  },
  {
    path:"/analysis/South_East_Asia",
    element:<South_East_Asia/>
  },
  {
    path:"/analysis/Central_America",
    element:<Central_America/>
  },
  {
    path:"/analysis/Middle_East",
    element:<Middle_East/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router={router}/>
  </StrictMode>,
)
