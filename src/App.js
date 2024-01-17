import Navbar from "./components/navbar/navbar.component";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="lato-light">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
