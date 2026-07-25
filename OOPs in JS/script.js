// let obj = {
//     a : 1,
//     b : "nitish"
// }

// console.log(obj)

// let animal = {
//     eat : true
// };

// let rabbit = {
//     jump: true
// };

// rabbit.__proto__ = animal; //set rabbit.[[prototype]] = animal
// console.log(rabbit)

class animal{
    constructor(name){
        this.name = name;
        console.log("constructor is called...");
    }
    eat(){
        console.log("eating")
    }
    jump(){
        console.log("jump")
    }
}

class lion extends animal{
    constructor(name){
        super(name)
        console.log("this is constructor from lion class")
    }
}

// let a = new animal("Bunny");
// console.log(a)

// let l = new lion("sheraaa");
// console.log(l)

//Get and Set--->

class user{
    constructor(name){
        this.name = name;
    }

    get name(){
        return this.__name;
    }

    set name(value){
        if (value.length < 4){
            console.log("the name is too short...")
            return;
        } 
        this.__name = value;
    }
}

let u = new user("john");
console.log(u.name); //invoke the get function

u.name = "" //invoke the name is too short