
// OBJECTS {} VS ARRAYS []

// Access: Index vs Key(string or number)

// array - accessed by index AKA position
// object - values accessed by keys

// All arrays are objects, but most objects are not arrays

object = {
    property1: "value1",
    property2: "value2",
    property3: "value3",
}

car = {
    price: 9999,
    make: "FORD",
    model: "VIPER",
    engine: {
        engineType: "V 10",
        pistons: [{rodThrown: false}, {rodThrown: false}, {rodThrown: false}, {rodThrown: false},]
    }
}

htmlElement = {
    tagName: "div",
    class: ["hidden", "large", "col-3"],
    id: "thingy",
    name: "jun",
    value: "69"
}

list = []
list2 = new Array();
now = new Date();
count = new Number();

thing1 = {};
thing2 = new Object();

lots = [];
for (let i = 0; i < 1000; i++){
    lots.push(i);
}
console.log(lots.length)

lotsaProps = {};
for (let i = 0; i < 1000000; i++){
    lotsaProps[i] = i;
}
console.log("DONE");

// element = document.createElement("div");

colors = ["red0", "green1", "blue2"]
console.log(colors[1]);
console.log(colors.at(1))

console.log(list.length)