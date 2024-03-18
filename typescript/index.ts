const commandPrefix = [1, 2, 4, 5, 6, 7, 8, 9, 10] as const;
const commandSuffix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] as const;
type CommandPrefix = typeof commandPrefix[number] | '';
type CommandSuffix = typeof commandSuffix[number];

export type Command = `${CommandPrefix}d${CommandSuffix}` | `${CommandPrefix}d${CommandSuffix}+${CommandSuffix}` | `${CommandPrefix}d${CommandSuffix}-${CommandSuffix}`;

const diceRoller = (command: Command, rand: () => number = Math.random): number => {
  return 4;
};

export default diceRoller;
