import React, { useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";


import NasaPhoto from "./Components/NasaPhoto";

const dummyData = {
  date: "2023-03-21",
explanation: "Can dust be beautiful? Yes, and it can also be useful.  The Taurus molecular cloud has several bright stars, but it is the dark dust that really draws attention.  The pervasive dust has waves and ripples and makes picturesque dust bunnies, but perhaps more importantly, it marks regions where interstellar gas is dense enough to gravitationally contract to form stars. In the image center is a light cloud lit by neighboring stars that is home not only to a famous nebula, but to a very young and massive famous star.  Both the star, T Tauri, and the nebula, Hind's Variable Nebula, are seen to vary dramatically in brightness -- but not necessarily at the same time, adding to the mystery of this intriguing region. T Tauri and similar stars are now generally recognized to be Sun-like stars that are less than a few million years old and so still in the early stages of formation. The featured image spans about four degrees not far from the Pleiades star cluster, while the featured dust field lies about 400 light-years away.",
hdurl: "https://apod.nasa.gov/apod/image/2303/TaurusDust_Chander_4096.jpg",
title: "Dark Nebulae and Star Formation in Taurus"
}

function App() {
  const [data, setData] = useState(dummyData);

  useEffect(() => {
     axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
        console.log(res);
        setData(res.data)
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
     { data && <NasaPhoto photo={data} />}
     </div>
  );
}

export default App;
