import Character from './character';

export default class Daemon extends Character {
  constructor(name, type, attack = 10, defence = 40) {
    super(name, type);
    this.attack = attack;
    this.defence = defence;
  }
}
