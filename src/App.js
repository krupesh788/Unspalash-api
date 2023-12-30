
import './App.css';
import React, { useState } from 'react';


function App() {

  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  const fetchImages = () => {

    fetch(`https://api.unsplash.com/search/photos?client_id=mtmVjlZVowBLDttrAKdnfNw3HbJ4AhFHfGufiNWaYKM&query=${value}&orientation=landscape&count`)
    .then(res => res.json())
    .then(data => {

        console.log(data);
        setResults(data.results);
      })


  }


return(
    <>
    <div className="App">
      <div className="myDiv">
        <span>Search</span>
        <input
          style={{ width: "60%" }}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          />
        <button onClick={() => fetchImages()}>Send</button>
      </div>

      <div className="gallery">
        {
          results.map((item) => {
            return <img className="item" alt='img not found' key={item.id} src={item.urls.regular} />
          })
        }
      </div>
    </div>
    </>
  );
  }

export default App;
