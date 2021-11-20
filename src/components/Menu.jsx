import React, { useState } from 'react'
import NavBarMain from './NavBarMain'
import Quests from './Quests';
import Skills from './Skills';

function Menu({selectedOption, setSelectedOption, buttonQ, setButtonQ, buttonE, setButtonE}) {

    

    return (
        <div className="menu">
            <NavBarMain option={selectedOption} setOption={setSelectedOption} 
            buttonQ={buttonQ} setButtonQ={setButtonQ}
            buttonE={buttonE} setButtonE={setButtonE}
            />
            {
                selectedOption === "quests" ?
                <Quests/>
                :
                <Skills/>
            }
        </div>
    )
}

export default Menu
