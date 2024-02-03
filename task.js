// Task 1

function myMultiply(num1 , num2 , num3 , num4){
    let multiply = num1*num2*num3*num4;
    return multiply ;
}

let gunfol = myMultiply(7,8,9,5);

console.log(gunfol)


// Task 2

const myArray = [11,12,13,14,15,16,17,18,19];


let oddNum;
let evenNum;

function result(meltiNum,divideNum){
    meltiNum = []
    divideNum = []
    for(let i of myArray){
        if(i % 2 === 1){
            let multi = i * 2
            meltiNum.push(multi)
        }
        else{
            let divide = i/2;
            divideNum.push(divide)
        }
    }
    console.log(divideNum)
    return meltiNum;

}

let rev = result(oddNum , evenNum)

console.log(rev)
