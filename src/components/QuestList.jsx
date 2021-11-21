import React from 'react';
// import { useEffect } from 'react/cjs/react.development';

function QuestList({quests, selected, setSelected}) {

    // const handleKeyDown = (e) => {
    //     if (e.key === 'ArrowDown'|| e.key === 's') {
    //         if (selected < quests.length) {
    //             setSelected(selected + 1);
    //         }
    //     } else if (e.key === 'ArrowUp' || e.key === 'w') {
    //         if (selected > 1) {
    //             setSelected(selected - 1);
    //         }
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('keydown', handleKeyDown);
    //     return () => {
    //         window.removeEventListener('keydown', handleKeyDown);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [selected]);

    return (
        <div className="questList">
            <nav className="questNav">
                    {quests?.map( quest => (
                        <div key={quest.id} className={ selected === quest.id ? "questListElementSelected" : "questListElement"}>
                            {selected === quest.id ? <p className="circle">〇</p>: null}
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
