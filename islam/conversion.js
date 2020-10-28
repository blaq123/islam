const pounds = 2.205;
var k = "kilo";
var p = "pounds";

console.log(`${k}                       ${p}`)
for (var x = 1; x <= 50; x++) {

    let conversionToPounds = x * pounds;

    if (x === 10) {
        break
    }
    console.log(`${x}        ${conversionToPounds.toFixed(2)}`);
    

}
 