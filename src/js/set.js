export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error('Такой герой то уже есть в команде!');
    }
    this.members.add(member);
  }

  addAll(...allMembers) {
    for (const member of allMembers) {
      this.members.add(member);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
