import React from "react";
import "./styles/activities.css";

function Activities() {
  
  return (
    <div className="workout-container">
      <div className="workout-box">
        <h3 className="title">Add a workout for dd/mm/yyyy.</h3>

        <form className="workout-form" autoComplete="off">
          <input
            type="text"
            name="Workout"
            placeholder="Type of workout"
            id="workout"
            required
          />
          <input
            type="number"
            name="Duration"
            id="duration"
            placeholder="Duration of workout in mins"
            required
          />
          <button
            type="button"
            className="submit-button"
            value="submit"
          >
            Add activity
          </button>
        </form>
      </div>
    </div>
  );
}

export default Activities;
