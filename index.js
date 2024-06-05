import Bowman from './src/js/bowman.js';
import Swordsman from './src/js/Swordsman.js';
import Magician from './src/js/Magician.js';

const bowman = new Bowman('Лучник');
console.log(bowman); // { name: 'Лучник', type: 'Bowman', health: 100, level: 1, attack: 25, defense: 25 }

const swordsman = new Swordsman('Мечник');
console.log(swordsman); // { name: 'Мечник', type: 'Swordsman', health: 100, level: 1, attack: 40, defense: 10 }

const magician = new Magician('Маг');
console.log(magician); // { name: 'Маг', type: 'Magician', health: 100, level: 1, attack: 10, defense: 40 }
