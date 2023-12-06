
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import { useState } from 'react'

export default function OtherBot() {

    const [botName, setBotName] = useState('');
    const [botIntent, setBotIntent] = useState('');
    
    const data = {
        botName,
        botIntent
    }
    return (
        <>
            <Navbar />

            <div className='usecaseForm-container'>
                <div className='m-4'><h1>Build Your Own Bot</h1>
                </div>

                <div className="usecaseForm">
                    <div className="usecase-fields">
                        <label >Bot Name:</label>
                        <input type="text"onChange={(e)=>setBotName(e.target.value)} />
                    </div>

                    <div className="usecase-fields">
                        <label >Bot Intent:</label>
                        <textarea required onChange={(e)=>setBotIntent(e.target.value)}/>

                    </div>

                </div>
                <button className='btn-primary' style={{
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
