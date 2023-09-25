import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { toInclude } from 'jest-extended';

import QuizBox from '@/components/QuizBox/QuizBox.component';
import { TQuestion } from '@/types';
import ResultBox from '@/components/ResultBox/ResultBox.component';

describe('Question box component', () => {
    beforeAll(() => {
        expect.extend({ toInclude });
    });

    it('Should display instruction and question', () => {
        const MOCK_QUIZ: TQuestion[] = [
            {
                instruction: 'I1',
                question: 'Q1',
                choices: [
                    {
                        answer: 'A1',
                        isCorrect: true,
                    },
                ],
            },
        ];

        render(
            <QuizBox
                questionLists={MOCK_QUIZ}
                onClickOnSubmitQuizBtnCallback={() => {}}
            />
        );

        const instructionDisplayed = screen.getByText(/i1/i);
        const questionDisplayed = screen.getByText(/q1/i);
        const choicesDisplayed = screen.getByText(/a1/i);

        expect(instructionDisplayed).toBeInTheDocument();
        expect(questionDisplayed).toBeInTheDocument();
        expect(choicesDisplayed).toBeInTheDocument();
    });

    it('Should display previous and next question buttons', () => {
        const MOCK_QUIZ: TQuestion[] = [
            {
                instruction: 'I1',
                question: 'Q1',
                choices: [
                    {
                        answer: 'A1',
                        isCorrect: true,
                    },
                ],
            },
        ];

        render(
            <QuizBox
                questionLists={MOCK_QUIZ}
                onClickOnSubmitQuizBtnCallback={() => {}}
            />
        );

        const prevQuestionBtn = screen.getByTestId('prev-question-btn');
        const nextQuestionBtn = screen.getByTestId('next-question-btn');

        expect(prevQuestionBtn).toBeInTheDocument();
        expect(nextQuestionBtn).toBeInTheDocument();
    });

    it('Previous question button should be disabled and visible when on first question', () => {
        const MOCK_QUIZ: TQuestion[] = [
            {
                instruction: 'I1',
                question: 'Q1',
                choices: [
                    {
                        answer: 'A1',
                        isCorrect: true,
                    },
                ],
            },
        ];

        render(
            <QuizBox
                questionLists={MOCK_QUIZ}
                onClickOnSubmitQuizBtnCallback={() => {}}
            />
        );

        const prevQuestionBtn = screen.getByTestId('prev-question-btn');

        expect(prevQuestionBtn).toBeInTheDocument();
        expect(prevQuestionBtn).toBeVisible();
        expect(prevQuestionBtn).toBeDisabled();
    });

    it('Next question button should be disabled and visible when no answer is selected', () => {
        const MOCK_QUIZ: TQuestion[] = [
            {
                instruction: 'I1',
                question: 'Q1',
                choices: [
                    {
                        answer: 'A1',
                        isCorrect: true,
                    },
                ],
            },
        ];

        render(
            <QuizBox
                questionLists={MOCK_QUIZ}
                onClickOnSubmitQuizBtnCallback={() => {}}
            />
        );

        const nextQuestionBtn = screen.getByTestId('next-question-btn');

        expect(nextQuestionBtn).toBeInTheDocument();
        expect(nextQuestionBtn).toBeVisible();
        expect(nextQuestionBtn).toBeDisabled();
    });

    it('Next question button should be enabled and visible when there is a selected answer and with remaining questions', () => {
        const MOCK_QUIZ: TQuestion[] = [
            {
                instruction: 'I1',
                question: 'Q1',
                choices: [
                    {
                        answer: 'A1',
                        isCorrect: true,
                        isSelected: true,
                    },
                    {
                        answer: 'A2',
                        isCorrect: false,
                        isSelected: false,
                    },
                ],
            },
            {
                instruction: 'I2',
                question: 'Q2',
                choices: [
                    {
                        answer: 'A1',
                        isCorrect: false,
                        isSelected: true,
                    },
                    {
                        answer: 'A2',
                        isCorrect: true,
                        isSelected: false,
                    },
                ],
            },
        ];

        render(
            <QuizBox
                questionLists={MOCK_QUIZ}
                onClickOnSubmitQuizBtnCallback={() => {}}
            />
        );

        const nextQuestionBtn = screen.getByTestId('next-question-btn');

        expect(nextQuestionBtn).toBeInTheDocument();
        expect(nextQuestionBtn).toBeVisible();
        expect(nextQuestionBtn).toBeEnabled();
    });

    it('Submit quiz button should be enabled and visible when all of questions were answered.', () => {
        const MOCK_QUIZ: TQuestion[] = [
            // Mock that this is the last item and with selected answer
            {
                instruction: 'I1',
                question: 'Q1',
                choices: [
                    {
                        answer: 'A1',
                        isCorrect: true,
                        isSelected: true,
                    },
                ],
            },
        ];

        render(
            <QuizBox
                questionLists={MOCK_QUIZ}
                onClickOnSubmitQuizBtnCallback={() => {}}
            />
        );

        const submitQuizBtn = screen.getByTestId('submit-quiz-btn');

        expect(submitQuizBtn).toBeInTheDocument();
        expect(submitQuizBtn).toBeVisible();
        expect(submitQuizBtn).toBeEnabled();
    });

    it('Next question button should not be visible when all of questions were answered.', () => {
        const MOCK_QUIZ: TQuestion[] = [
            // Mock that this is the last item and with selected answer
            {
                instruction: 'I1',
                question: 'Q1',
                choices: [
                    {
                        answer: 'A1',
                        isCorrect: true,
                        isSelected: true,
                    },
                ],
            },
        ];

        render(
            <QuizBox
                questionLists={MOCK_QUIZ}
                onClickOnSubmitQuizBtnCallback={() => {}}
            />
        );

        const nextQuestionBtn = screen.queryByTestId('next-question-btn');

        expect(nextQuestionBtn).not.toBeInTheDocument();
        expect(nextQuestionBtn).toBeNull();
    });

    it('Should display the next question when the next question button was clicked.', () => {
        const MOCK_QUIZ: TQuestion[] = [
            {
                instruction: 'I1',
                question: 'Q1',
                choices: [
                    {
                        answer: 'A1',
                        isCorrect: true,
                        isSelected: true,
                    },
                ],
            },
            {
                instruction: 'I2',
                question: 'Q2',
                choices: [
                    {
                        answer: 'A2',
                        isCorrect: true,
                        isSelected: false,
                    },
                ],
            },
        ];

        render(
            <QuizBox
                questionLists={MOCK_QUIZ}
                onClickOnSubmitQuizBtnCallback={() => {}}
            />
        );

        const QUIZ_INSTRUCTION_TESTID = 'quiz-instruction-txt';
        const QUIZ_QUESTION_TESTID = 'quiz-question-txt';

        // Retrieve first question
        const quizInstructionTxt = screen.getByTestId(QUIZ_INSTRUCTION_TESTID);
        const quizQuestionTxt = screen.getByTestId(QUIZ_QUESTION_TESTID);

        // The displayed current question should be the first question from MOCK_QUIZ
        expect(quizInstructionTxt.textContent).toEqual(
            MOCK_QUIZ[0].instruction
        );
        expect(quizQuestionTxt.textContent).toEqual(MOCK_QUIZ[0].question);

        // Retrieve next question btn
        const nextQuestionBtn = screen.getByTestId('next-question-btn');

        // Mock action of clicking next question
        fireEvent.click(nextQuestionBtn);

        // The displayed current question should be the second question from MOCK_QUIZ
        expect(quizInstructionTxt.textContent).toEqual(
            MOCK_QUIZ[1].instruction
        );
        expect(quizQuestionTxt.textContent).toEqual(MOCK_QUIZ[1].question);
    });

    it('Should correctly display the result score of quiz.', () => {
        const MOCK_QUIZ: TQuestion[] = [
            {
                instruction: 'I1',
                question: 'Q1',
                choices: [
                    {
                        answer: 'A1',
                        isCorrect: true,
                        isSelected: true,
                    },
                ],
            },
            {
                instruction: 'I2',
                question: 'Q2',
                choices: [
                    {
                        answer: 'A2',
                        isCorrect: true,
                        isSelected: true,
                    },
                ],
            },
            {
                instruction: '3',
                question: 'Q3',
                choices: [
                    {
                        answer: 'A3',
                        isCorrect: false,
                        isSelected: true,
                    },
                ],
            },
        ];

        let mockResultFinalScore = 0;

        const onSubmitCallback = (resultScore: number) => {
            mockResultFinalScore = resultScore;
        };

        render(
            <QuizBox
                questionLists={MOCK_QUIZ}
                onClickOnSubmitQuizBtnCallback={onSubmitCallback}
            />
        );

        // Retrieve next question btn
        const nextQuestionBtn = screen.getByTestId('next-question-btn');

        // Mock action of clicking next question button
        fireEvent.click(nextQuestionBtn);
        // ... until third question
        fireEvent.click(nextQuestionBtn);

        // Retrieve submit quiz btn
        const submitQuizBtn = screen.getByTestId('submit-quiz-btn');

        // Mock action of clicking submit quiz button
        fireEvent.click(submitQuizBtn);

        // Mock showing of result box after clicking submit button
        render(<ResultBox resultScore={mockResultFinalScore} />);

        // Retrieve result score text
        const resultScoreText = screen.getByTestId('result-score-txt');

        expect(resultScoreText).toBeInTheDocument();
        expect(resultScoreText.textContent).toInclude(
            String(mockResultFinalScore)
        );
        expect(mockResultFinalScore).toEqual(67);
    });
});
