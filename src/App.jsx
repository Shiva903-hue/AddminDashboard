import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Reports from './Component/Reports';
import PendingApprovle from './Component/PendingApprovle';

export default function App() {
  return (
    <div>
     
      <Dashboard/>
     
    </div>
  )
}
