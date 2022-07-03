import React from 'react';
import { Main } from './components/main';
import styles from './app.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Result } from './components/result';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='api/testing/:id/testing' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
