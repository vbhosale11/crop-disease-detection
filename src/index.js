import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  //put your mantine theme overrides here
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MantineProvider>
);

