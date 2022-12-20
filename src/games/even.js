// eslint-disable-next-line import/no-unresolved
import getRandomNumber from '../additionalСontent/randomNumber.js';
// eslint-disable-next-line import/no-unresolved
import gameRounds from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNum) => randomNum % 2 === 0;

const getRoundData = () => {
  const randomNumber = getRandomNumber(1, 20);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};
function startGame() {
  return gameRounds(description, getRoundData);
}

export default startGame;
