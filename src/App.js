import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Breadcumb from "./components/Breadcumb";

function App() {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="flex flex-col h-full overflow-auto w-full bg-slate-300">
        <Navbar />
        <Breadcumb />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
