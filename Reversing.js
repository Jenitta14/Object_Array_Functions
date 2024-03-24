function rev(number) {
    let a = 0;
    while (a !== 0) {
        a = a * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    return a;
}
let num = 12345;
let a = rev(num);
console.log(a); 
