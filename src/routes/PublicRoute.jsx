import React from 'react'
import Layout from '../components/Layout/Layout'
import { useNavigate }  from 'react-router-dom'


const PublicRoute = ({ children }) => {
    const isAuth = false
  return !isAuth ?
        <Layout>
            {children}
        </Layout>
    : <h1>no sirveee</h1>
  
}

export default PublicRoute
