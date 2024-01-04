import '@mantine/core/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import MainAppShell from './pages/mainAppShell';
import Login from './pages/login';
import HomePage from './pages/mainAppShell';
import MyCrops from './pages/myCrops';
import Dashboard from './pages/dashboard';
import ShowInfo from './pages/showInfo';
import StoreInFirebase from './pages/storeInFirebase';
import { useState } from 'react';

export default function App() {

  const [dataFromStore, setDataFromStore] = useState(null);

  return (
    <MantineProvider>
      <Router>
        <MainAppShell>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/myCrops" element={<MyCrops />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/showInfo" element={<ShowInfo data={dataFromStore}/>} />
            <Route path="/storeInFirebase" element={<StoreInFirebase onDataStored={(data) => setDataFromStore(data)}/>} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </MainAppShell>
      </Router>
    </MantineProvider>
  );
}
