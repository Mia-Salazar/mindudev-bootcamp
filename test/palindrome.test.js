const { palindrome } = require('../utils/palindrome');

test('check a quote in reverse', () => {
    const result = palindrome('miasalazar');
    expect(result).toBe('razalasaim');
})

test('check a empty palindrome', () => {
    const result = palindrome('');
    expect(result).toBe('');
})

test('check a palindrome with given undefined', () => {
    const result = palindrome();
    expect(result).toBeUndefined();
})