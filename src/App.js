import React, { useState } from 'react';
import './App.css';

import Header from './components/Header'
import Project from './components/Project'
import Footer from './components/Footer'

function App() {
  // nav categories array
  const [categories] = useState([
    {
      name: ""
    }
  ])

  return (
    <div className="App">
      <Header />
      <main>
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default App;
