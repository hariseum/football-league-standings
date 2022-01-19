import React, { useState } from 'react';
import '../App.css';
import Leagues from './Leagues';
import Standings from './Standings';
import Highlights from './Highlights';

const Content = () => {
    const [active,setActive] = useState('leagues');

    return (
        <div className='content-container'>
            <div className='tabs'>
                <div className='tab-leagues' onClick={()=>setActive('leagues')}>
                    <h2 style={{color: active==='leagues' ? "#ffffff" : "#696969", fontSize: active==='leagues' ? "27px" : null}}>Leagues</h2>
                </div>
                <div className='tab-standings' onClick={()=>setActive('standings')}>
                    <h2 style={{color: active==='standings' ? "#ffffff" : "#696969", fontSize: active==='standings' ? "27px" : null}}>Standings</h2>
                </div>
                <div className='tab-highlights' onClick={()=>setActive('highlights')}>
                    <h2 style={{color: active==='highlights' ? "#ffffff" : "#696969", fontSize: active==='highlights' ? "27px" : null}}>Highlights</h2>
                </div>
            </div>
            {(() => {
                switch (active) {
                    case 'leagues':
                        return <Leagues />
                    case 'standings':
                        return <Standings />
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