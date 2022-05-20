import React, { useState } from 'react';
import '../App.css';
import Leagues from './Leagues';
import Standings from './Standings';
import Highlights from './Highlights';

const Content = () => {
    const [active,setActive] = useState('leagues');
    const [leagueName,setLeagueName] = useState('eng.1')

    const clickedLeagueHandler =(switchName) => {
        setActive(switchName[0])
        setLeagueName(switchName[1])
    }

    return (
        <div className='content-container'>
            <div className='tabs'>
                <div className={active==='leagues' ? 'tab-leagues-active' : 'tab-leagues'} onClick={()=>setActive('leagues')}>
                    <h2 style={{color: active==='leagues' ? "#ffffff" : "#696969"}}>LEAGUES</h2>
                </div>
                <div className={active==='standings' ? 'tab-standings-active' : 'tab-standings'} onClick={()=>setActive('standings')}>
                    <h2 style={{color: active==='standings' ? "#ffffff" : "#696969"}}>STANDINGS</h2>
                </div>
                <div className={active==='highlights' ? 'tab-highlights-active' : 'tab-highlights'} onClick={()=>setActive('highlights')}>
                    <h2 style={{color: active==='highlights' ? "#ffffff" : "#696969"}}>HIGHLIGHTS</h2>
                </div>
            </div>
            {(() => {
                switch (active) {
                    case 'leagues':
                        return <Leagues onClickedLeague={clickedLeagueHandler} />
                    case 'standings':
                        return <Standings clickedLeagueName={leagueName} />
                    case 'highlights':
                        return <Highlights />
                    default:
                        return null
                }
            })()}
        </div>
    );
}

export default Content;