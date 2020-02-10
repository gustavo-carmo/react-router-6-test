import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="profile" element={<Profile />}>
        <Route path="/purchase" element={<h1>Compras</h1>} />
        <Route path="/password" element={<h1>Password</h1>} />
      </Route>

      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  )
}