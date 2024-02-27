import React from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./styles/activityUpdate.css";

function ActivityUpdate() {
  const location = useLocation();
  const { activityID } = location.state;

  const initialState = {
    activity: "",
    duration: 0
  };

  const [activity, setActivity] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
    console.log(activity);
  };

  const saveActivity = () => {
    var data = {
      activity: activity.activity,
      duration: activity.duration
    };

    setSubmitted(true);

    axios.put(
        `http://localhost:3001/api/putActivity/${activityID}`, data)
        .then((res) => {
            setActivity(res.data);
      });
  };

  const newActivity = () => {
    setActivity(initialState);
    setSubmitted(false);
  };

  return (
    <div>
      {submitted ? (
        <div className="success-container">
          <h3 className="success">Successfully updated!</h3>
          <button className="success-button" onClick={newActivity}>
            Update again!
          </button>
        </div>
      ) : (
        <div className="update-container">
          <div className="update-box">
          <form className="update-form">
            <h2 className="title">Update activity.</h2>
            <input
              type="text"
              name="activity"
              id="activity"
              placeholder="Type of workout"
              value={activity.activity}
              onChange={handleInputChange}
            ></input>
            <input
              type="number"
              name="duration"
              id="duration"
              placeholder="Duration of a workout"
              value={activity.duration}
              onChange={handleInputChange}
            ></input>
            <button
              className="submit-button"
              type="button"
              name="submit-button"
              value="Add"
              onClick={saveActivity}
            >
              Update
            </button>
          </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ActivityUpdate;