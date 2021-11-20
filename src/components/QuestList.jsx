import React from 'react';
import { useEffect } from 'react/cjs/react.development';

function QuestList({quests, selected, setSelected}) {

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown'|| e.key === 's') {
            setSelected(selected + 1);
        } else if (e.key === 'ArrowUp' || e.key === 'w') {
            setSelected(selected - 1);
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [selected]);

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
