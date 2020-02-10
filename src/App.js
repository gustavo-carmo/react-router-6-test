import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

function App() {
  return (
    <Router> 
      <div className="App">
        <h1>Hello world</h1>
      </div>
      <Routes />
    </Router>
  );
}

export default App;
