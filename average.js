
function getAverage(numberList){
    let sumTotal = 0;
    for(i=0; i < numberList.length; i++) {
        // let n = numberList[i];
        sumTotal += numberList[i];  //sumTotal = sumTotal + n
    }
    return sumTotal / numberList.length;
}

console.log("AVG:", getAverage([6, 3, 0, 5, 2]));

let studentList1 = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]}
];
let studentList2 = [
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]},
];
 
function showAverages(studentList){
for (let i = 0; i < studentList.length; i++ ){
    const student = studentList[i];
    const average = getAverage(studentList[i].scores);
    const textAverage = average.toFixed(1);
    console.log(student.name, textAverage);
    }
}
showAverages(studentList1);
showAverages(studentList2);
// let student = studentList[i];

// let numbers = [6, 3, 0, 5, 2];
// let total = addThemUp(numbers)
// console.log(total);

// let quantity = numbers.length;
// let average = total / quantity;
// console.log("AVERAGE", average);
// console.log("QUANTITY", average)