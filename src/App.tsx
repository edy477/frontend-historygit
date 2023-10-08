import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageList from "./Stats/PageList.tsx";
import IndexPage from "./Stats/IndexPage.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <IndexPage/>

    </>
  )
}

export default App
