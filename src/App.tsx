import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import IpohPage from "@/pages/IpohPage";
import KuchingPage from "@/pages/KuchingPage";
import RomPage from "@/pages/RomPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rom" element={<RomPage />} />
        <Route path="/ipoh" element={<IpohPage />} />
        <Route path="/kuching" element={<KuchingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
