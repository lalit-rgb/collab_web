import React from "react";
import LandingScreen1 from "./screens/LandingScreen1";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
const App = () => {
  return(
    <Router>
            <Link to="/"></Link>
        <Routes>
          <Route exact path='/' element={< LandingScreen1 />}></Route>
        </Routes>
    </Router>
  )
}

export default App