import React from 'react'
import AppBar from '../AppBar/AppBar'

const Layout = ({ children }) => {
  return (
    <>
      <AppBar/>
      {children}
    </>
  )
}

export default Layout
