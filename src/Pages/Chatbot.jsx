import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/logo192.png';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [isListening, setListening] = useState(false);
    const chatContainerRef = useRef(null);

    const simulateChatbotResponse = (userInput) => {
        const chatbotResponse = `Chatbot: I heard you say "${userInput}"`;
        const userMessage = `You: ${userInput}`;

        setListening(false);
        setMessages([
            ...messages,
            { text: userMessage, type: 'user-input' },
            { text: chatbotResponse, type: 'chatbot' },
        ]);
    };

    const handleUserInput = (e) => {
        if (e.key === 'Enter') {
            simulateChatbotResponse(e.target.value);
            e.target.value = ''; // Clear the input after submitting
        } else {
            setListening(true);
        }
    };

    useEffect(() => {
        // Scroll to the bottom of the chat when new messages are added
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop =
                chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="chatbot-container">
            <div className="chatbot-box">
                <div className="chatbot-header">
                    <img src={Logo} alt="Logo" className="chatbot-logo" />
                    <h1 className="tittle">Chatbot Name</h1>
                </div>
                <div className="messages-container" ref={chatContainerRef}>
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${
                                message.type === 'chatbot'
                                    ? 'chatbot-message'
                                    : message.type === 'user-input'
                                    ? 'user-input-message'
                                    : ''
                            }`}
                        >
                            {message.text}
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
                        onKeyUp={handleUserInput}
                        className="input-field"
                    />
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
