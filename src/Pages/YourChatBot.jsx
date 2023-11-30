import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { SiChatbot } from "react-icons/si";
const YourChatBot = () => {
    const chatbots = [
        { name: 'ChatBot 1', type: 'Type 1', systemMessage: 'Hello from ChatBot 1' },
        { name: 'ChatBot 2', type: 'Type 2', systemMessage: 'Hello from ChatBot 2' },
    ]
  return (
    <>
    <Navbar />
        <div className='YourChatBot-con'>
            <h1>Your ChatBots :</h1>
            {chatbots.map((chatbot, index) => (
          <div key={index} className='YourChatBot-card'>
            <div className='left'>
              <h3>{chatbot.name}</h3>
              <h3>{chatbot.type}</h3>
              <h3>{chatbot.systemMessage}</h3>
            </div>
            <div className='right'>
              <MdDelete className='delete' />
              <FaEdit className='edit' />
              <SiChatbot className='chatbot' />
            </div>
          </div>
        ))}
        </div>
        <Footer/>
    </>
  )
}

export default YourChatBot