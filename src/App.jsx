// Import statements
// React Imports
import { useState } from 'react'

// React Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Custom Components
import Layout from './components/layout.jsx'

// Assets
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "about",
//     element: <About />,
//   },
//   {
//     path: "raw materials",
//     element: <Contact />,
//   },
//   {
//     path: "semi-finished-materials",
//     element: <Projects />,
//   },
//   {
//     path: "finished-goods",
//     element: <Project />,
//   }
// ], {
//   basename: "/packaging-design/",
// });


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <article>

        </article>
      </Layout>
    </>
  )
}

export default App
