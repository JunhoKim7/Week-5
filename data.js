
// Array of Object
const data = [
    {name: "Chey", kind: "Girl"},
    {name: "PoPo", kind: "Dog"},
    {name: "Ashe", kind: "Cat"},
    {name: "Koda", kind: "Mouse"},
];

function petToString(pet){
    return `
    PET NAME: ${pet.name}
    KIND: Good ${pet.kind}
    `;
}
function printPet(pet){
    console.log(petToString(pet));
}

// console.log(petToString(data[0])); //first one
// console.log(petToString(data[data.length - 1])); last one

// // CLASSIC (old school)
// for (i=0; i < data.length; i++) { // i is the index
//     console.log(petToString(data[i]));
// }

//data.forEach((pet) => console.log(petToString(pet)))
data.forEach(printPet);

