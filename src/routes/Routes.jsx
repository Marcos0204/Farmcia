import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home';

const routes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default routes
