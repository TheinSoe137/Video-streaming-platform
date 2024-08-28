import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
// import Login from "../components/Login.jsx";
// import Register from "./components/Register";
// import other components

const Routes = () => (
  <Router>
    <Route path="/" exact component={HomePage} />
    {/* <Route path="/login" component={Login} />
      <Route path="/register" component={Register} /> */}
    {/* Add more routes */}
  </Router>
);

export default Routes;
