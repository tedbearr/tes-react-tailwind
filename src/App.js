import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Breadcumb from "./components/Breadcumb";
import Login from "./pages/Login";

function App() {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="flex flex-col h-full overflow-auto w-full bg-slate-200">
        <Router>
          <Navbar />
          <Breadcumb />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
