let numFan = Number(prompt("Please Enter the number of fan"));
let numLight = Number(prompt("Please Enter the number of light"));
let numFridge = Number(prompt("Please Enter the number of fridge"));

let costPerWatt = 500;

let totalWatt =(numFan * 10) + (numLight * 5) + (numFridge * 50);
let totalBill = totalWatt*500;

let user = `Fayraz`;

function calcElcBill(numFan, numLight, numFridge) {
     totalWattage = (numFan * 10) + (numLight * 5) + (numFridge * 50);
     totalBill = totalWattage * 500;
}

console.log(` ${user}, Your Total Use Wattage is ${totalWatt} Watt, <br> And Total Electricity Bill is ${totalBill} TK.`);
document.write(` ${user}, Your Total Use Wattage is ${totalWatt} Watt, <br> And Total Electricity Bill is ${totalBill} TK.`);

