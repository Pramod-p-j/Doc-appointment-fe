import React, { useState } from "react";
import { Link } from 'react-router-dom';

function HomeScreen() {
  const [searchText, setSearchText] = useState("");
  const searchHandler = (e) => {
    setSearchText(e?.target?.value);
  };

  return (
    <div>
      <div className="searchBar">
        <input
          autoComplete="off"
          className="searchField"
          type="text"
          name="search"
          id="search"
          placeholder="Search Clinic"
          value={searchText}
          onChange={(e) => searchHandler(e)}
        ></input>
      </div>
      <div className="home-page">
        <header>
          <h1>Welcome to Doctor Appointment Booking</h1>
          <p>
            Book appointments with ease and manage your healthcare appointments
            online.
          </p>
        </header>

        <section className="features">
          <div className="feature">
            <h2>Find the Right Doctor</h2>
            <p>
              Explore a list of clinics and available slots with detailed
              information about doctors and clinics.
            </p>
          </div>

          <div className="feature">
            <h2>Book Appointments</h2>
            <p>
              Book appointments with your preferred doctor and manage your
              schedule effortlessly.
            </p>
          </div>

          <div className="feature">
            <h2>Easy Rescheduling</h2>
            <p>
              Reschedule appointments with ease and set preferences for
              available time slots.
            </p>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>
            Create an account or log in to manage your appointments and access
            personalized services.
          </p>
          <div className="cta-buttons">
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomeScreen;
