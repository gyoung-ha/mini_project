import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { Helmet } from "react-helmet-async";


import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TripAdd from "./pages/TripAdd";
import TripDetail from "./pages/TripDetail";
import DayDetail from "./components/DayDetail";
import CostAdd from "./pages/CostAdd";
// import Calculator from "./pages/Calculator";

function App() {
  return (
    <>
    {/* <Helmet>
        <title>여행가게✈️</title>
    </Helmet> */}
    
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/trip" element={<TripAdd />} />
        <Route path="/tripDetail" element={<TripDetail />} />
        <Route path="/dayDetail" element={<DayDetail />} />
        <Route path="/cost" element={<CostAdd />} />
        {/* <Route path="/cost/{dayId}" element={<Calculator />} /> */}
        <Route path="*" element={<div>404 error 없는페이지입니다</div>} />
      </Routes>
    </>
  );
}

export default App;