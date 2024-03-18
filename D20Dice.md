# d20 Dice Syntax Cheat Sheet

## Basic Rolls

- **Roll a single die**: `d20`
- **Roll multiple dice**: `3d6` (Roll a 6-sided die 3 times)

## Modifiers

- **Add or subtract a constant**: `d20+5` (Roll a d20 and add 5 to the result)
- **Multiply or divide**: `2d10*2` (Roll two 10-sided dice and multiply the result by 2)

## Advanced Rolls

- **Advantage/Disadvantage**: `2d20kh1` (Roll 2 d20s and keep the highest 1 roll - Advantage in D&D 5e)
- **Drop Lowest**: `4d6dl1` (Roll 4 d6s and drop the lowest 1 roll - often used for D&D ability score generation)

## Comparisons

- **Successes vs Failures**: `10d10>7` (Roll 10 d10s, count number of dice that rolled greater than 7)
- **Critical Hits**: `d20=20` (Roll a d20, if it's a 20, it's a critical hit)

## Combining Commands

- **Multiple Actions**: `d20+5; d8+3` (Roll a d20 and add 5, then roll a d8 and add 3)

Remember, the exact syntax and available commands may vary depending on the dice rolling system you're using. Always check the documentation for your specific system to ensure accuracy. Happy rolling! 🎲
