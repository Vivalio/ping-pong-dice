import t from 'tap';

import type { Command } from './index';
import diceRoller from './index';

t.test('Command type', async t => {
  t.test('should allow valid command formats', async t => {
    const validCommands: Command[] = [
      '1d6',
      '2d6+2',
      '4d10-5',
    ];

    validCommands.forEach((command) => {
      t.ok(command, `should allow ${command}`);
      const result = diceRoller(command);
      t.type(result, 'number', `should return a number for ${command}`);
      t.equal(result, 4, `should return 4 for ${command}`);
    });

    t.end();
  });

  t.test('should disallow invalid command formats', async t => {
    const invalidCommands: string[] = [
      'd',
      'd6+',
      'd-5',
      'd6-+2',
      'd6+2-',
    ];

    invalidCommands.forEach((command) => {
      t.test(`should disallow ${command}`, async t => {
        const testFunction = createTestFunction(command);
        t.throws(testFunction, `should throw an error for ${command}`);
        t.end();
      });
    });

    t.end();

    function createTestFunction(command: string) {
      return () => {
        const invalidCommand: string = command;
        // @ts-expect-error
        diceRoller(invalidCommand);
      };
    }
  });

  t.end();
});