import { Header, Sidebar } from "./components/Index";
import "./App.css";
import { ProfilePopupCard } from "./components/Index";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen max-w-[1450px] mx-auto">
        <Header
          showProfilePopup={showProfilePopup}
          setShowProfilePopup={setShowProfilePopup}
        />

        {/* Popup exactly below header */}
        {showProfilePopup && (
          <div
            className="fixed inset-0 z-50 flex iteam-end justify-end bg-black/10"
            onClick={() => setShowProfilePopup(false)}
          >
            {/* Popup container */}
            <div
              className="mt-[100px] mr-[40px]"
              onClick={(e) => e.stopPropagation()}
            >
              <ProfilePopupCard />
            </div>
          </div>
        )}

        <div className="flex flex-1 ">
          <Sidebar />

          <div className="flex-1 p-6 justify-center items-center ">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
