function add(a, b){
    additionResult = a+b
    console.log(`Addition: ${additionResult}`)
    return additionResult
}
add(5, 5)
function subtract(a,b){
    subtractionResult=a-b
    console.log(`Substraction: ${subtractionResult}`)
}
subtract(2,10)
function multiply(a,b){
    multiplicationResult=a*b
    console.log(`Multiplication: ${multiplicationResult}`)
}
multiply(2,1)
function divide(a,b){
    divisionResult=a/b
    console.log(`Division: ${divisionResult}`)
}
divide(0,0)

function makeInt(a, b){
    let output = parseInt(a)/b
    console.log(`Parsing Integer: ${output}`)
}
makeInt('4', 4)
function increment(n){
    let incremented = ++n;
    console.log(`Incremented: ${incremented}`)
}
increment(4)

function  preserveDecimal(n){
    let decimal = parseFloat(n)
    console.log(`Parsing Decimal: ${decimal}`)
    return decimal;
}
preserveDecimal(2)