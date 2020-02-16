//Assignment 1
class Weapon {
    constructor({name, attack, durability, range}) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }
    takeDamage(damage) {
        if (this.durability - damage <= 0 ) {
            return 0;
        } else {
            return this.durability -= damage;
        }
    }
}

const sword = new Weapon({
    name: 'Старый меч',
    attack: 20,
    durability: 10,
    range: 1,
});

sword.takeDamage(5);
console.log(sword.durability); // 5

sword.takeDamage(50);
console.log(sword.durability); // 0