import React, { useState } from "react";
import "./App.css";
import ImageSlider from "./ImageSlider";

export default function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const runQuery = () => {
    fetch(
      `https://pixabay.com/api/?key=17555646-e40df9968035314583cab5eca&q=${query}`
    )
      .then((response) => response.json())
      .then(({ hits }) => hits.map(({ webformatURL }) => webformatURL))
      .then(setImages);
  };

  return (
    <div className="App">
      <div class="menu-icon">MENU</div>
        <div>
        <h1>The Amazing Free Images</h1>
        <p>search your favourites images</p>
        <input id="searchInput" placeholder="Search..."  onChange={(e) => setQuery(e.target.value)} />
        <button id='submitsearch' onClick={runQuery}>Search</button>
        {/* <div > <span>Search</span>  </div> */}
      </div>
      <ImageSlider images={images} />
    </div> 
  );
}
