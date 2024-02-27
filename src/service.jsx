import axios from "axios";

const getActivityByDate=(date)=>{
  return axios.get(`http://localhost:3001/api/getactivity/${date}`);
}
const getActivityByID=(date,id)=>{
  return axios.get(`http://localhost:3001/api/getactivity/${date}/${id}`);
}
const getUserByUsername = (username) => {
    return axios.get(`http://localhost:3001/api/login/${username}`);
  }

const putActivity = (id) =>{
  return axios.put(`http://localhost:3001/api/putActivity/${id}`)
}
  const service = {
    getUserByUsername,
    getActivityByDate,
    getActivityByID,
    putActivity
  };
  
  export default service;