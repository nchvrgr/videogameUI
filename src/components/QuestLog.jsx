import React from 'react'
import quests from '../customableStuff/quests'

function QuestLog({selected}) {
    const quest = quests.filter(quest => quest.id === selected)[0];
    const completed = quest.objectives.every(objective => objective.completed);
    return (
        <div className="logDiv">  
            <p className="questLogLabel">
                <span className="questLogLabelText">{quest?.name}</span>
                {
                    quest?.extraQuest ? <span className="questType">Extra Quest</span> : <span className="questType">Story Quest</span>
                }
            </p>
            <div className="questLog">
                <p className="objectiveTracker">Objective tracker</p>
                <div className="questLogDetails">
                {
                    quest?.objectives.map(objective => (
                        <div key={objective.objId}>
                            <p className="questTitle">
                                <input type="radio" value={1} checked={objective.completed} className="questCheckbox" disabled />
                                <span className="objectiveName">{objective.name}</span>
                            </p>
                            <p className="questDescription">{objective.description}</p>
                        </div>
                    ))
                }
                </div>
            </div>
            <footer className={completed ? "questStats completedStats" : "questStats"}>
                <div>
                    <h1 className={completed ? "completedH1" : null}>{completed ? "Completed Quest" : "Incomplete Quest" }</h1>
                </div>
                <div>
                    <p>Rewards</p>
                    <p className="littleTextStat">{completed ? "You received" : "You will receive"}</p>
                    <p className={`littleSpanStat ${completed ? "darkStat" : "whiteStat"}`} id="rewards">${quest?.rewards}</p>
                </div>
                <div>
                    <p>Quest details</p>
                    <p className="littleTextStat">
                        Assigned by:
                        <span className={`littleSpanStat ${completed ? "darkStat" : "whiteStat"}`}> {quest?.asignedBy}</span>
                    </p>
                    <p className="littleTextStat">
                        Location:
                        <span className={`littleSpanStat ${completed ? "darkStat" : "whiteStat"}`}> {quest?.location}</span>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default QuestLog
