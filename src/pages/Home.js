import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

let data = "fields *; where id = 119133;";

const Home = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const options = {
      method: "POST",
      url: "http://localhost:5000",
      data: data
    };
    axios
      .request(options)
      .then(function (response) {
        setGames(response.data[0]);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return <div>
    Home
    <p>{games.name}</p>
    <p>{games.storyline}</p>
    <p>{games.url}</p>
    </div>;
};

export default Home;
