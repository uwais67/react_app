import React from 'react'
import Header from './header'
import Footer from './footer'
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