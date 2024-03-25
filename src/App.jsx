import './App.css';
import Header from "./layout/Header";
import Home from "./layout/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
