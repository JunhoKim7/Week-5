


const car = {
    location: 1000,
    speed: 30,
    drive: ()=> this.location += this.speed
};

console.log(car.location) //before
car.drive()
car.drive()
car.drive()
console.log(car.location) //after


let location = 1000
let speed = 10
console.log("LOCATION BEFORE:", location)
location += speed // short for Location = (location + speed)
console.log("LOCATION AFTER:", location)
