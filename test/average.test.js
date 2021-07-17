const { average } = require('../utils/average');

describe('average functionalities', () => {
    test('of length 1 is the same number', () => {
        expect(average([1])).toBe(1);
    })

    test('is working correctly', () => {
        expect(average([1, 2, 3])).toBe(2);
    })
})