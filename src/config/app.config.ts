/**
 * This constant is the configuration settings of the quiz app on how questions and choices are going to be returned/displayed and what will be the base of computation of final score.
 */
export const QUIZ_APP_CONFIG = {
    shuffleQuestions: true,
    shuffleChoices: true,
    questionLimit: 5, // Note: This affects the computation of score, the value should not be greater than the length of the QUESTIONS[] in `questions.ts` file
};
