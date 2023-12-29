import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='main'style={{backgroundColor:'#f1f1f1'}}>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Layout