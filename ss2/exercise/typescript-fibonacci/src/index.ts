// happy coding 👻
function fibonacci(n: number): number {
    if (n <= 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);``
    }
}

let sum = 0;

console.log("10 số fibonaci đầu tiên là:");

for (let i = 1; i <= 10; i++) {
    console.log(fibonacci(i))
    sum += fibonacci(i);
}

console.log("Tổng 10 số fibonaci đầu tiên: " + sum);