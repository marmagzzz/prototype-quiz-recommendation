import _ from 'lodash';

import { TQuestion } from '@/types';

export const QUESTIONS: TQuestion[] = [
    {
        instruction: 'Identify the noun in the following sentence:',
        question: 'I live in Amsterdam.',
        choices: [
            {
                answer: 'I',
                isCorrect: false,
            },
            {
                answer: 'Live',
                isCorrect: false,
            },
            {
                answer: 'In',
                isCorrect: false,
            },
            {
                answer: 'Amsterdam',
                isCorrect: true,
            },
        ],
    },
    {
        instruction: 'Identify the verb in the following sentence:',
        question: 'The monkey sat by the door.',
        choices: [
            {
                answer: 'Monkey',
                isCorrect: false,
            },
            {
                answer: 'By',
                isCorrect: false,
            },
            {
                answer: 'Sat',
                isCorrect: true,
            },
            {
                answer: 'Door',
                isCorrect: false,
            },
        ],
    },
    {
        instruction: 'Identify the verb in the following sentence:',
        question: 'Michelle hurt her elbow while playing.',
        choices: [
            {
                answer: 'Hurt',
                isCorrect: false,
            },
            {
                answer: 'Hurt, playing',
                isCorrect: true,
            },
            {
                answer: 'Elbow',
                isCorrect: false,
            },
            {
                answer: 'Michelle',
                isCorrect: false,
            },
        ],
    },
    {
        instruction: 'Identify the pronoun in the following sentence:',
        question: 'They were having dinner.',
        choices: [
            {
                answer: 'They',
                isCorrect: true,
            },
            {
                answer: 'Were',
                isCorrect: false,
            },
            {
                answer: 'Dinner',
                isCorrect: false,
            },
            {
                answer: 'Having',
                isCorrect: false,
            },
        ],
    },
    {
        instruction: 'Identify the Adverb in the following sentence:',
        question: 'Marcus always arrives early.',
        choices: [
            {
                answer: 'Arrives',
                isCorrect: false,
            },
            {
                answer: 'Always',
                isCorrect: true,
            },
            {
                answer: 'Early',
                isCorrect: false,
            },
            {
                answer: 'Marcus',
                isCorrect: false,
            },
        ],
    },
    {
        instruction: 'Identify the Adverb in the following sentence:',
        question: 'The dog looked at his owner curiously.',
        choices: [
            {
                answer: 'Dog',
                isCorrect: false,
            },
            {
                answer: 'Looked',
                isCorrect: false,
            },
            {
                answer: 'At',
                isCorrect: false,
            },
            {
                answer: 'Curiously',
                isCorrect: true,
            },
        ],
    },
    {
        instruction: 'Choose the correct synonym for "happy".',
        question: 'What is a synonym for "happy"?',
        choices: [
            {
                answer: 'Sad',
                isCorrect: false,
            },
            {
                answer: 'Joyful',
                isCorrect: true,
            },
            {
                answer: 'Angry',
                isCorrect: false,
            },
            {
                answer: 'Tired',
                isCorrect: false,
            },
        ],
    },
    {
        instruction: 'Choose the correct antonym for "strong".',
        question: 'What is an antonym for "strong"?',
        choices: [
            {
                answer: 'Weak',
                isCorrect: true,
            },
            {
                answer: 'Healthy',
                isCorrect: false,
            },
            {
                answer: 'Powerful',
                isCorrect: false,
            },
            {
                answer: 'Brave',
                isCorrect: false,
            },
        ],
    },
    {
        instruction: 'Select the correct word to complete the sentence.',
        question: 'She ____ a book when I called her.',
        choices: [
            {
                answer: 'read',
                isCorrect: true,
            },
            {
                answer: 'reads',
                isCorrect: false,
            },
            {
                answer: 'reading',
                isCorrect: false,
            },
            {
                answer: 'has read',
                isCorrect: false,
            },
        ],
    },
    {
        instruction: 'Choose the correctly spelled word.',
        question: 'Which word is spelled correctly?',
        choices: [
            {
                answer: 'Recieve',
                isCorrect: false,
            },
            {
                answer: 'Receave',
                isCorrect: false,
            },
            {
                answer: 'Receive',
                isCorrect: true,
            },
            {
                answer: 'Recievee',
                isCorrect: false,
            },
        ],
    },
    {
        instruction: 'Identify the part of speech for the word "quickly".',
        question: 'What is the part of speech for "quickly" in the sentence?',
        choices: [
            {
                answer: 'Adjective',
                isCorrect: false,
            },
            {
                answer: 'Noun',
                isCorrect: false,
            },
            {
                answer: 'Adverb',
                isCorrect: true,
            },
            {
                answer: 'Verb',
                isCorrect: false,
            },
        ],
    },
    {
        instruction: 'Choose the correct plural form of "child".',
        question: 'What is the plural form of "child"?',
        choices: [
            {
                answer: 'Childs',
                isCorrect: false,
            },
            {
                answer: 'Children',
                isCorrect: true,
            },
            {
                answer: 'Childen',
                isCorrect: false,
            },
            {
                answer: 'Childies',
                isCorrect: false,
            },
        ],
    },
    {
        instruction: 'Select the appropriate preposition.',
        question: 'I am going ___ the store to buy some groceries.',
        choices: [
            {
                answer: 'in',
                isCorrect: false,
            },
            {
                answer: 'on',
                isCorrect: false,
            },
            {
                answer: 'to',
                isCorrect: true,
            },
            {
                answer: 'at',
                isCorrect: false,
            },
        ],
    },
    {
        instruction: 'Identify the subject in the following sentence.',
        question: 'The cat chased the mouse.',
        choices: [
            {
                answer: 'The cat',
                isCorrect: true,
            },
            {
                answer: 'Chased',
                isCorrect: false,
            },
            {
                answer: 'The mouse',
                isCorrect: false,
            },
            {
                answer: 'The',
                isCorrect: false,
            },
        ],
    },
    {
        instruction: 'Choose the correct form of the verb.',
        question: 'She ___ swimming every morning.',
        choices: [
            {
                answer: 'is go',
                isCorrect: false,
            },
            {
                answer: 'are going',
                isCorrect: false,
            },
            {
                answer: 'go',
                isCorrect: false,
            },
            {
                answer: 'goes',
                isCorrect: true,
            },
        ],
    },
    {
        instruction: 'Select the appropriate conjunction.',
        question: 'I wanted to go to the park ___ it started raining.',
        choices: [
            {
                answer: 'but',
                isCorrect: true,
            },
            {
                answer: 'and',
                isCorrect: false,
            },
            {
                answer: 'so',
                isCorrect: false,
            },
            {
                answer: 'or',
                isCorrect: false,
            },
        ],
    },
];
