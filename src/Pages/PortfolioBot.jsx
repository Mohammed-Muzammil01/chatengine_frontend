
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"

export default function PortfolioBot() {

    return (
        <>
            <Navbar />

            <div className='usecaseForm-container'>
                <div className='m-4'><h1>Build Portfolio Bot</h1>
                </div>

                <div className="usecaseForm">
                    <div className="usecase-fields">
                        <label >Full Name:</label>
                        <input type="text" />
                    </div>

                    <div className="usecase-fields">
                        <label >Designation:</label>
                        <input type="text" />
                    </div>

                    <div className="usecase-fields">
                        <label >Date of Birth:</label>
                        <input type="date" />
                    </div>

                    <div className="usecase-fields">
                        <label >Work Exprience:</label>
                        <textarea />

                    </div>

                    <div className="usecase-fields">
                        <label >Languages Know:</label>
                        <textarea />
                    </div>

                    <div className="usecase-fields">
                        <label >Education history:</label>
                        <textarea />
                    </div>

                    <div className="usecase-fields">
                        <label >Skillset:</label>
                        <textarea />
                    </div>

                    <div className="usecase-fields">
                        <label >Hobbies:</label>
                        <textarea />
                    </div>

                    <div className="usecase-fields">
                        <label >Github link:</label>
                        <input type="text" />
                    </div>

                    <div className="usecase-fields">
                        <label >LinkedIn link:</label>
                        <input type="text" />
                    </div>

                    <div className="usecase-fields">
                        <label >City:</label>
                        <input type="text" />
                    </div>

                    <div className="usecase-fields">
                        <label >Phone number:</label>
                        <input type="number" />
                    </div>

                    <div className="usecase-fields">
                        <label >Work email:</label>
                        <input type="email" />
                    </div>

                    <div className="usecase-fields">
                        <label >Extras:</label>
                        <textarea />
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
