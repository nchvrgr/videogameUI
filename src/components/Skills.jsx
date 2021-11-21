import React, { useState, useEffect } from 'react';
import skills from '../customableStuff/skills';
import SkillCard from './SkillCard';

function Skills() {

    const [selected, setSelected] = useState(1);

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight'|| e.key === 'd') {
            if (selected < skills.length) {
                setSelected(selected + 1);
            }
        } else if (e.key === 'ArrowLeft' || e.key === 'a') {
            if (selected > 1) {
                setSelected(selected - 1);
            }
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [selected]);

    return (
        <div className="skillsMain">
            {
                skills?.map( skill => {
                    return(
                        <SkillCard key={skill.id} skill={skill} selected={selected} setSelected={setSelected}/>
                    )
                })
            }
        </div>
    )
}

export default Skills
