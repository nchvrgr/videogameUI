import React from 'react'
import quests from '../customableStuff/quests'

function QuestLog({selected}) {
    const quest = quests.filter(quest => quest.id === selected)[0];
    const completed = quest.objectives.every(objective => objective.completed);
    console.log("Completed:", completed);
    return (
        <div className="logDiv">  
            <p className="questLogLabel">
                <span className="questLogLabelText">{quest?.name}</span>
                {
                    quest?.extraQuest ? <span className="questLogLabelText">Extra Quest</span> : <span className="questLogLabelText">Story Quest</span>
                }
            </p>
            <div className="questLog">
                <p className="objectiveTracker">Objective tracker</p>
                {
                    quest?.objectives.map(objective => (
                        <div>
                            <p className="questTitle">
                                <input type="checkbox" checked={objective.completed} disabled />
                                {objective.name}
                            </p>
                            <p className="questDescription">{objective.description}</p>
                        </div>
                    ))
                }
                <footer className="questStats">
                    <div>
                        <h1>{completed ? "Completed Quest" : "Incomplete Quest" }</h1>
                    </div>
                    <div>
                        <p>Rewards</p>
                        <p className="littleTextStat">{completed ? "You received" : "You will receive"}</p>
                        <p className="littleTextStat whiteStat">${quest?.rewards}</p>
                    </div>
                    <div>
                        <p>Quest details</p>
                        <p className="littleTextStat">
                            Assigned by:
                            <span className="littleSpanStat whiteStat"> {quest?.asignedBy}</span>
                        </p>
                        <p className="littleTextStat">
                            Location:
                            <span className="littleSpanStat whiteStat"> {quest?.location}</span>
                        </p>
                    </div>
                </footer>


            
            </div>
        </div>
    )
}

export default QuestLog
