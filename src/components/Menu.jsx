import React, { useState } from 'react'
import NavBarMain from './NavBarMain'
import Quests from './Quests';
import Skills from './Skills';

function Menu() {

    const [selectedOption, setSelectedOption] = useState("quests");

    return (
        <div className="menu">
            <NavBarMain option={selectedOption} setOption={setSelectedOption}/>
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
