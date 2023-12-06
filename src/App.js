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
import { useState } from "react";

function App() {

  const [user, setUser] = useState('');
  // const getUser = async () => {
  //   try {
  //     const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
  //     const {data} = await axios.get(url, {withCredentials: true});
  //     setUser(data.user && data.user._json);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // } 

  // useEffect(() => {
  //   getUser();
  //   console.log(user);
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/usecase" element={<UseCase />} />
      <Route path="/yourbots" element={user ? <YourChatBot /> : ''} />
      <Route path="/chatbot/:id" element={<Chatbot />}/>
      <Route path="/userdetails" element={user ? <UserDetails /> : ''} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/portfoliobot" element={<PortfolioBot />} />
      <Route path="/otherbot" element={<OtherBot />} />
      <Route path="/restaurantbot" element={<RestaurantBot />} />
      <Route path="/customerservicebot" element={<CustomerServiceBot />} />
    </Routes>
  );
}

export default App;
