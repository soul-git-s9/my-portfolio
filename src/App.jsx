import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css';

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/About");
  };

  return (
    <div className="container">
      <div className="portfolio-link">
        <Link to="Portfolio">PORTFOLIO &gt;</Link>
      </div>
      <div className="image-container" onClick={handleClick}>
        <img src="/images/song.jpg" alt="김송희 사진" />
      </div>
      <div className="marquee-container">
        <div className="marquee">KIM SONG HEE</div>
      </div>
    </div>
  );
}

export default App
