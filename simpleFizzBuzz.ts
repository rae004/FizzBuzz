let fizzes = 0;
let buzzes = 0;
let noMatches = 0;
const simpleFizzBuzz = (num: number) => {
    if (num % 5 === 0) {
        ++fizzes;
        return 'Fizz!';
    }

    if (num % 7 === 0) {
        ++buzzes;
        return 'Buzz!'
    }

    ++noMatches;
    return num;
}

for (let i = 0; i < 1000; ++i) {
    console.log(simpleFizzBuzz(i));
}

console.log('Number of Fizzes: ', fizzes);
console.log('Number of Buzzes: ', buzzes);
console.log('Number of No Matches: ', noMatches);