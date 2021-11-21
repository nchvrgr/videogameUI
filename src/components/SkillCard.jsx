import React from 'react'

function SkillCard({skill, selected, setSelected}) {
    const levelProgress = 100 / skill.nextLevel * skill.habilityPoints; 
    return (
        <div className={selected === skill.id ? "skillCard selectedSkillCard" : "skillCard"}
        onClick={() => setSelected(skill.id)}
        >
            <div className="skillDivision skillTitleDivision">
                <h1>{skill.name}</h1>
                <h3>Level</h3>
            </div>


            <div className={"skillDivision skillImageContainer"}>
                <div className={selected === skill.id ? "skillImageDiv2" : "skillImageDiv2Unselected"}>
                    <div className={selected === skill.id ? "skillImageDiv" : "skillImageDivUnselected"}>
                        <img src={skill.image.default} alt={skill.name} className="skillImage"/>
                    </div>
                </div>
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
                <div className="progressBarDiv">
                    <div className="progressBar">
                        <div className="progressBarFill" style={{width: `${levelProgress}%`}}></div>
                    </div>
                </div>
            </div>


            <div className="skillDivision skillPointsDivision" style={skill.skillPoints > 0 ? {color: 'white'} : null}>
                <p className="skillText">Skill points</p>
                <p className="skillText">{skill.skillPoints}</p>
            </div>

        </div>
    )
}

export default SkillCard
