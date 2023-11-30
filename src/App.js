import './App.css';
import LandingPage from './Pages/LandingPage.jsx';
import { Routes, Route } from 'react-router-dom';
import UseCase from './Pages/Usecase.jsx';
import YourChatBot from './Pages/YourChatBot.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/usecase' element={<UseCase/>} />
      <Route path="/yourchatbot" element={<YourChatBot/>} />
    </Routes>
  );
}

export default App;
