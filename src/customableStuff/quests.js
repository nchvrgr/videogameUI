const quests = [
    {
        id: 1,
        name: 'Principal Quest',
        objectives: [
            {
                objId: 1,
                name: 'Meet with Michael in the sewers',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: true
            },
            {
                objId: 2,
                name: 'Find the lost key',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: true
            }
        ],
        rewards: 20000,
        asignedBy: 'Troy',
        location: 'Old town'
    },
    {
        id: 2,
        name: 'Gunslinger',
        objectives: [
            {
                objId: 1,
                name: 'Shoot 10 goblins',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: true
            },
            {
                objId: 2,
                name: 'Recolect 10 leathers',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 25500,
        asignedBy: 'Michael',
        location: 'Old town'
    },
    {
        id: 3,
        name: 'Incence Herbs',
        objectives: [
            {
                objId: 1,
                name: 'Recolect 15 incence herbs',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 5000,
        asignedBy: 'Shen',
        location: 'Old town',
        extraQuest: true
    },
    {
        id: 4,
        name: 'Witch queen',
        objectives: [
            {
                objId: 1,
                name: 'Meet the witch queen',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            },
            {
                objId: 2,
                name: 'Give her the keys',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 15000,
        asignedBy: 'Troy',
        location: "The Witch's house"
    },
    {
        id: 5,
        name: 'Repert the gunsmith',
        objectives: [
            {
                objId: 1,
                name: 'Meet the gunsmith',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            },
            {
                objId: 2,
                name: 'Buy a gun',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 15700,
        asignedBy: 'Michael',
        location: 'The gunsmith'
    },
    {
        id: 6,
        name: 'Fountain',
        objectives: [
            {
                objId: 1,
                name: 'Find the fountain',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            },
            {
                objId: 2,
                name: 'Drink the fountain',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 15000,
        asignedBy: 'Shen',
        location: 'The fountain'
    },
    {
        id: 7,
        name: 'Radio station',
        objectives: [
            {
                objId: 1,
                name: 'Find the radio station',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 1000,
        asignedBy: 'The Witch Queen',
        location: 'The mountains'
    },
    {
        id: 8,
        name: 'Legless Spider',
        objectives: [
            {
                objId: 1,
                name: 'Find the legless spider',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            },
            {
                objId: 2,
                name: 'Kill the legless spider',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 15000,
        asignedBy: 'Troy',
        location: 'The caverns'
    },
    {
        id: 9,
        name: 'Bandages and meds',
        objectives: [
            {
                objId: 1,
                name: 'Find the bandages and meds',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            },
            {
                objId: 2,
                name: 'Buy the bandages and meds',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 1800,
        asignedBy: 'Michael',
        location: 'The tavern'
    },
    {
        id: 10,
        name: 'Lighter gas',
        objectives: [
            {
                objId: 1,
                name: 'Find the lighter gas',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            },
            {
                objId: 2,
                name: 'Steal the lighter gas',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 8000,
        asignedBy: 'Shen',
        location: "The healer's house"
    },
    {
        id: 11,
        name: 'Coffee',
        objectives: [
            {
                objId: 1,
                name: 'Find the coffee',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            },
            {
                objId: 2,
                name: 'Drink a coffee',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 1000,
        asignedBy: 'The Witch Queen',
        location: 'The tavern',
        extraQuest: true
    },
    {
        id: 12,
        name: 'Crayons for the kids',
        objectives: [
            {
                objId: 1,
                name: 'Find the crayons',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            },
            {
                objId: 2,
                name: 'Give them to the kids',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 100,
        asignedBy: 'The kids',
        location: 'The refuge',
        extraQuest: true
    },
    {
        id: 13,
        name: 'Crease and desist',
        objectives: [
            {
                objId: 1,
                name: 'Find the crease and desist',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 10000,
        asignedBy: 'The Witch Queen',
        location: 'The cave'
    },
    {
        id: 14,
        name: 'On the hooks',
        objectives: [
            {
                objId: 1,
                name: "Buy a hook in Repert's store",
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            },
            {
                objId: 2,
                name: 'Use the hook to climb a building',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 1050,
        asignedBy: 'Troy',
        location: 'The old town'
    },
    {
        id: 15,
        name: 'Crossroad',
        objectives: [
            {
                objId: 1,
                name: 'Find the crossroad',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 1000,
        asignedBy: 'The Witch Queen',
        location: 'The old town',
        extraQuest: true
    },
    {
        id: 16,
        name: 'A traitor among us',
        objectives: [
            {
                objId: 1,
                name: 'Find the traitor',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            },
            {
                objId: 2,
                name: 'Kill the traitor',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 30000,
        asignedBy: 'The Witch Queen',
        location: 'The club'
    },
    {
        id: 17,
        name: 'The end of the witch',
        objectives: [
            {
                objId: 1,
                name: 'Find the witch',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            },
            {
                objId: 2,
                name: 'Kill the witch',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 100000,
        asignedBy: 'Troy',
        location: 'The magic city'
    },
    {
        id: 18,
        name: 'Horses',
        objectives: [
            {
                objId: 1,
                name: 'Find the horses',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 1000,
        asignedBy: 'Troy',
        location: 'The magic city',
        extraQuest: true
    },
    {
        id: 19,
        name: 'Goblin king',
        objectives: [
            {
                objId: 1,
                name: 'Meet the goblin king',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            },
            {
                objId: 2,
                name: 'Earn his trust',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 5000,
        asignedBy: 'Will',
        location: 'The goblin city'
    },
    {
        id: 20,
        name: 'The king',
        objectives: [
            {
                objId: 1,
                name: 'Find the king',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            },
            {
                objId: 2,
                name: "Tell him the goblin king's secret",
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 10000,
        asignedBy: 'Will',
        location: 'The modern kingdom'
    },
    {
        id: 21,
        name: 'Betrayal',
        objectives: [
            {
                objId: 1,
                name: 'Fight the war against the goblins',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 10000,
        asignedBy: 'The king',
        location: 'The goblin city'
    },
    {
        id: 22,
        name: 'The end of the goblin king',
        objectives: [
            {
                objId: 1,
                name: 'Find the goblin king',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            },
            {
                objId: 2,
                name: 'Kill the goblin king',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 100000,
        asignedBy: 'The king',
        location: 'The goblin city'
    },
    {
        id: 23,
        name: 'The new goblin king',
        objectives: [
            {
                objId: 1,
                name: 'Become the new king of the goblin city',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 100000,
        asignedBy: 'The king',
        location: 'The goblin city'
    },
    {
        id: 24,
        name: 'Invade',
        objectives: [
            {
                objId: 1,
                name: 'Invade the skeleton fortress',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 10000,
        asignedBy: 'The counselor',
        location: 'The skeleton fortress'
    },
    {
        id: 25,
        name: 'Rebelion',
        objectives: [
            {
                objId: 1,
                name: 'Rebel against the king',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 15000,
        asignedBy: 'The counselor',
        location: 'The old town'
    },
    {
        id: 26,
        name: 'Final fight',
        objectives: [
            {
                objId: 1,
                name: 'Win the fight against the king',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 500000,
        asignedBy: 'The counselor',
        location: 'The old town'
    },
    {
        id: 27,
        name: 'The end',
        objectives: [
            {
                objId: 1,
                name: 'Become the new king of the country',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            },
            {
                objId: 2,
                name: 'Celebrate with the people',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, sunt in culpa qui officia deserunt mollit anim id est laborum',
                completed: false
            }
        ],
        rewards: 1000000,
        asignedBy: 'The counselor',
        location: 'The old town'
    }
]


//lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

export default quests;