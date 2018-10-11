class Animal {
    constructor(sound, species, discription, speed){
        this.sound = sound
        this.species = species
        this.discription = discription
        this.speed = speed
    }
    running(){
        this.speed += 10
    }
}
let myAnimal = new Animal ("bark", "Dog", "four legged pet", 0)
console.log(myAnimal);
let yourAnimal = new Animal ("meow", "Cat", "four legged pet", 0)
console.log(yourAnimal);
myAnimal.species = "Wolf"
console.log(myAnimal);
yourAnimal.color = "red"
console.log(yourAnimal);
console.log(myAnimal);
myAnimal.running(myAnimal)
console.log("Top speed: ", myAnimal.speed);
console.log(myAnimal);
