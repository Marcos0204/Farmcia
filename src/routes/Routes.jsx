import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import Layout from '../components/Layout/Layout';
import Beauty from '../pages/beauty/Beauty';
import  Medicines from '../pages/medicines/Medicines'
import Search from '../pages/search/Search';
import Login from '../pages/admin/login/Login';
import PublicRoute from './PublicRoute';



const routes = () => {
  return (
      <Routes>
        
          <Route path="/" element={
            <PublicRoute>
              <Home />
            </PublicRoute>  
          } />
          <Route path="/medicamentos" element={
            <PublicRoute>
              <Medicines />
            </PublicRoute>  
          } />
          
          <Route path="/belleza" element={
            <PublicRoute>
               <Beauty />
            </PublicRoute>  
          } />
          <Route path="/buscar" element={
            <PublicRoute>
                <Search />        
            </PublicRoute> 
          } />
          <Route path="/login" element={
            <PublicRoute>
                <Login />        
            </PublicRoute> 
          } />
          
    </Routes>

  )
}

export default routes
