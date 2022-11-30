import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import GymInfo from "./gymInfo";
import UserProfile from "./userProfile";
import Activities from "./activities";
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
          <Route path="/activities" exact element={<Activities/>}></Route>
        </Routes>
    </div>
    </Router>
    );
}

export default App;