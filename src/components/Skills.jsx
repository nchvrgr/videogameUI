import React from 'react';
import skills from '../customableStuff/skills';
import SkillCard from './SkillCard';

function Skills() {
    return (
        <div className="skillsMain">
            {
                skills?.map( skill => {
                    return(
                        <SkillCard key={skill.id} skill={skill}/>
                    )
                })
            }
        </div>
    )
}

export default Skills
