import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./header/Header";
import Homepage from "./pages/Homepage";
import Footer from "./footer/Footer";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Homepage}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="/about" Component={AboutUs}/>
          <Route path="/services" Component={OurServices}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
