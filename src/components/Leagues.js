import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const Leagues = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://api-football-standings.azharimm.site/leagues").then(
      (res) => {
        console.log(res.data.data);
        setData(res.data.data);
      }
    );
  }, []);

  const whenClicked = (e) => {
    try {
      props.onClickedLeague(["standings",e.target.nextSibling.id]);
    }
    catch(err) {
      try {
        props.onClickedLeague(["standings","eng.1"]);
      }
      catch(err1) {
        console.log(err1)
      }
      console.log(err)
    }
  };



  return (
    <div className="leagues-container">
      {data.map((data) => (
        <div key={data.id} className="league-div" onClick={whenClicked}>
          <img src={data.logos.light} alt="#" />
          <h1 className="league-id" id={data.id} onClick={whenClicked}>
            {data.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Leagues;
