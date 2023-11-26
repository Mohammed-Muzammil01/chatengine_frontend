import './App.css';
import LandingPage from './Pages/LandingPage.jsx';
import { Routes, Route } from 'react-router-dom';
import UseCase from './Pages/Usecase.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/usecase' element={<UseCase/>} />
      
    </Routes>
  );
}

export default App;
