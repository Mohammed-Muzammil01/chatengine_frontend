import Navbar from "../Components/Navbar"
import { FaBriefcase } from "react-icons/fa";

export default function UseCase() {
    return (
        <>
            <Navbar />
            <p className="usecase-heading">Choose your usecase:</p>
            <div className="container">
                <div className="cards">
                    <div className="caqrd">
                    <FaBriefcase className="case"/>
                    <h3>Portfolio Bot</h3>
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

                <div className="cards">
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
        </>
    )
}