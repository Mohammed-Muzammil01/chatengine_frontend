import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const UserAccount = () => {
  const [userDetails, setUserDetails] = useState(null);

  // Simulating user details fetch from an API
  useEffect(() => {
    // Simulated user details
    const fetchedUserDetails = {
      name: "John Doe",
      email: "john@example.com",
      tier: "Gold",
      // Add more user details as needed
    };

    setUserDetails(fetchedUserDetails);
  }, []);

  return (
    <>
      <Navbar />
      <div className="user-account-container">
        <h1>My Account</h1>
        {userDetails && (
          <div className="user-details">
            <h2>{userDetails.name}</h2>
            <p>Email: {userDetails.email}</p>
            <p>Tier: {userDetails.tier}</p>
            {/* Add more user details here */}
          </div>
        )}
        {!userDetails && <p>Loading user details...</p>}
      </div>
      <Footer />
    </>
  );
};

export default UserAccount;
