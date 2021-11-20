import React from 'react'
import NavBar from './NavBar'

function NavBarMain({option, setOption}) {

    return (
        <div className="navbarMain">
            <span className="navigateNavbarKey">Q</span>
            <span>
                <NavBar option={option} setOption={setOption}/>
            </span>
            <span className="navigateNavbarKey">E</span>
        </div>
    )
}

export default NavBarMain
