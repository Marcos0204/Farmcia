import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import Layout from '../components/Layout/Layout';
import Beauty from '../pages/beauty/Beauty';
import  Medicines from '../pages/medicines/Medicines'
import Search from '../pages/search/Search';


const routes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicamentos" element={<Medicines />} />
        <Route path="/belleza" element={<Beauty />} />
        <Route path="/buscar" element={<Search />} />
      </Routes>
    </Layout>
  )
}

export default routes
