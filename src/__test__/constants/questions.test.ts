import { toBeArray, toBeArrayOfSize } from 'jest-extended';

import { QUESTIONS } from '@/constants';

describe('Constant QUESTION data', () => {
    beforeAll(() => {
        expect.extend({ toBeArray, toBeArrayOfSize });
    });

    it('QUESTION should be an array', () => {
        expect(QUESTIONS).toBeArray();
    });

    it('QUESTION should not be an empty array and minimum 3 elements', () => {
        expect(QUESTIONS.length).toBeGreaterThanOrEqual(3);
    });

    it('QUESTION should not be an empty array and minimum 3 elements', () => {
        expect(QUESTIONS.length).toBeGreaterThanOrEqual(3);
    });

    it('All QUESTIONS should have a correct answer', () => {
        let noAnswers = QUESTIONS.filter(
            (questionObj) =>
                questionObj.choices.length ==
                questionObj.choices.filter(
                    (answerObj) => answerObj.isCorrect == false
                ).length
        );

        expect(noAnswers).toBeArrayOfSize(0);
    });

    it('Each question from QUESTIONS Array, should have 1 correct answer only', () => {
        let multipleCorrectAnswer = QUESTIONS.filter(
            (questionObj) =>
                questionObj.choices.filter(
                    (answerObj) => answerObj.isCorrect == true
                ).length > 1
        );

        expect(multipleCorrectAnswer).toBeArrayOfSize(0);
    });
});
