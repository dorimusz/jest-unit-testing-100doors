const getOpenDoors = (number) => {
    const doorsList = [];
    const openDoors = [];
    for (let i = 0; i < number; i++) {
        const door = {
            id: i + 1,
            isOpen: false
        };
        doorsList.push(door);
    }

    for (let round = 1; round <= doorsList.length; round++) {
        for (const door of doorsList) {
            if (door.id % round === 0) door.isOpen = !door.isOpen;
        }
    }

    for (let i = 0; i < doorsList.length; i++) {
        const door = doorsList[i];
        if (door.isOpen === true) openDoors.push(door.id)
    }
    // console.log(openDoors);
    return openDoors;
};


let result = getOpenDoors(1);
console.log(result)
/*
// getOpenDoors(200);
// getOpenDoors(1000);
*/

module.exports = getOpenDoors