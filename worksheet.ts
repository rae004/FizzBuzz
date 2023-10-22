const num = -121;
console.log('our num: ', num);

/**
 * Return an array of numbers that is the reversed number passed as a parameter.
 *
 * @param numbers
 */
const reverseArrayOfDigits = (numbers: number) => {
    if (numbers === 0) return [numbers]
    let res: number[] = []

    while (numbers){
        let n = numbers % 10
        res.push(n)
        numbers = (numbers - n) / 10
    }

    return res.map((n) => n)
}

const createIntFromArray = (array: number[]): number => {
    let number = 0;

    array.forEach((num) => {
        number = number * 10 + num;
    })

    return number
}

const isNumPalindrome = (num: number): boolean => {
    const reversedArrayOfDigits = reverseArrayOfDigits(num);
    const reversedInt = createIntFromArray(reversedArrayOfDigits);
    const isPalindrome = reversedInt === num;

    return Math.sign(num) > 0 ? isPalindrome : false;
}

console.log(isNumPalindrome(num));
