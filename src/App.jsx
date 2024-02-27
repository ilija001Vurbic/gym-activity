import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import GymInfo from "./gymInfo";
import UserProfile from "./userProfile";
import Activities from "./activities";
import ActivityUpdate from "./updateActivity";
import EditProfile from "./editProfile";

function App() {
    return ( 
    <Router>
    <div >
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/login" exact element={<Login/>}></Route>
          <Route path="/register" exact element={<Register/>}></Route>
          <Route path="/about" exact element={<GymInfo/>}></Route>
          <Route path="/profile" exact element={<UserProfile/>}></Route>
          <Route path='/user/edit/:id' element ={<EditProfile />} />
          <Route path="/activities" exact element={<Activities/>}></Route>
          <Route path="/activity/updateActivity/:id" exact element={<ActivityUpdate/>}></Route>
        </Routes>
    </div>
    </Router>
    );
}

export default App;