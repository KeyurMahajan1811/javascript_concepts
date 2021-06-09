// Create a for loop that iterates upto 100 while outputing 'fizz' at multiples of 3
// 'bricks' at multiples of 5 and 'fizzbricks' at multiples of 3 and 5 

for (let i = 1; i <= 100; i++) {
    let f = i % 3 === 0,
        b = i % 5 === 0;
    console.log(f ? (b ? 'Fizzbricks' : 'Fizz') : b ? 'buzz' : i)
}