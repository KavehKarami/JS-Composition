function monster({ name }) {
  return {
    attack: () => console.log(`${name} attacked`),
    walk: () => console.log(`${name} walked`)
  };
}

function swimmer({ name }) {
  return {
    swim: () => console.log(`${name} swam`)
  };
}

function flayer({ name }) {
  return {
    fly: () => console.log(`${name} flew`)
  };
}

function swimingFlyingMonster(name) {
  const monsterName = { name };

  return {
    ...monster(monsterName),
    ...swimmer(monsterName),
    ...flayer(monsterName)
  };
}

const obj = swimingFlyingMonster("Monster");
obj.attack();
obj.walk();
obj.swim();
obj.fly();
