import "./App.css";
import Landing from "./Landing";
import Nav from "./Nav";
import About from "./About";
import Gallerypopup from "./Gallerypopup";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [gallery, setGallery] = useState([]);
  const [currentImg, setCurrentImg] = useState({});
  const [isFetched, setIsFetched] = useState(false);

  console.log(gallery);
  useEffect(() => {
    async function getGallery() {
      const JSONData = await fetch("https://tradingtime-9cf2.restdb.io/rest/tradingtimegallery", {
        method: "get",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-apikey": "61e6e8efa0f7d226f9b75f6b",
          "cache-control": "no-cache",
        },
      });
      const galleryData = await JSONData.json();
      setGallery(galleryData);
      setIsFetched(true);
    }
    getGallery();
  }, []);

  return (
    <div className="App">
      <Nav />
      <div className="banner">
        <Routes>
          <Route path="/" element={<Landing isFetched={isFetched} setCurrentImg={setCurrentImg} gallery={gallery} />} />
          <Route path="about" element={<About />} />
          <Route path="gallerypopup" element={<Gallerypopup currentImg={currentImg} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
