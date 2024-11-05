import React, { memo } from 'react';
import type { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { First_page } from './components/First_page/First_page';
import { Swap_app } from './components/Swap_page/Swap_app';

interface Props {
  className?: string;
}

export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <Router>
      <div className={`${resets.webViewResets} ${classes.root}`}>
        <Routes>
          <Route path="/" element={<First_page />} />
          <Route path="/swap" element={<Swap_app />} />
        </Routes>
      </div>
    </Router>
  );
});
