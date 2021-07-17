const average = array => {
    let final = 0;
    array.forEach(element => {
        final = final + element;
    });
    return final/array.length;
}

module.exports = { average }