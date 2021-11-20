import React from 'react'
import Menu from './Menu'

function Main() {
    return (
        <div className="main">
            <Menu/>
           <div className="mainButtonsBottomDiv">
                <div>
                    <span>View skill tree</span>
                </div>
                <div>
                    <span>Back</span>
                </div>
           </div>
        </div>
    )
}

export default Main
