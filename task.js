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
    // console.log(divideNum)
    return [meltiNum,divideNum];

}

[oddNum , evenNum]= result()

console.log(oddNum);
console.log(evenNum)


// Task 3

const myArrays= [11,12,13,14,15,16,17,18,19,20];

function make_avg(avg){
    let sum = 0 ;
    for(let i of myArrays){
        sum += i
    }
    avg = sum / myArrays.length

    return avg
}

console.log(make_avg());

// Task 4 

const binaryString = '001100101011101110000010101000101011100';

function count_zero(){
    let arraysMethod = binaryString.split('');
    let count = 0
    for(let i of arraysMethod){
        if(i == 0){
            count++
        }
    }
    return count;
}

let counts = count_zero();

console.log(counts);

// Task 5

function odd_even(num){
    if(num % 2 === 0){
        return 'even number'
    }
    return 'odd number'
}

let num = odd_even(3)

console.log(num)
