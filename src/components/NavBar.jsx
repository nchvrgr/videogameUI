import React from 'react';

function NavBar({option, setOption}) {
    return (
        <nav className="navbar">
                <span className="navbarOption">MAP</span>
                <span 
                className={option==="quests" ? "navbarOptionSelected selectableOption" : "navbarOption selectableOption"}
                onClick={() => setOption("quests")}
                >QUESTS</span>
                <span className="navbarOption">INVENTORY</span>
                <span className="navbarOption">BLUEPRINT</span>
                <span 
                className={option==="skills" ? "navbarOptionSelected selectableOption" : "navbarOption selectableOption"}
                onClick={() => setOption("skills")}
                >SKILLS</span>
        </nav>
    )
}

export default NavBar
