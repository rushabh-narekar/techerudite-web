// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
