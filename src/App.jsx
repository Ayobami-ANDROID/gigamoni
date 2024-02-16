import { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage";

import { ToastContainer, toast } from "react-toastify";


function App() {
  const [count, setCount] = useState(0);
  const token = localStorage.getItem("LoggedIntoken");

  return (
    <div>
      {/* <RemoveScrollBar /> */}
      <ToastContainer position="top-center" autoClose={2000} />
      <LandingPage/>
    </div>
  );
}

export default App;
