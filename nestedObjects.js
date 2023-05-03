const person = {
    Name:"Mithun",
    age:21,
    address: { street:"B8, Block B, Industrial Area.",
city:"Sector 62, Nodia",
state:"Uttar Pradesh"},
}

const {Name,address:{street}} =person;

console.log({Name,street});


// Output: { name: 'Mithun', street: 'B8, Block B, Industrial Area.' }