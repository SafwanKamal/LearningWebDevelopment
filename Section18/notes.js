function multiplly(num1, num2){
    return num1 * num2;
}

function add(num1, num2){
    return num1 + num2;
}



// This is a higher order function
function calc(num1, num2, operator){
    return operator(num1, num2);
}

console.log(calc(1, 2, add));




// Javascript Object

var bellBoy1 = {
    name: "A",
    age: 20,
    hasWorkPermit: true,
    langs: ["Eng", "Fr"]
};

console.log(bellBoy1.langs);




// Constructor Functions

function HouseKeeper(name, YOE, permit, speciality){
    this.name = name;
    this.yearsOfExperience = YOE;
    this.permit = permit;
    this.speciality = speciality;

    this.clean = function(){
        alert("Cleaning in Progress. Please Excuse us.");
    }
}

var houseKeeper1 = new HouseKeeper('B', 23, true, ["cleaning", "gardening"]);
houseKeeper1.clean();