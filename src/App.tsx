import { Container } from '@mui/material';
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AppBar from './AppBar/AppBar';
import StatusCard from './StatusCard/StatusCard';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Container maxWidth={false} style={{ paddingTop: "1rem" }}>
        <StatusCard />
      </Container>
    </div>
  );
}

export default App;
