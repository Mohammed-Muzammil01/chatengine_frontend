import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RestaurantBot() {

    const [botName, setBotName] = useState('');
    const [resName, setResName] = useState('');
    const [resMenu, setResMenu] = useState('');
    const [resNum, setresNum] = useState('');

    const user = localStorage.getItem("user");
    const navigate = useNavigate();

    const data = {
        botName,
        resName,
        resMenu,
        resNum,
        type: "rBot",
    }

    const createChatBot = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/chatbot/createChatBot", data, {
                headers: {
                  Authorization: `${user}`,
                },
              });
            navigate("/yourbots");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Navbar />

            <div className='usecaseForm-container'>
                <div className='m-4'><h1>Build Restaurant Bot</h1>
                </div>

                <div className="usecaseForm">
                    <div className="usecase-fields">
                        <label >Bot Name:</label>
                        <input onChange={(e) => setBotName(e.target.value)} type="text" />
                    </div>

                    <div className="usecase-fields">
                        <label >Restaurant Name:</label>
                        <input onChange={(e) => setResName(e.target.value)} type="text" required/>
                    </div>

                    <div className="usecase-fields">
                        <label >Restaurant Menu:</label>
                        <textarea required onChange={(e) => setResMenu(e.target.value)} />

                    </div>

                    <div className="usecase-fields">
                        <label >Restaurant no.:</label>
                        <input type="number" onChange={(e) => setresNum(e.target.value)}/>
                    </div>

                </div>
                <button className='btn-primary'
                onClick={createChatBot}
                style={{
                    marginTop: "10px",
                    padding: "10px",
                    fontSize: "1.2rem",
                    borderRadius: "12px",
                    backgroundColor: "#223c4b",
                    border: "none",
                    // border: "2px solid black",
                    color: "var(--customGreen)",
                    transition: "background-color 0.3s, color 0.3s",
                    marginBottom:"2rem"
                }}>Submit</button>
            </div>
            <Footer />
        </>
    )
}
