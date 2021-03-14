import sha256 from 'simple-sha256';

// TODO hash #420
const answers = {
    'NORTH': 'NORTH',
    'EAST': 'EAST',
    'SOUTH': 'SOUTH',
    'WEST': 'WEST'
}

const checkAnswer = async (answer, orientation) => {
    console.log("Checking " + answer + " against " + answers[orientation]);
    return answers[orientation] === answer;
}

export default checkAnswer;
