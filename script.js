// https://www.youtube.com/watch?v=5uKtTezJpxk
// https://www.youtube.com/watch?v=LteNqj4DFD8
// 11 
function collatz(n) {
    if (n === 1) {
        return 0
    }
    return n % 2 === 0 ? collatz(n / 2) + 1 : collatz(3 * n + 1) + 1
}
console.log(`Liczba kroków ${collatz(21)}`)