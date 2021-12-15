import React from 'react';
import { Container } from '@mui/material';
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
