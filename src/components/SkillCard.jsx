import React from 'react'

function SkillCard({skill}) {
    return (
        <div className="skillCard">
            <div className="skillDivision skillTitleDivision">
                <h1>{skill.name}</h1>
                <h3>Level</h3>
            </div>
            <div className="skillDivision skillImageDiv">
                <img src={skill.image.default} alt={skill.name} className="skillImage"/>
            </div>
            <div className="skillDivision">
                <p className="skillText">Level</p> 
                <p className="skillText">{skill.level}</p>
            </div>
            <div className="skillDivision">
                <p className="skillText">Level points</p>
                <p className="skillText">{skill.habilityPoints}</p>
            </div>
            <div className="skillDivision">
                <p className="skillText">Next level</p>
                <p className="skillText">{skill.nextLevel}</p>
            </div>
            <div className="skillDivision">
                <p className="skillText">BAR</p>
            </div>
            <div className="skillDivision skillPointsDivision">
                <p className="skillText">Skill points</p>
                <p className="skillText">{skill.skillPoints}</p>
            </div>

        </div>
    )
}

export default SkillCard
