
const person = {
    first: "Junho",
    last: "Kim",
    age: "25",
    phone: "888-888-8888",
    DOB: new Date("5-3-1999"),
};

const person2 = {
    first: "Chey",
    last: "Ing",
    age: "26",
    phone: "666-666-6666",
    DOB: new Date("11-10-1998"),
};

function printLabel(p){
    return `
    NAME: ${p.first} ${p.last}
    PHONE: ${p.phone}
    `;
}

console.log(printLabel(person));
console.log(printLabel(person2));
console.log(printLabel({first:"Danny", last:"Phantom", phone:"777-777-7777"}));
