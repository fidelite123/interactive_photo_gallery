function transformString(str) {
    let length = str.length;

    if (length % 15 === 0) {
        // If divisible by 15
        return str.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // If divisible by 3
        return str.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // If divisible by 5
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        // If not divisible by 3, 5, or 15
        return str;
    }
}

// Example usage:
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
