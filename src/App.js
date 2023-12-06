import "./App.css";
import LandingPage from "./Pages/LandingPage.jsx";
import { Routes, Route } from "react-router-dom";
import UseCase from "./Pages/Usecase.jsx";
import Chatbot from "./Pages/Chatbot.jsx";
import YourChatBot from "./Pages/YourChatBot.jsx";
import UserDetails from "./Pages/UserProfile.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import PortfolioBot from "./Pages/PortfolioBot.jsx";
import OtherBot from "./Pages/OtherBot.jsx";
import RestaurantBot from "./Pages/RestaurantBot.jsx";
import CustomerServiceBot from "./Pages/CustomerServiceBot.jsx";

function App() {

  const user = localStorage.getItem("user");

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/usecase" element={user ? <UseCase /> : <LoginSignup />} />
      <Route path="/yourbots" element={ user ? <YourChatBot /> : <LoginSignup /> } />
      <Route path="/chatbot/:id" element={<Chatbot />}/>
      <Route path="/userdetails" element={user ? <UserDetails /> : ''} />
      <Route path="/login" element={!user ? <LoginSignup /> : ''} />
      <Route path="/usecase/portfoliobot" element={user ? <PortfolioBot />: <LoginSignup /> } />
      <Route path="/usecase/otherbot" element={user ? <OtherBot /> : <LoginSignup />} />
      <Route path="/usecase/restaurantbot" element={user ? <RestaurantBot /> : <LoginSignup />} />
      <Route path="/usecase/customerservicebot" element={user ? <CustomerServiceBot /> : <LoginSignup />} />
    </Routes>
  );
}

export default App;
