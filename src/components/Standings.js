import React, { useState, useEffect } from "react";
import axios from "axios";

const Standings = () => {
  const [data, setData] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState("eng.1");
  const [selectedYear, setSelectedYear] = useState("2021");

  useEffect(() => {
    axios(
      `https://api-football-standings.azharimm.site/leagues/${selectedLeague}/standings?season=${selectedYear}`
    )
      .then((res) => {
        console.log(res.data.data.standings);
        setData(res.data.data.standings);
      })
      .catch((err) => console.log(err));
  }, [selectedYear, selectedLeague]);

  return (
    <div className="standings-container">
      <div className="select-container">
        <select
          name="select-league"
          id="select-league"
          defaultValue={selectedLeague}
          onChange={(e) => setSelectedLeague(e.target.value)}
        >
          <option value="arg.1">Argentine Liga Profesional de Fútbol</option>
          <option value="aus.1">Australian A-League</option>
          <option value="bra.1">Brazilian Serie A</option>
          <option value="chn.1">Chinese Super League</option>
          <option value="ned.1">Dutch Eredivisie</option>
          <option value="eng.1">English Premier League</option>
          <option value="fra.1">French Ligue 1</option>
          <option value="ger.1">German Bundesliga</option>
          <option value="idn.1">Indonesian Liga 1</option>
          <option value="ita.1">Italian Serie A</option>
          <option value="jpn.1">Japanese J League</option>
          <option value="mys.1">Malaysian Super League</option>
          <option value="mex.1">Mexican Liga BBVA MX</option>
          <option value="por.1">Portuguese Liga</option>
          <option value="rus.1">Russian Premier League</option>
          <option value="sgp.1">Singaporean Premier League</option>
          <option value="esp.1">Spanish Primera División</option>
          <option value="tha.1">Thai Premier League</option>
          <option value="tur.1">Turkish Super Lig</option>
          <option value="uga.1">Ugandan Super League</option>
        </select>
        <select
          name="select-year"
          id="select-year"
          onChange={(e) => setSelectedYear(e.target.value)}
          defaultValue={selectedYear}
        >
          <option value="2011">2011-2012 Season</option>
          <option value="2012">2012-2013 Season</option>
          <option value="2013">2013-2014 Season</option>
          <option value="2014">2014-2015 Season</option>
          <option value="2015">2015-2016 Season</option>
          <option value="2016">2016-2017 Season</option>
          <option value="2017">2017-2018 Season</option>
          <option value="2018">2018-2019 Season</option>
          <option value="2019">2019-2020 Season</option>
          <option value="2020">2020-2021 Season</option>
          <option value="2021">2021-2022 Season</option>
        </select>
      </div>
      <div className="standing-results">
        <table className="standings">
          <tbody>
            <tr className="table-head">
              <td className="team-position">#</td>
              <td></td>
              <td className="team-name">Team</td>
              <td title="Matches played">MP</td>
              <td title="Wins">W</td>
              <td title="Draws">D</td>
              <td title="Losses">L</td>
              <td title="Goals for">GF</td>
              <td title="Goals against">GA</td>
              <td title="Goals difference">GD</td>
              <td title="Team points">Pts</td>
            </tr>
            <tr className="table-data">
              <td className="team-position">
                {data.map((data, index) => (
                  <div key={data.team.id}>{`${index + 1}.`}</div>
                ))}
              </td>
              <td>
                <div className="crest">
                  {data.map((data, index) => (
                    <div key={data.team.id}>
                      <img src={data.team.logos[0].href} alt="#" />
                    </div>
                  ))}
                </div>
              </td>
              <td className="team-name">
                <span>
                  {data.map((data, index) => (
                    <div key={data.team.id}>{data.team.displayName}</div>
                  ))}
                </span>
              </td>
              <td>
                {data.map((data, index) => (
                  <div key={data.team.id}>{data.stats[3].value}</div>
                ))}
              </td>
              <td>
                {data.map((data, index) => (
                  <div key={data.team.id}>{data.stats[0].value}</div>
                ))}
              </td>
              <td>
                {data.map((data, index) => (
                  <div key={data.team.id}>{data.stats[2].value}</div>
                ))}
              </td>
              <td>
                {data.map((data, index) => (
                  <div key={data.team.id}>{data.stats[1].value}</div>
                ))}
              </td>
              <td>
                {data.map((data, index) => (
                  <div key={data.team.id}>{data.stats[4].value}</div>
                ))}
              </td>
              <td>
                {data.map((data, index) => (
                  <div key={data.team.id}>{data.stats[5].value}</div>
                ))}
              </td>
              <td>
                {data.map((data, index) => (
                  <div key={data.team.id}>{data.stats[9].value}</div>
                ))}
              </td>
              <td className="team-points">
                {data.map((data, index) => (
                  <div key={data.team.id}>{data.stats[6].value}</div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Standings;
