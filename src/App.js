import "./App.css";
import LandingPage from "./Pages/LandingPage.jsx";
import { Routes, Route } from "react-router-dom";
import UseCase from "./Pages/Usecase.jsx";
import Chatbot from "./Pages/Chatbot.jsx";
import YourChatBot from "./Pages/YourChatBot.jsx";
import UserDetails from "./Pages/UserProfile.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import UseCaseForm from "./Pages/UseCaseForm.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/usecase" element={<UseCase />} />
      <Route path="/yourbots" element={<YourChatBot />} />
      <Route path="/chatbot/:id" element={<Chatbot />} />
      <Route path="/userdetails" element={<UserDetails />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/portfoliobot" element={<UseCaseForm />} />
    </Routes>
  );
}

export default App;
