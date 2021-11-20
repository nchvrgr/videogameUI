import React from 'react'
import quests from '../customableStuff/quests'

function QuestLog({selected}) {
    const quest = quests.filter(quest => quest.id === selected)[0];
    const completed = quest.objectives.every(objective => objective.completed);
    console.log("Completed:", completed);
    return (
        <>  
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


            
            </div>
        </>
    )
}

export default QuestLog
