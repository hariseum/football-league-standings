import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const Highlights = () => {
  const [data, setData] = useState([]);

  function matchDate(iso) {
    var date = new Date(iso);
    return (
      date.toLocaleString("en-US", { month: "short" }) +
      " " +
      date.getDate() +
      " - " +
      date.toLocaleTimeString("en", {
        timeStyle: "short",
        hour12: true,
        timeZone: "IST",
      })
    );
  }

  useEffect(() => {
    axios("https://www.scorebat.com/video-api/v3/").then((res) => {
      console.log(res.data.response);
      setData(res.data.response);
    });
  }, []);

  // const getData = () => {
  //   fetch("data.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     // setData(res.data.response);
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="highlights-container">
      {data.map((data) => (
        <div key={data.title} className="highlight-div">
          <a href={data.matchviewUrl} target="_blank" rel="noreferrer">
            <img src={data.thumbnail} alt="pic" width="250" />
          </a>
          <p>{matchDate(data.date)}</p>
          <h1>{data.title}</h1>
          <p>
            <b>{data.competition}</b>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
