// @ts-ignore
function fibonacci(number: number) {
    if (number <= 1) {
        return number;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
var array = [];
var sum = 0;
for (var i = 0; i < 5; i++) {
    array.push(fibonacci(i));
    sum += fibonacci(i);
}

console.log(array.toString());
console.log("Tổng 5 số fibonacci đầu tiên: " + sum);
