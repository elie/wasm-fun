export function getDivisorsWasm(num: i64): Array<i64> {
    
    const divisors: Array<i64> = [];

    // get all small divisors
    // (those less than or equal to the square root)
    let end = Math.floor(Math.sqrt(num as f64))
    for (let int = 1; int <= end; int++) {
        if (num % int === 0) {
            divisors.push(int);
        }
    }

    // divisors always come in pairs,
    // so we can use the small ones to get the large ones.
    for (let i = divisors.length - 1; i >= 0; i--) {
        let int = divisors[i];
        // if the number is a perfect square,
        // don't count the square root twice.
        if (int * int === num) continue;
            divisors.push(num / int);
        }
    return divisors;
}