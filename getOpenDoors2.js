const { objectExpression } = require("@babel/types");

const getOpenDoors = (number) => {
    // let doors = [...Array(number).keys()].map((door, index) => {
    //     const newDoor = {
    //           id: index + 1,
    //       isOpen: false,
    //   }
    //   return newDoor;
    // });

    let doors = Array.from({ length: number }, (_, i) => ({ id: i + 1, isOpen: false }));

    [...Array(doors.length + 1).keys()].forEach(round => {
        doors.forEach(door => {
            if (door.id % round === 0) {
                door.isOpen = !door.isOpen
            }
        })
    })

    return doors.reduce((acc, curr) => curr.isOpen ? [...acc, curr.id] : [...acc], [])
}

module.exports = getOpenDoors 