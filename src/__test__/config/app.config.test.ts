import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { toBeBoolean } from 'jest-extended';

import { QUIZ_APP_CONFIG } from '@/config';
import { QUESTIONS } from '@/constants';

describe('Test app.config.tsx', () => {
    beforeAll(() => {
        expect.extend({ toBeBoolean });
    });

    it('QUIZ_APP_CONFIG should have shuffleChoices defined property', () => {
        expect(QUIZ_APP_CONFIG.shuffleChoices).toBeDefined();
    });

    it('QUIZ_APP_CONFIG.shuffleChoices should be a boolean', () => {
        expect(QUIZ_APP_CONFIG.shuffleChoices).toBeBoolean();
    });

    it('QUIZ_APP_CONFIG should have shuffleQuestions property', () => {
        expect(QUIZ_APP_CONFIG.shuffleQuestions).toBeDefined();
    });

    it('QUIZ_APP_CONFIG.shuffleQuestions should be a boolean', () => {
        expect(QUIZ_APP_CONFIG.shuffleQuestions).toBeBoolean();
    });

    it('QUIZ_APP_CONFIG should have shuffleChoices property', () => {
        expect(QUIZ_APP_CONFIG.shuffleChoices).toBeDefined();
    });

    it('QUIZ_APP_CONFIG.shuffleChoices should not be greater than the length of constant QUESTIONS array', () => {
        expect(QUIZ_APP_CONFIG.questionLimit).toBeLessThanOrEqual(
            QUESTIONS.length
        );
    });
});
