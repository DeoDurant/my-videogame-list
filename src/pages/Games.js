import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import InfoCard  from '../components/InfoCard';


console.log("new")
const Games = () => {
  const [topGames, setTopGames] = useState([]);
  const [image, setImage] = useState([]);


  useEffect(() => {
    const imagePOST = {
      method: "POST",
      url: "http://localhost:5000/Artworks"
    };

    axios
      .request(imagePOST)
      .then(function (response) {
        const temp2 = response;
        setImage(temp2.data);
        console.log(image)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {

    const options = {
      method: "POST",
      url: "http://localhost:5000/Games",
    };

    axios
      .request(options)
      .then(function (response) {
        const temp = response;
        setTopGames(temp.data);
        console.log(topGames)
      })
      .catch(function (error) {
        console.error(error);
      });
      
  
    }, []);

    console.log(image.url)



  return (
    <div>
      Games
      {console.log(image.url)}
      <img src='https:' alt="Testing"/>
      <img src='https://images.igdb.com/igdb/image/upload/t_thumb/ar2jx9.jpg' alt="pls work"/>
      {topGames.map(games => 
        <InfoCard key={games.id} name={games.name} rating={games.rating}/>
      )}
      </div>
    
  )
}

export default Games