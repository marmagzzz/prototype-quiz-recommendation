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
];
