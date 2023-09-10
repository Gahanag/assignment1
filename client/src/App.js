import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoaderPage from './components/LoaderPage';
import ResultPage from './components/ResultPage';
import RequestCallbackPopup from './components/RequestCallbackPopup';
import SuccessMessage from './components/SuccessMessage';
import VideoInfo from './components/VideoInfo';

function App() {
  return (
    <Router>
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/loader" element={<LoaderPage />} />
    <Route path="/result" element={<ResultPage />} />
    <Route path="/callback" element={<RequestCallbackPopup />} />
    <Route path="/success" element={<SuccessMessage />} />
  </Routes>
</Router>

  );
}

export default App;
