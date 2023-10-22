interface ConditionsProps {
    name: string;
    divisibleBy: number;
    count: number;

}

const iterations = 100;
const conditions: ConditionsProps[] = [
    {name: 'Fizz!', divisibleBy: 5, count: 0},
    {name: 'Buzz!', divisibleBy: 7, count: 0},
    {name: 'Bazz!', divisibleBy: 3, count: 0},
    {name: 'Zazz!', divisibleBy: 8, count: 0}
]
let naMatches = 0;
const fizzBuzz = (num: number) => {
    let result = num as string | number;

    for (const condition of conditions) {
        if (num % condition.divisibleBy === 0) {
            condition.count = condition.count + 1;
            result = condition.name;
            break;
        }
    }

    if (typeof result === 'number') {
        naMatches = naMatches + 1;
    }

    return result;
}

for (let i = 0;  i < iterations; i++) {
    const result = fizzBuzz(i);
    console.log(result);
}

console.log(`Total iterations: ${iterations.toLocaleString()}`);
conditions.map((condition) => console.log(`Number of ${condition.name.slice(0, -1)}es divisible by ${condition.divisibleBy.toLocaleString()}: ${condition.count.toLocaleString()}`))
console.log(`Number not divisible by ${conditions.map((condition) => condition.divisibleBy.toLocaleString())}: ${naMatches.toLocaleString()}`);

