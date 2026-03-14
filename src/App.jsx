import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './ProductList'
import Header from './Head'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header>

    </Header>
      <ProductList>
        
      </ProductList>
        
    </>
  )
}

export default App
