var a = 100;
var b = "student"
var c = {
    name: "john",
    surname: "doe"
};
var d = 20;

console.log(c.name + " is a " + "year old " + b + " with a total mark of " + a);
d += a
console.log(d)


var a = 32
var b = 43
if (a > b) {
    console.log(a + " is greater than " + b);

} else if (b == a) {
    console.log(`${b} is equal to  ${a}`);
} else {
    console.log(`${b} is greater than ${a}`);
}