const questList = require('./questList.js');

const addRandomDifficulty = (quest) => {
    let randomDifficulty = Math.floor(Math.random() * 3);
    switch (randomDifficulty) {
        case 0:
            quest.difficulty = "easy";
            break;
        case 1:
            quest.difficulty = "medium";
            break;
        case 2:
            quest.difficulty = "hard";
            break;
        default:
            quest.difficulty = "easy";
    }
}

const addRandomDifficultyToAllQuests = (quests) => {
    quests.forEach(quest => {
        addRandomDifficulty(quest);
    });
    return quests;
}

const addRandomTime = (quest) => {
    const options = [5, 10, 15, 20, 25, 30, 35];
    let randomTime = Math.floor(Math.random() * 5);
    quest.time = options[randomTime];
}

const addRandomTimeToAllQuests = (quests) => {
    quests.forEach(quest => {
        addRandomTime(quest);
    });
    return quests;
}

addRandomDifficultyToAllQuests(questList);
addRandomTimeToAllQuests(questList);

export default questList;
