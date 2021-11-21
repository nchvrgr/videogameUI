import React from 'react'
import { useEffect } from 'react/cjs/react.development'
import NavBar from './NavBar'

function NavBarMain({option, setOption, buttonQ, setButtonQ, buttonE, setButtonE}) {

    useEffect(() => {
        setTimeout(() => {
            setButtonQ(false)
            setButtonE(false)
        }, 250);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [buttonQ, buttonE]);

    return (
        <div className="navbarMain">
            <div className="navigationButtonDiv">
                <span className={buttonQ ? "navigateNavbarKeyPressed" : "navigateNavbarKey" }>Q</span>
            </div>
            <NavBar option={option} setOption={setOption}/>
            <div className="navigationButtonDiv">
                <span className={buttonE ? "navigateNavbarKeyPressed" : "navigateNavbarKey"}>E</span>
            </div>
        </div>
    )
}

export default NavBarMain
