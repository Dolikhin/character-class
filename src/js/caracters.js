class Character{
  constructor(name, type) {
    const validType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if(typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов');
    }

    if(!validType.includes(type)) {
      throw new Error('Неверный тип персонажа');
    }

    this.name = name;
    this.type = type;
    this.level = 1;
    this.health = 100;

    switch (type) {
      case 'Bowman':
        this.attack = 25;
        this.defense = 25;
        break;
      case 'Swordsman':
        this.attack = 40;
        this.defense = 10;
        break;
      case 'Magician':
        this.attack = 10;
        this.defense = 40;
        break;
      case 'Daemon':
        this.attack = 10;
        this.defense = 40
        break;
      case 'Undead':
        this.attack = 25;
        this.defense = 25;
        break;
      case 'Zombie':
        this.attack = 40;
        this.defense = 10;
        break;
    
     
      default:
        throw new Error('Недопустимый тип персонажа');
    }
  }

  damage(points) {
    
    this.health -= points * (1 - this.defense / 100);
    if (this.health < 0) {
      this.health = 0;
    }
    
  }
}

try {
  const bowman = new Character('Лучник', 'Bowman');
  console.log(bowman); // { name: 'Лучник', type: 'Bowman', health: 100, level: 1, attack: 25, defense: 25 }
  bowman.damage(30);
  console.log(bowman.health);

  const swordsman = new Character('Мечник', 'Swordsman');
  console.log(swordsman); // { name: 'Мечник', type: 'Swordsman', health: 100, level: 1, attack: 40, defense: 10 }
  
  swordsman.damage(50);
  console.log(swordsman.health);
  
  const invalidCharacter = new Character('СлишкомДлинноеИмя', 'Bowman');
} catch (error) {
  console.error(error.message); // Имя должно быть строкой от 2 до 10 символов
}