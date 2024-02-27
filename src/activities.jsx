import React from "react";
import "./styles/activities.css";
import "react-calendar/dist/Calendar.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import axios from "axios";
import service from "./service";

function Activities() {
  const [date, setDate] = useState(new Date());
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState(0);
  const [data, setData] = useState([]);
  const userID = localStorage.getItem("userID");
  const roleID=localStorage.getItem("roleID");


  useEffect(() => {
      let isMounted = true;
      if(roleID==="1"){
        service.getActivityByDate(date.toJSON().slice(0, 10)).then((res) => {
          if(isMounted){
            setData(res.data);
            console.log(res.data);
          }
        });
      }else if(roleID==="2"){
        service.getActivityByID(date.toJSON().slice(0,10),userID).then((res)=>{
          if(isMounted){
            setData(res.data);
            console.log(res.data);
          }
      });}
      return () => {
        isMounted = false;
      };
  }, [date]);
  useEffect(()=>{
    console.log(date);
  },[date]);
  const submit = () => {
    axios.post("http://localhost:3001/api/activity/",
      {
        activity: activity,
        duration: duration,
        userID: userID,
        date: date.toJSON().slice(0, 10)
      }).then(() => {
        console.log(date.toJSON().slice(0, 10));
      });
  };
  const deleteActivity = (id) => {
    axios.delete(`http://localhost:3001/api/delete/${id}`).then((res) => {
      setTimeout(function(){
        window.location.reload();
      });
    })
  }

  const onChange = date => {
    setDate(date);
  };

  const activities = data.map((data) => {
    return (
      <div className="activity-container">
        <div className="activity-flex">
          <div className="activity-naming">
            {roleID==1 && <h1>UserID:  {data.userID}</h1>}
            <h2 className="activity-title">{data.activity}</h2>
            <div>
              <h4 className="activity-duration">
                <b>Duration:</b> {data.duration} min
              </h4>
              <h4 className="activity-duration">
                <b>Calories:</b> {data.duration*3} kcal
              </h4>
              <button className="user-edit-button" onClick={() => deleteActivity(data.id)}>Delete</button>
              <Link
                className="link"
                to={`/activity/updateActivity/${data.id}`}
                state={{ activityID: data.id }}
              >
                <button className="user-edit-button" >Edit</button>
              </Link>
            </div>
      
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="calendar-container">
        <div className="calendar-box">
          <h3 className="title">Pick a date.</h3>
          <div className="calendar">
            <Calendar showWeekNumbers onChange={onChange} value={date} />
          </div>
        </div>
      </div>
      <div className="workout-container">
        <div className="workout-box">
          <h3 className="title">Add a workout for {date.toDateString()}.</h3>

          <form className="workout-form" autoComplete="off">
            <input
              type="text"
              name="activity"
              placeholder="Type of workout"
              id="activity"
              onChange={(e) => {
                setActivity(e.target.value);
              }}
              required
            />
            <input
              type="number"
              name="duration"
              id="duration"
              placeholder="Duration of workout in mins"
              onChange={(e) => {
                setDuration(e.target.value);
              }}
              required
            />
            <button
              type="button"
              className="submit-button"
              value="submit"
              onClick={submit}
            >
              Add activity
            </button>
          </form>
        </div>
      </div>
      <br />
      <h3 className="title-act">Your planned activities for {date.toDateString()}: </h3>
      {activities}
    </div>
  );
}
export default Activities;
