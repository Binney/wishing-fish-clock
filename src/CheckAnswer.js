import crypto from 'crypto';

// Spoilers!
const answers = {
    'NORTH': '01ac41d9bbf4fe2ba84aab31761fee4b71036964daf6bb4eb686d828f6279c0c',
    'EAST': '919ef96342bc9e72b8b2c6a8abf99383acb49bd1abcb84c3fd41d1dfca0e4803',
    'SOUTH': '6747016a0c7722fcb274d75be41efa666cc984abde1ef1cff1e3c927435c3ce8',
    'WEST': '3cb670f7a0733f613c6fde8bb0162b1c59714dcfe17fff87e51e0122e6e54e58'
}

const hash = async (buf) => {
    return crypto.createHash('sha256')
        .update(buf)
        .digest('hex')
}

const checkAnswer = async (answer, orientation) => {
    const hashedAnswer = await hash(answer);
    return answers[orientation] === hashedAnswer;
}

export default checkAnswer;
