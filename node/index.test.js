import t from 'tap'
import { diceRoller } from './index.js'

t.test('diceRoller', async t => {
  t.test('Simple dice roll', async t => {
    t.test('Rolls a 4', async t => {
      t.equal(diceRoller('1d4', () => 0), 4, 'Rolls a 4')
    })
  })
})
