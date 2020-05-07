class Fighter {
    constructor(fighterProperties) {
        this._name = fighterProperties.name;
        this._damage = fighterProperties.damage;
        this._hp = fighterProperties.hp;
        this._strength = fighterProperties.strength;
        this._agility = fighterProperties.agility;
        this.wins = 0;
        this.losses = 0;
        this._min = 0;
        this._max = 100;
    }
    getName() {
        return this._name;
    }
    getDamage() {
        return this._damage;
    }
    getStrength() {
        return this._strength;
    }
    getAgility() {
        return this._agility;
    }
    getHealth() {
        return this._hp; 
    }
    logCombatHistory() {
        return `Name: ${this._name}, Wins: ${this.wins}, Losses: ${this.losses}`
    }
    heal(increaseHealth) {
        if(this._hp + increaseHealth > this._max) {
            this._hp = this._max;
        } else {
            this._hp += increaseHealth;
        }
        return this._hp;
    }
    dealDamage(reduceHealth) {
        let reducer = this._hp - reduceHealth;
        if(reducer < this._min) {
            this._hp = this._min;
        } else {
            this._hp -= reduceHealth;
        }
    }
    addWin() {
        this.wins += 1;
    }
    addLoss() {
        this.losses += 1;
    }
    attack(person) {
        let successfulAttack = Math.floor(Math.random() * this._max) - (person.getStrength() + person.getAgility());
        if (successfulAttack > person.getAgility()) {
            person.dealDamage(this._damage);
            console.log(this._name + ` makes ${this._damage} damage to ${person.getName()}`);
        } else {
            console.log(`${person.getName()} attack missed`);
        }
    }
}

function battle(fighter1, fighter2) {
    if (fighter1._hp === 0) {
        console.log(`${fighter1.getName()} is dead and can't fight`)
    } else if (fighter2._hp === 0) {
        console.log(`${fighter2.getName()} is dead and can't fight`)
    } else {
        while (fighter1._hp !== 0 && fighter2._hp !== 0) {
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);
        }
        if (fighter1._hp === 0) {
            console.log(`${fighter2.getName()} has won!`);
            fighter2.addWin();
            fighter1.addLoss();
        } else if (fighter2._hp === 0) {
            console.log(`${fighter1.getName()} has won!`);
            fighter1.addWin();
            fighter2.addLoss();
        }
    }
}