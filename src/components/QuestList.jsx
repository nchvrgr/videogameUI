import React from 'react';

function QuestList({quests, selected, setSelected}) {

    return (
        <div className="questList">
            <nav className="questNav">
                    {quests?.map( quest => (
                        <div key={quest.id} className={ selected === quest.id ? "questListElementSelected" : "questListElement"}>
                            <p value={quest.id} 
                            onClick={() => setSelected(quest.id)}
                            className={"questListElementText"}
                            > 
                                {quest.name} 
                            </p>
                        </div>
                        )
                    )}
   
            </nav>
        </div>
    )
}

export default QuestList
