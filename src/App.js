import './App.css';
import LandingPage from './Pages/LandingPage.jsx';
import { Routes, Route } from 'react-router-dom';
import UseCase from './Pages/Usecase.jsx';
import Chatbot from './Pages/Chatbot.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/usecase' element={<UseCase/>} />
      {/* <Route path='/yourbots' element={<You/>} /> */}
      <Route path='/chatbot/:id' element={<Chatbot/>} />      
    </Routes>
  );
}

export default App;
