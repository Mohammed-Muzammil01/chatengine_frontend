import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/logo192.png';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Chatbot = () => {
    const API_KEY = process.env.REACT_APP_openai_secret_key;
    const {id} = useParams();
    const [botData, setBotData] = useState();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/chatbot/getChatBot/${id}`);
          setBotData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }, []);

    const [isListening, setListening] = useState(false);
    const chatContainerRef = useRef(null);

    const [conversation, setConversation] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const systemMessage = {
        "role": "system", "content": botData?.botIntent
      }
    const handleSend = async(e) => {
        if (e.key === 'Enter') {
            const updatedConversation = [...conversation, { message: inputMessage, direction: 'outgoing', sender: 'user' }];
            setConversation(updatedConversation);
            setListening(false);   
            setInputMessage(''); 
            await processMessageToChatGPT(updatedConversation);
        } else {
            setListening(true);
        }
    };

    async function processMessageToChatGPT(chatMessages) { 
        let apiMessages = chatMessages.map((messageObject) => {
          let role = "";
          if (messageObject.sender === "ChatGPT") {
            role = "assistant";
          } else {
            role = "user";
          }
          return { role: role, content: messageObject.message}
        });
    
        const apiRequestBody = {
          "model": "gpt-3.5-turbo",
          "messages": [
            systemMessage,
            ...apiMessages
          ]
        }
    
        try {
          const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${API_KEY}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody)
          });
        
          if (!response.ok) {
            throw new Error("API request failed with status: " + response.status);
          }
        
          const data = await response.json();
        
          setConversation([...chatMessages, {
            message: data.choices[0].message.content,
            sender: "ChatGPT"
          }]);
        } catch (error) {
          console.error("Error in API call:", error);
        }
      }

    useEffect(() => {
        // Scroll to the bottom of the chat when new messages are added
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop =
                chatContainerRef.current.scrollHeight;
        }
    }, [conversation]);
    

    return (
        <>
      <Navbar />

        <div className="chatbot-container">
            <div className="chatbot-box">
                <div className="chatbot-header">
                    <img src={Logo} alt="Logo" className="chatbot-logo" />
                    <h1 className="tittle">Chatbot Name</h1>
                </div>
                <div className="messages-container" ref={chatContainerRef}>
                    {conversation.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${
                                message.sender === 'ChatGPT'
                                    ? 'chatbot-message'
                                    : message.sender === 'user'
                                    ? 'user-input-message'
                                    : ''
                            }`}
                        >
                            {message.message}
                        </div>
                    ))}
                    {isListening && (
                        <div className="listening-message">
                            Chatbot is listening...
                        </div>
                    )}
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyUp={handleSend}
                        className="input-field"
                        value={inputMessage}
                    />
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Chatbot;
