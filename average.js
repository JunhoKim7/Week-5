
function getAverage(numberList){
    let sumTotal = 0;
    for(i=0; i < numberList.length; i++) {
        // let n = numberList[i];
        sumTotal += numberList[i];  //sumTotal = sumTotal + n
    }
    return sumTotal / numberList.length;
}

console.log("AVG:", getAverage([6, 3, 0, 5, 2]));

// let numbers = [6, 3, 0, 5, 2];
// let total = addThemUp(numbers)
// console.log(total);

// let quantity = numbers.length;
// let average = total / quantity;
// console.log("AVERAGE", average);
// console.log("QUANTITY", average)