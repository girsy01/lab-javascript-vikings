// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;
    return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;
    return "A Saxon has died in combat";
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    //select viking and saxon
    const attackingViking =
      this.vikingArmy[parseInt(Math.random() * this.vikingArmy.length)];
    const attackedSaxon =
      this.saxonArmy[parseInt(Math.random() * this.saxonArmy.length)];
    //add damage to saxon with strength of viking
    const attack = attackedSaxon.receiveDamage(attackingViking.attack());
    //remove saxon if dead
    if (attackedSaxon.health <= 0) {
      const index = this.saxonArmy.indexOf(attackedSaxon);
      this.saxonArmy.splice(index, 1);
    }
    return attack;
  }
  saxonAttack() {
    const attackingSaxon =
      this.saxonArmy[parseInt(Math.random() * this.saxonArmy.length)];
    const attackedViking =
      this.vikingArmy[parseInt(Math.random() * this.vikingArmy.length)];
    const attack = attackedViking.receiveDamage(attackingSaxon.attack());
    if (attackedViking.health <= 0) {
      const index = this.vikingArmy.indexOf(attackedViking);
      this.vikingArmy.splice(index, 1);
    }
    return attack;
  }
  showStatus() {
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0)
      return "Vikings and Saxons are still in the thick of battle.";
    else {
      if (this.saxonArmy.length === 0)
        return "Vikings have won the war of the century!";
      if (this.vikingArmy.length === 0)
        return "Saxons have fought for their lives and survived another day...";
    }
  }

  //refactoring
  armyAttack(attackingArmy, attackedArmy) {
    const attackingSoldier =
      attackingArmy[parseInt(Math.random() * attackingArmy.length)];
    const attackedSoldier =
      attackedArmy[parseInt(Math.random() * attackedArmy.length)];
    const attack = attackedViking.receiveDamage(attackingSaxon.attack());
    if (attackedViking.health <= 0) {
      const index = attackedArmy.indexOf(attackedViking);
      attackedArmy.splice(index, 1);
    }
    return attack;
  }
}
