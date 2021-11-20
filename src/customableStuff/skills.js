const iconMedal = require('../media/Icon_medal.svg');
const iconAgility = require('../media/Icon_Agility.svg');
const iconPower = require('../media/Icon_power.svg');

const skills = [
    {
        id: 1,
        name: "Survivor",
        image: iconMedal,
        level: 11,
        habilityPoints: 21660,
        nextLevel: 65000,
        skillPoints: 0
    },
    {
        id: 2,
        name: "Agility",
        image: iconAgility,
        level: 10,
        habilityPoints: 40000,
        nextLevel: 50000,
        skillPoints: 1
    },
    {
        id: 3,
        name: "Power",
        image: iconPower,
        level: 11,
        habilityPoints: 32500,
        nextLevel: 65000,
        skillPoints: 0
    }
]

export default skills;