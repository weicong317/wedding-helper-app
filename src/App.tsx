import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import IpohPage from "@/pages/IpohPage";
import KuchingPage from "@/pages/KuchingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ipoh" element={<IpohPage />} />
        <Route path="/kuching" element={<KuchingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
