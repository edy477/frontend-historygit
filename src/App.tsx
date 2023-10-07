import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageList from "./Stats/PageList.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PageList/>

    </>
  )
}

export default App
