
function multiplicationTable(num) {

    let result;

    for (var x = 1; x <= 12; x++) {

        result = `${num} x ${x} = ${x * num}`;

        console.log(result);
    }
}

multiplicationTable(2);
multiplicationTable(3);
multiplicationTable(4);
