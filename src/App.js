import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import MainBody from './Components/MainBody/MainBody'
import Footer from './Components/Footer/Footer'
import Course from './Components/MainBody/BodyContent/Course/Course'

const App = () => {
  return (
    <div className='App'>
       <Header/>
       <Course/> 
       <MainBody/>
       <Footer/>
    </div>
      
  )
}

export default App
