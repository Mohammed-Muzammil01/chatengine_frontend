
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"

export default function OtherBot() {

    return (
        <>
            <Navbar />

            <div className='usecaseForm-container'>
                <div className='m-4'><h1>Build Your Own Bot</h1>
                </div>

                <div className="usecaseForm">
                    <div className="usecase-fields">
                        <label >Bot Name:</label>
                        <input type="text" />
                    </div>

                    <div className="usecase-fields">
                        <label >Bot Intent:</label>
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