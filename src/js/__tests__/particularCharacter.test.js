import Bowman from '../bowman';
import Daemon from '../daemon';

test.each([
  [
    'all classes',
    [new Bowman('Bowman', 'Bowman'), new Daemon('Daemon', 'Daemon')],
    [
      {
        name: 'Bowman',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        name: 'Daemon',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
      },
    ],
  ],
])('testing working status of %s', (_, imported, expected) => {
  expect(imported).toEqual(expected);
});
