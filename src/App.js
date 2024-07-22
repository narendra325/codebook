import React from 'react'
import Header from "../src/components/layout/Header"
import Footer from "../src/components/layout/Footer"
import Allroutes from './routes/Allroutes'

const App = () => {
  return (
    <div className='App dark:bg-gray-900'>
    <Header/>
    <Allroutes/>
    <Footer/>
    </div>
  )
}

export default App
