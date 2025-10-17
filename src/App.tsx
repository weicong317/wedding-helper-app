import { BrowserRouter, Route, Routes } from "react-router-dom";

import AirportParkingGuide from "@/pages/AirportParkingGuide";
import HomePage from "@/pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/airport-parking-guide" element={<AirportParkingGuide />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
