const getOpenDoors = require('./getOpenDoors');

// let result = getOpenDoors(100);
// console.log(result)


test('100 doors', () => {
    const result = getOpenDoors(100);
    const expectedResult = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
    // expect(getOpenDoors(100)).toBe([1, 4, 9, 16, 25, 36, 49, 64, 81, 100]);

    //ez csak tartalom, mert két külön lista:
    // expect(result).toBe(expectedResult)

    expect(result).toStrictEqual(expectedResult)
});


test('no door', () => {
    const result = getOpenDoors(0);
    const expectedResult = []
    expect(result).toStrictEqual(expectedResult)
});


test('1 door', () => {
    const result = getOpenDoors(1);
    const expectedResult = [1]
    expect(result).toStrictEqual(expectedResult)
});


test('20 doors', () => {
    const result = getOpenDoors(20);
    const expectedResult = [1, 4, 9, 16]
    expect(result).toStrictEqual(expectedResult)
});


test('250 doors', () => {
    const result = getOpenDoors(250);
    const expectedResult = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225]
    expect(result).toStrictEqual(expectedResult)
});


test('1000 doors', () => {
    const result = getOpenDoors(1000);
    const expectedResult = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961];
    expect(result).toStrictEqual(expectedResult)
});