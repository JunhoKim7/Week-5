// String - ordered list of characters
text ="ABC" // <-- string literal ""
console.log(text[0]) // A
console.log(text[text.length - 1]) // LAST ONE e.g. C

// Array - ordered list of values
list = ["apple", "banana", "peach"] // <-- array literal []
console.log(list[0]) // apple
console.log(list[2]) // peach
console.log(list[list.length -1]) // peach

// Object - a bag of values accessed by name/keyword
fruit = { "a" : "apple", "b" : "banana", "c" : "peach"}
console.log(fruit["a"]) // apple
console.log(fruit["c"]) // peach
console.log(fruit.b) // dot notation - banana

airports = {
    "ATL" : "Atlanta Airport",
    "PDX" : "Portland Airport",
    "TPA" : "Tampa Airport",
    "KOR" : "Seoul Airport",
}
console.log(airports.ATL) // dot notation - short way
console.log(airports["KOR"])

zip_codes = {30338 : "Dunwoody, GA"}
console.log(zip_codes[30338])
z = 30338
console.log(zip_codes[z])
