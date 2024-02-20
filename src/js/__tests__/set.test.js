import Team from '../set';
import Bowman from '../bowman';
import Daemon from '../daemon';

test('testing working status of add method of the Team class', () => {
  const team = new Team();
  const bowman = new Daemon('Daemon', 'Daemon');
  team.add(bowman);
  expect(team.members.has(bowman)).toBe(true);
});

test('testing error status of add method of the Team class', () => {
  const team = new Team();
  const bowman = new Daemon('Daemon', 'Daemon');
  team.add(bowman);
  expect(() => team.add(bowman)).toThrow(
    'Такой герой то уже есть в команде!',
  );
});

test('testing working status of addAll method of the Team class', () => {
  const team = new Team();
  const bowman = new Bowman('Daemon', 'Daemon');
  const daemon = new Daemon('Daemon', 'Daemon');
  team.addAll(bowman, daemon, bowman, daemon);
  expect(team.members.size).toBe(2);
});

test('testing working status of toArray method of the Team class', () => {
  const team = new Team();
  const bowman = new Bowman('Daemon', 'Daemon');
  const daemon = new Daemon('Daemon', 'Daemon');
  team.addAll(bowman, daemon, bowman, daemon);
  expect(team.toArray()).toEqual([bowman, daemon]);
});
