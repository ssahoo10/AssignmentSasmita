

let genderType = "female"
function printGender(){
let  color = "brown"
if(genderType==="female"){
    var age = 30
    let color = "pink"
console.log("Colour inside the if block is " +color);
}
console.log("Age of the person outside if-block is " +age);
console.log("Colour outside the if-block is " +color);
}
printGender()
console.log("gender is " +genderType);
genderType = "male"
console.log("gender is " +genderType);
