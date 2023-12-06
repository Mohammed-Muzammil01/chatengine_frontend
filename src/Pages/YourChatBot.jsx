import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { SiChatbot } from "react-icons/si";
import axios from "axios";
import { Link } from "react-router-dom";

const YourChatBot = () => {

  const user = localStorage.getItem("user");
  const [bots, setBots] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/chatbot/getAllChatBots", {
          headers: {
            Authorization: `${user}`,
          },
        });
        setBots(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="YourChatBot-con">
        <h1>Your ChatBots :</h1>
        {bots?.map((chatbot, index) => (
          <div key={index} className="YourChatBot-card">
            <div className="left">
              <h3>{chatbot.name || ""}</h3>
              <h5>Chatbot type: {chatbot.bot?.botType}</h5>
              <h5>System message: {chatbot.bot?.botIntent}</h5>
            </div>
            <div className="right">
              <div>
                <button>
                  <MdDelete className="delete" />
                </button>
              </div>
              <div>
                <button>
                  <FaEdit className="edit" />
                </button>
              </div>
              <div>
                <Link to={`/chatbot/${chatbot.bot?.botId}`}>
                  <SiChatbot className="chatbot" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default YourChatBot;
