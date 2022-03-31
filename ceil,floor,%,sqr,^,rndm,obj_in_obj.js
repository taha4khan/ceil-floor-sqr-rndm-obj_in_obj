console.log("^")
console.log(Math.pow(4,2));
console.log(3**2);console.log("\n")

console.log("√")
console.log(Math.sqrt(9)+ "\n")

//ceilling
console.log(Math.ceil(15.001)+ "\n");

//flooring
console.log(Math.floor(15.001)+ "\n")

//modules, even-odd
console.log(10%2);
console.log(38%6 + "\n");

//Random
console.log(Math.random());
console.log(Math.ceil(Math.random()));
console.log(Math.floor(Math.random()*10));
console.log(Math.ceil(Math.random()*10)+5 + "\n");


// OBJECTS IN OBJECT
musab={
    name:"taha",
    rollno:"6401"
}
console.log(musab);
musab.name="khubaib";
musab.rollno="6401";
console.log(musab);
delete musab.name;
console.log(musab);
musab.name="khubaib";
delete musab.rollno;
console.log(musab)
musab.rollno="6401";


for (const key in musab) {
    if (musab.hasOwnProperty.call(musab, key)) {
        const element = musab[key];
        console.log(element + "\n")
    }
}

//ALSO OBJECTS IN OBJECT
Akon={
    name:"slim shaddy",
    smak:"kon wick"
}

for (const you in Akon) {
    if (Akon.hasOwnProperty.call(Akon,you)) {
        const element = Akon[you];
        console.log(element)
    }
}


console.log(Akon);
Akon.name="glado";
Akon.smak="kon wick";
console.log(Akon);
delete Akon.name;
console.log(Akon);
Akon.name="glado";
delete Akon.smak;
console.log(Akon);console.log("\n");

// modules out from object
let obj1={
    name:"aman",
    father_name:"wahid",
    obj2:{
        name:"muneer",
        father_name:"maqsod",
    }
}
for (const key in obj1) {
    if (Object.hasOwn(obj1, key)) {
        const element = obj1 [key];
        console.log(typeof(element))
        if (typeof(element)=="object") {
            for (const key in element) {
                if(Object.hasOwnProperty.call(element,key)) {
                    const e = element [key];
                    console
                }
            }
        } else if(typeof(element=='string')) {
            console.log(element)
        }

    }
}