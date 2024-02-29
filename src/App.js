import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/Home" exact element={<Home/>}/>
          <Route path="/Games" exact element={<Games/>}/>
          <Route path="/Profile" exact element={<Profile/>}/>
          <Route path="/Settings" exact element={<Settings/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
