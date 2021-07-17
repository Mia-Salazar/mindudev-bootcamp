const palindrome = (quote) => {
    if (quote === undefined) {
        return undefined;
    }
    return quote.split('').reverse().join('');
}

module.exports = { palindrome }