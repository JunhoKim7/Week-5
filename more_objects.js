// A single object can have many different unrelated properties
const person = {
    first: "Junho",
    last: "Kim",
    age: "25",
    phone: "888-888-8888",
    DOB: new Date("5-3-1999"),
};

person.hobby = "billiards"; // add one more property and define its value

console.log(person.DOB)
console.log(person.phone)
console.log(person.hobby)

const fruit = [ // create a array literal of ordered individual items
    "apple",
    "banana",
    "peach",
];
console.log(fruit[1]) // access by offset position

fruit.push("pineapple") // add one more item to end of list5
fruit.push("strawberry")
fruit.push("kiwi", "melon") // 2 at once

console.log(fruit[5])


empty_array = []
empty_object = {}
