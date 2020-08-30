import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/card/card";

function App() {
  
  const [card, setCard] = useState({});

  //gets cards
  let getCard = () => {
    axios.get("https://api.lib.byu.edu/leaflet/item").then(card => {
      //set state using hooks
      setCard(card.data);
    });
  };

  //submits rating
  let submit = (id, type) => {
    //each time you submit a rating requst a new card
    getCard();

    //ternary to determine what to put in body
    let liked = type === "Yes" ? true : false;

    axios
      .post("https://api.lib.byu.edu/leaflet/users/123/ratings", {
        itemID: id,
        rating: liked
      })
      .then(res => console.log("response", res.data, res.status));
  };

  //useEffect gets cards upon loading page
  useEffect(() => {
    getCard();
  }, []);

  return (
    <div className="App">
      {/* {render card component} */}
      <Card card={card} submit={submit} />
    </div>
  );
}

export default App;
