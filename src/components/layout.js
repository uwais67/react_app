import React from 'react'
import Header from './header'
import Footer from './footer'
import '../pages/style.css'
const layout = (porps) => {
  return (
    <div>
        <Header/>
        <main>
        {porps.children}
        </main>
        <Footer/>
    </div>
  )
}

export default layout