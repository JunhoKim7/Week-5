
// const things = []
// const entitiies = []

 // things that can move on screen

function Position(px,py){
    return{x: px, y: py,};
}

// let p = Position(10, 5);
// console.log(p.x, p.y)


function Sprite(nameParameter, kindParameter, posParameter){
    return {
        health: 100,
        mana: 50,
        name: nameParameter,
        kind: kindParameter,
        position: posParameter,
    };
}

const spriteList = [];

spriteList.push(Sprite("Red", "champion", Position(10, 5)));
spriteList.push(Sprite("Ash", "champion", Position(15, 5)));
spriteList.push(Sprite("Blue", "rival", Position(20, 20)));
spriteList.push(Sprite("Trainer1", "enemy", Position(15, 20)));
spriteList.push(Sprite("Trainer2", "enemy", Position(20, 10)));

function printList(list){
    for (let i = 0; i < list.length; i++){
        console.log(i, list[i]);
        }
    }

function getHeroList(){
    const outputList = [];
    for (let i = 0; i < spriteList.length; i++){
        if(spriteList[i].kind === "champion"){
        // console.log(i, spriteList[i]);
        outputList.push(spriteList[i]);
        }
    }
    return outputList;
}
printList(getHeroList());


// function printTrainers(){
//     for (let i = 0; i < spriteList.length; i++){
//         if(spriteList[i].kind === "trainer"){
//         console.log(i, spriteList[i]);
//         }
//     }
// }

// printTrainers()
// console.log(spriteList[0])
// console.log(spriteList[1])
