function getAllSubstringsAlternative(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
        let substring = '';
        for (let j = i; j < str.length; j++) {
            substring += str[j];
            result.push(substring);
        }
    }
    return result;
}

const theString = 'somerandomword';
console.log(getAllSubstringsAlternative(theString));
