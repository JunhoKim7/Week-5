
const listOfChildren = ["Natalie", "Brittany", "Zachary"];
listOfChildren.unshift('"Can\'t even" Bianca');
listOfChildren.push("O'Reilly");

// for "OF" is for arrays/lists
for (let childName of listOfChildren){
    console.log(childName);
}


const peopleObject = {billy: 111, jane: 222, pacifica: 333};

// for *IN* grabs all keys from an object
for (const key in peopleObject){
    const score = peopleObject[key];
    console.log(`The person *${key.toUpperCase()}* has a score of ${score}.`);
}