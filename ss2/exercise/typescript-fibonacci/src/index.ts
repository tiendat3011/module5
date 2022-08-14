// @ts-ignore
function fibonacci(number: number) {
    if (number <= 1) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
var array = [0,1];
var sum = 1;
for (var i = 1; i <= 5; i++) {
    array.push(fibonacci(i));
    sum += fibonacci(i);
}

console.log(array.toString());
console.log("Tổng 10 số fibonacci đầu tiên: " + sum);