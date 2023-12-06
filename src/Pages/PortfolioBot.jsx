
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import { useState } from 'react'

export default function PortfolioBot() {

    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [dob, setdob] = useState("");
    const [experience, setExperience] = useState("");
    const [languages, setLanguages] = useState("");
    const [education, setEducation] = useState("");
    const [skills, setSkills] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [city, setCity] = useState("");
    const [phnum, setPhnum] = useState("");
    const [email, setEmail] = useState("");
    const [extras, setExtras] = useState("");

    const data = {
        name,
        designation,
        dob,
        experience,
        languages,
        education,
        skills,
        hobbies,
        github,
        linkedin,
        city,
        phnum,
        email,
        extras,
        type: "pBot", 
    }

    return (
        <>
            <Navbar />

            <div className='usecaseForm-container'>
                <div className='m-4'><h1>Build Portfolio Bot</h1>
                </div>

                <div className="usecaseForm">
                    <div className="usecase-fields">
                        <label >Full Name:</label>
                        <input type="text" onChange={(e)=>setName(e.target.value)} required/>
                    </div>

                    <div className="usecase-fields">
                        <label >Designation:</label>
                        <input type="text" onChange={(e)=>setDesignation(e.target.value)} />
                    </div>

                    <div className="usecase-fields">
                        <label >Date of Birth:</label>
                        <input type="date" onChange={(e)=>setdob(e.target.value)}  />
                    </div>

                    <div className="usecase-fields">
                        <label >Work Exprience:</label>
                        <textarea onChange={(e)=>setExperience(e.target.value)} />

                    </div>

                    <div className="usecase-fields">
                        <label >Languages Know:</label>
                        <textarea onChange={(e)=>setLanguages(e.target.value)} />
                    </div>

                    <div className="usecase-fields">
                        <label >Education history:</label>
                        <textarea onChange={(e)=>setEducation(e.target.value)}/>
                    </div>

                    <div className="usecase-fields">
                        <label >Skillset:</label>
                        <textarea required onChange={(e)=>setSkills(e.target.value)}/>
                    </div>

                    <div className="usecase-fields">
                        <label >Hobbies:</label>
                        <textarea onChange={(e)=>setHobbies(e.target.value)}/>
                    </div>

                    <div className="usecase-fields">
                        <label >Github link:</label>
                        <input type="text" required onChange={(e)=>setGithub(e.target.value)}/>
                    </div>

                    <div className="usecase-fields">
                        <label >LinkedIn link:</label>
                        <input type="text" required onChange={(e)=>setLinkedin(e.target.value)} />
                    </div>

                    <div className="usecase-fields">
                        <label >City:</label>
                        <input type="text" onChange={(e)=>setCity(e.target.value)} />
                    </div>

                    <div className="usecase-fields">
                        <label >Phone number:</label>
                        <input type="number" required onChange={(e)=>setPhnum(e.target.value)} />
                    </div>

                    <div className="usecase-fields">
                        <label >Work email:</label>
                        <input type="email" required onChange={(e)=>setEmail(e.target.value)} />
                    </div>

                    <div className="usecase-fields">
                        <label >Extras:</label>
                        <textarea onChange={(e)=>setExtras(e.target.value)}/>
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
