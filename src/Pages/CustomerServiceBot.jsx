
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CustomerServiceBot() {

    const [botName, setBotName] = useState('');
    const [company, setCompany] = useState('');
    const [about, setAbout] = useState('');
    const [phnum, setPhnum] = useState('');
    const [email, setEmail] = useState('');
    const [faqs, setFaqs] = useState('');

const user = localStorage.getItem("user");
const navigate = useNavigate();

    const data = {
        botName,
        company,
        about,
        phnum,
        email,
        faqs,
        type: "csBot",
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
                <div className='m-4'><h1>Build Customer Service Bot</h1>
                </div>

                <div className="usecaseForm">
                    <div className="usecase-fields">
                        <label >Bot Name:</label>
                        <input type="text" onChange={(e)=>setBotName(e.target.value)} />
                    </div>

                    <div className="usecase-fields">
                        <label >Company Name:</label>
                        <input type="text" required onChange={(e)=>setCompany(e.target.value)} />
                    </div>


                    <div className="usecase-fields">
                        <label >Company About:</label>
                        <textarea onChange={(e)=>setAbout(e.target.value)}/>

                    </div>

                    <div className="usecase-fields">
                        <label >Help Desk No.:</label>
                        <input type="number" required onChange={(e)=>setPhnum(e.target.value)} />
                    </div>


                    <div className="usecase-fields">
                        <label >Email:</label>
                        <input type="email" required onChange={(e)=>setEmail(e.target.value)} />
                    </div>

                    <div className="usecase-fields">
                        <label >FAQs:</label>
                        <textarea onChange={(e)=>setFaqs(e.target.value)}/>

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
                    color: "var(--customGreen)",
                    transition: "background-color 0.3s, color 0.3s",
                    marginBottom:"2rem"
                }}>Submit</button>
            </div>
            <Footer />
        </>
    )
}
