import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import Layout from '../components/Layout/Layout';
import Beauty from '../pages/beauty/Beauty';
import  Medicines from '../pages/medicines/Medicines'


const routes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicamentos" element={<Medicines />} />
        <Route path="/belleza" element={<Beauty />} />
      </Routes>
    </Layout>
  )
}

export default routes
