const alphabet = [
    { letter: "M", value: 1000 },
    { letter: "CM", value: 900 },
    { letter: "D", value: 500 },
    { letter: "CD", value: 400 },
    { letter: "C", value: 100 },
    { letter: "XC", value: 90 },
    { letter: "L", value: 50 },
    { letter: "XL", value: 40 },
    { letter: "X", value: 10 },
    { letter: "IX", value: 9 },
    { letter: "V", value: 5 },
    { letter: "IV", value: 4 },
    { letter: "I", value: 1 },
];

export function romanNumber(number: number): string {
    for (const element of alphabet) {
        if (number >= element.value) return element.letter + romanNumber(number - element.value);
    }
    return "";
}