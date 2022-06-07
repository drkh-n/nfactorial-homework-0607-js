// Dalida's Batcave

// let, const
let help_seeker;
help_seeker = "The World";

const founder = "Dalida";

const ORGANIZATION_NAME = `${founder}'s Batcave`;
const HEADQUARTERS = "N!";

//data types
let employees = 20;
let stayAlert = true;

help_seeker = "Darkhan";
let problems = null;

//objects
let superhero = {
    name: "Dalida",
    health: 1000,
    power: "Dvizh Beam",
    weakness: "programming"
};

superhero.wealth = 1000000000;
delete superhero.weakness;
delete superhero["wealth"];

superhero.activatePower = function() {
    console.log("Superhero " + this.name + " activates " + this.power);
};
superhero.activatePower();

alert("origin" in superhero);

for (health in superhero) {
    console.log(health);
}
//arrays
let equipment = ["katana", "spoon", "pistol", "press F"];
equipment.push("nuclear weapon");
equipment.pop();
equipment.unshift("iphone");
equipment.shift();

let transport = ["batmobile", "batbicycle"];
equipment = equipment.concat(transport);
equipment.length;

let swords = equipment.filter(eq => eq === "katana");
let slicedEquipment = equipment.map(eq => slice(eq));

//control flow
alert(superhero.health == "1000");
alert(superhero.health == 1000);
alert(superhero.health === "1000");
alert(superhero.health === 1000);

let damage = superhero.power === "Dvizh Beam" ? "100000" : "0";
console.log(damage);

let selectedWeapon;
let currentWeapon = selectedWeapon ? equipment[0];
console.log(currentWeapon);

let selectedTransport = transpor[0];
if (selectedTransport) {
    console.log("Riding " + selectedTransport);
} else {
    console.log("Riding a bus or walking");
}

//loops
let enemies = 100;
for (let i = 0; enemies > i; i++) {
    enemies -= 1;
}
console.log(`Enemies left: ${enemies}`);

let enemiesGatesIsOpen = true;
while (enemiesGatesIsOpen) {
    if (damage > 10000000) {
        enemiesGatesIsOpen = false;
    }
    damage += 10000;
}

let bossIsDefeated = false;
do {
    if (damage > 10000000000 && superhero.health > 100) {
        bossIsDefeated = true;
    }
    damage += 10000;
} while (bossIsDefeated == false);

//functions
function callHero(superhero) {
    console.log(`Superhero ${superhero.name} is going to help`);
}

function callHero({name, power}) {
    console.log(`Superhero ${name} is going to help with power ${power}`)
}

let countEquipment = function () {
    return equipment.length;
}

countEquipment;

let canUseEquipment = (eq) => return equipment.includes(eq);

canUseEquipment("press F");
canUseEquipment("Tea");

function sendHelp(hero_name, power, ...equipment) {
    return `Superhero ${hero_name} with the equipment ${equipment} and power ${power} is on the way!`;
}

//import, export
export {canUseEquipment, sendHelp};
import {canUseEquipment, sendHelp} from "./export.js";

export {canUseEquipment as cUE, sendHelp as sH};
import {cUE as canUseEquipment, sH as sendHelp} from "./export.js";

export default equipment = ["katana", "spoon", "pistol", "press F"];
import newEquipment from "./exportDefault.js";
