# ping-pong-dice

# The library

The aim is to implement a library that accepts a string command representing a roll of the dice. 

### These commands may look like:

1. `1d20`: This means roll one 20-sided die. The answer can range from 1 (minimum roll) to 20 (maximum roll).

2. `8d6`: This means roll eight 6-sided dice. The answer will be the sum of all eight rolls, which can range from 8 (if you roll eight 1s) to 48 (if you roll eight 6s).

3. `2d10`: This means roll two 10-sided dice. The answer will be the sum of both rolls, which can range from 2 (if you roll two 1s) to 20 (if you roll two 10s).

4. `3d4`: This means roll three 4-sided dice. The answer will be the sum of all three rolls, which can range from 3 (if you roll three 1s) to 12 (if you roll three 4s).

### Maths can also be done with the results of these rolls:
5. `1d20+5`: This means roll one 20-sided die and add 5 to the result. The answer can range from 6 (if you roll a 1) to 25 (if you roll a 20).

6. `4d6 + 3d8`: This means roll four 6-sided dice and three 8-sided dice, and add up all the results. The answer can range from 7 (if you roll seven 1s) to 48 (if you roll four 6s and three 8s).

7. `1d2*3d6`: This means roll one 2-sided die and multiply the result by the sum of three 6-sided dice. The answer can range from 3 (if you roll a 1 on the d2 and three 1s on the d6s) to 36 (if you roll a 2 on the d2 and three 6s on the d6s).

### There are also some more complex functions to be done with the dice:
8. `1d20<2`: This means roll one 20-sided die and count the number of rolls that are less than 2. The answer can be either 0 or 1, as the only roll less than 2 on a d20 is 1.

9. `4d6k3`: This means roll four 6-sided dice and keep the highest three. The answer will be the sum of the three highest rolls, which can range from 3 (if you roll four 1s) to 18 (if you roll four 6s).

10. `10d6!`: This means roll ten 6-sided dice, rerolling and adding any 6s to the total. The answer can range from 10 (if you roll ten 1s and no 6s) to theoretically infinite (if you keep rolling 6s), but in practice will usually be between 35 and 40.

Please note that the actual results will vary each time you roll the dice, as they are determined by chance. The ranges provided above are the theoretical minimum and maximum results you could get from each formula.

For a complete reference to what should be possible, see the [roll20 dice reference](https://wiki.roll20.net/Dice_Reference)


## The challenge

You should work in a pair to test drive this functionality out. I want you to ping pong on this.

Ping ponging is a pseudo-competitive tdd/pairing strategy. You alternate turns first completing the other person's test, refactoring if necessary and then writing a test back for the other person. The reason I describe this as pseudo-competetive, is that you want to write as little code as possible. If you can get away with returing 4, `return 4`! Refactors should only be done when needed. You almost want to trap the other person into writing the code with your tests.

This is great for test coverage, as you drive out every edge case within the system. It's also a great pairing strategy as it keeps both people engaged.

## Running the Node.js version

To run the Node.js version of this project, navigate to the `./node` directory and run the following commands:

```sh
cd ./node
npm install
npm run test
```

## Running the TypeScript version (Advanced Challenge)
For an advanced challenge, you can try the TypeScript version of this project. Navigate to the `./typescript` directory and run the following commands:

```sh
cd ./typescript
npm install
npm run test
```

*Please note that the TypeScript version requires a basic understanding of TypeScript and its configuration.*
