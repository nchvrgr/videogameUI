import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import buttonEcs from '../media/Button_Ecs.svg';
import buttonBack from '../media/Button_Back.svg';

function Main() {

    const [selectedOption, setSelectedOption] = useState("quests");
    
    //function to add an event listener on the key Q and E pressed
    const [buttonQ, setButtonQ] = useState(false);
    const [buttonE, setButtonE] = useState(false);

    const handleKeyDown = (e) => {
        if (e.key === 'q') {
            setButtonQ(true);
        }
        if (e.key === 'e') {
            setButtonE(true);
        }
        if (selectedOption === "quests") {
            if (e.key === "e" || e.key === "q") {
                setSelectedOption("skills");
                return;
            }
        }
        else{
            if (e.key === "e" || e.key === "q") {
                setSelectedOption("quests");
                return "E";
            }
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedOption]);


    return (
        <div className="main">
            <Menu selectedOption={selectedOption} setSelectedOption={setSelectedOption} 
            buttonQ={buttonQ} setButtonQ={setButtonQ}
            buttonE={buttonE} setButtonE={setButtonE}
            />
           <div className="mainButtonsBottomDiv">
                <div className="backButtonDiv">
                    <img src={buttonBack} alt="buttonEcs" height="13"/>
                    <span>View skill tree</span>
                </div>
                <div className="ecsButtonDiv">
                    <img src={buttonEcs} alt="ecs" height="13"/>
                    <span>Back</span>
                </div>
           </div>
        </div>
    )
}

export default Main
