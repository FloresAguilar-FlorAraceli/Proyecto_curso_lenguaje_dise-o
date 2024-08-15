// src/TabLink.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Hook para resaltar la pestaña activa
function useActiveLink(path) {
  const location = useLocation();
  return location.pathname === path ? 'active' : '';
}

// Componente TabLink para resaltar la pestaña activa
function TabLink({ to, path, children }) {
  const isActive = useActiveLink(path);
  return (
    <li>
      <Link to={to} className={isActive}>{children}</Link>
    </li>
  );
}

export default TabLink;
