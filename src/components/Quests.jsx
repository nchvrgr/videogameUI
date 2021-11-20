import React, { useState } from 'react'
import QuestList from './QuestList'
import QuestLog from './QuestLog'
import quests from '../customableStuff/quests'

function Quests() {
    const [selected, setSelected] = useState(1);
    return (
        <div className="quests">
            <div>
                <p className="questLabel">Quests</p>
                <QuestList quests={quests} selected={selected} setSelected={setSelected}/>
            </div>
            <div className="questLogDiv">
                <QuestLog selected={selected}/>
            </div>
        </div>
    )
}

export default Quests
