import React from 'react'

function SkillCard({skill, selected, setSelected}) {
    const levelProgress = 100 / skill.nextLevel * skill.habilityPoints; 
    return (
        <div className={selected === skill.id ? "skillCard selectedSkillCard" : "skillCard"}
        onClick={() => setSelected(skill.id)}
        >
            <div className="skillDivision skillTitleDivision">
                <div>
                    <h1>{skill.name}</h1>
                    <h3>Level</h3>
                </div>
                <div className="levelDiv">
                    <h3 className="levelNumberH3">{skill.level}</h3>
                </div>
            </div>


            <div className={"skillDivision skillImageContainer"}>
                <div className={selected === skill.id ? "skillImageDiv2" : "skillImageDiv2Unselected"}>
                    <div className={selected === skill.id ? "skillImageDiv" : "skillImageDivUnselected"}>
                        <img src={skill.image.default} alt={skill.name} className={selected === skill.id ? "skillImage selected" : "skillImage"}/>
                    </div>
                </div>
            </div>

            <div className="skillDivision nextLevelDiv">
                <div style={{display: "flex", justifyContent: 'space-between', marginBottom: 0}}>
                    <p className="skillText">Next level</p>
                    <p className="skillText">{skill.habilityPoints}/{skill.nextLevel}</p>
                </div>
                <div className={ selected === skill.id ? "skillDivision2 selectedSkillDivision" : "skillDivision2"}>
                    <div className="progressBarDiv">
                        <div className="progressBar">
                            <div className="progressBarFill" style={{width: `${levelProgress}%`}}></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="skillDivision skillPointsDivision">
                <p className="skillText">Skill points</p>
                <p className={ skill.skillPoints > 0 ? "skillText skillPointsP" : "skillText"}>{skill.skillPoints}</p>
            </div>

        </div>
    )
}

export default SkillCard
