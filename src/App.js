import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import AddSchedule from "./pages/AddSchedule/AddSchedule";
import AddEvent from "./pages/AddEvent/AddEvent";
import Schedules from "./pages/Schedules/Schedules";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/" Component={Main} />
        <Route path="/schedule/create" Component={AddSchedule} />
        <Route path="/event/create" Component={AddEvent} />
        <Route path="/schedule/manage" Component={Schedules} />
      </Routes>
    </Router>
  );
}

export default App;
