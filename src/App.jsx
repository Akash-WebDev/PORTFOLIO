import { useState } from "react";
//import "./styles/portfolio.css";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Project from "./components/Projects";


export default function App() {
  const [activePage, setActivePage] = useState("about");

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "projects":
        return <Project/>;
      default:
        return <About />;
    }
  };

  return (
    <main>
      <Sidebar />

      <div className="main-content">
        <Navbar
          activePage={activePage}
          setActivePage={setActivePage}
        />

        {renderPage()}
      </div>
    </main>
  );
}