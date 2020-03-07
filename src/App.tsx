// React Imports
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

// Custom Imports
import LandingPage from './pages/LandingPage'
import EventListPage from './pages/EventListPage';

// This is the main app component
function App() {
   return (
      <Router>
         <div className="bg-blue-200 text-blue-900">
            <EventListPage />
         </div>
      </Router>
   );
}

export default App;
