function Fighter(fighterProperties) {
    let name = fighterProperties.name,
        damage = fighterProperties.damage,
        hp = fighterProperties.hp,
        strength = fighterProperties.strength,
        agility = fighterProperties.agility,
        wins = fighterProperties.wins,
        losses = fighterProperties.losses;
    const MIN = 0,
        MAX = 100;

    this.getName = function() {
        return name;
    }
    this.getDamage = function() {
        return damage;
    }
    this.getStrength = function() {
        return strength;
    }
    this.getAgility = function() {
        return agility;
    }
    this.getHealth = function() {
        return hp;
    }
    this.logCombatHistory = function() {
        return `Name: ${name}, Wins: ${wins}, Losses: ${losses}`;
    }
    this.heal = function(increaseHealth) {
        if (hp + increaseHealth > MAX) {
            hp = MAX;
        } else {
            hp += increaseHealth;
        }
        return hp;
    }
    this.dealDamage = function(reduceHealth) {
        if (hp - reduceHealth < MIN) {
            hp = MIN;
        } else {
            hp -= reduceHealth;
        }
        return hp;
    }
    this.addWin = function() {
        return wins++;
    }
    this.addLoss = function() {
        return losses++;
    }
    this.attack = function(person) {
        let successfulAttack = Math.floor(Math.random() * MAX) -(person.getStrength() + person.getAgility());
        if (successfulAttack > person.getAgility()) {
            person.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${person.getName()}`);
        } else {
            console.log(`${person.getName()} attack missed`);
        }
    }
}

function battle(fighter1, fighter2) {
    const MIN = 0;
    if (fighter1.getHealth() === MIN) {
        console.log(`${fighter1.getName()} is dead and can't fight`);
    } else if (fighter2.getHealth() === MIN) {
        console.log(`${fighter2.getName()} is dead and can't fight`);
    } else {
        while (fighter1.getHealth() > MIN && fighter2.getHealth() > MIN) {
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);
        }
        if (fighter1.getHealth() === 0) {
            console.log(`${fighter2.getName()} has won!`);
            fighter2.addWin();
            fighter1.addLoss();
        } else if (fighter2.getHealth() === 0) {
            console.log(`${fighter1.getName()} has won!`);
            fighter1.addWin();
            fighter2.addLoss();
        }
    }
}