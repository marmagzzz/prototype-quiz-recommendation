'use client';

import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { FiInfo } from 'react-icons/fi';
import { AiOutlineFileDone } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import styles from './QuizBox.module.scss';
import { TAnswer, TQuestion } from '@/types';
import QuestionNavBtn from '../QuestionNavBtn/QuestionNavBtn.component';
import { QUIZ_PAGE_DATA } from '@/constants';

type QuestionBoxProps = {
    questionLists: TQuestion[];
    /** Function Handlers */
    onClickOnSubmitQuizBtnCallback?: (
        quizResultScore: number,
        answeredQuestionLists: TQuestion[]
    ) => void;
};

export default function QuizBox({
    questionLists,
    /** Function Handlers */
    onClickOnSubmitQuizBtnCallback,
}: QuestionBoxProps) {
    /** Guard Clause: Handle when questions list is empty */
    if (questionLists.length <= 0) {
        throw new Error(QUIZ_PAGE_DATA.MSG_EMPTY_QUESTION_LIST);
    }

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0); // Default, first question of questionLists

    const [onGoingQuestionLists, setOnGoingQuestionLists] =
        useState<TQuestion[]>(questionLists);

    const [currentQuestion, setCurrentQuestion] = useState<TQuestion>(
        questionLists[currentQuestionIndex]
    ); // By default, the first question

    const totalLengthQuestions = questionLists.length;

    /**
     *
     * Conditional variables
     *
     * */

    /** sideEffect-based implementation
     * Pros:
     * * Better readability
     * * Monitors component re-render / State reactive
     * Cons:
     * * A bit longer (boilerplates)
     * * Too many declared states
     */
    // const [disablePrevQuestionBtn, setDisablePrevQuestionBtn] = useState(false);
    // const [hasSelectedAnswer, setHasSelectedAnswer] = useState(false);
    // const [displaySubmitQuizBtn, setDisplaySubmitQuizBtn] = useState(false);
    // useEffect(() => {
    //     if (onGoingQuestionLists.length > 0) {
    //         const hasSelectedAnswer =
    //             currentQuestion.choices.find(
    //                 (answerObj) => answerObj.isSelected == true
    //             ) != undefined;

    //         setDisablePrevQuestionBtn(
    //             currentQuestionIndex == undefined || currentQuestionIndex <= 0
    //         );

    //         setHasSelectedAnswer(
    //             hasSelectedAnswer && // With selected answer
    //                 currentQuestionIndex != undefined &&
    //                 totalLengthQuestions != currentQuestionIndex + 1 // But not on last question yet
    //         );

    //         setDisplaySubmitQuizBtn(
    //             hasSelectedAnswer && // With selected answer
    //                 currentQuestionIndex != undefined &&
    //                 totalLengthQuestions == currentQuestionIndex + 1 // and on last question
    //         );
    //     }
    // }, [currentQuestion]);

    /** None sideEffect-based implementation
     * Pros:
     * * Straight forward
     * * Short code-block implementation
     * * Monitors component re-render / State reactive
     * * Less declared state
     * Cons:
     * * Readability isn't good enough
     */
    const disablePrevQuestionBtn =
        currentQuestionIndex == undefined || currentQuestionIndex <= 0;

    const hasSelectedAnswer =
        currentQuestion.choices.find(
            (answerObj) => answerObj.isSelected == true
        ) != undefined;

    const displaySubmitQuizBtn =
        hasSelectedAnswer &&
        currentQuestionIndex != undefined &&
        totalLengthQuestions == currentQuestionIndex + 1;

    /**
     *
     * onClick Handler functions
     *
     */

    function onClickOnAnswer(answerObj: TAnswer, indexOfAnswer: number) {
        const updatedQuestionList = onGoingQuestionLists.map<TQuestion>(
            (questionObj, index) => {
                if (index == currentQuestionIndex) {
                    // Handle setting the selected answer
                    const updatedChoices = questionObj.choices.map<TAnswer>(
                        (answerObj, index) => {
                            return {
                                ...answerObj,
                                isSelected: indexOfAnswer == index,
                            };
                        }
                    );

                    const updatedCurrentQuestion = {
                        ...questionObj,
                        choices: updatedChoices,
                    };

                    // Update state of current question
                    setCurrentQuestion(updatedCurrentQuestion);

                    return updatedCurrentQuestion;
                }
                return questionObj;
            }
        );

        setOnGoingQuestionLists(updatedQuestionList);
    }

    function onClickOnPreviousQuestion() {
        const previousPage =
            currentQuestionIndex != undefined && currentQuestionIndex > 0
                ? currentQuestionIndex - 1
                : 0;

        if (previousPage >= 0) {
            setCurrentQuestionIndex(previousPage);
            setCurrentQuestion(onGoingQuestionLists[previousPage]);
        }
    }

    function onClickOnNextQuestion() {
        const nextPage =
            currentQuestionIndex != undefined &&
            currentQuestionIndex < onGoingQuestionLists.length
                ? currentQuestionIndex + 1
                : 1;

        if (nextPage < onGoingQuestionLists.length) {
            setCurrentQuestionIndex(nextPage);
            setCurrentQuestion(onGoingQuestionLists[nextPage]);
        }
    }

    function onClickOnSubmitQuiz({
        answeredQuestionLists,
    }: {
        answeredQuestionLists: TQuestion[];
    }) {
        // Filter all the correct answers
        const correctAnswers = answeredQuestionLists.filter(
            (questionObj) =>
                questionObj.choices.find(
                    (answerObj) => answerObj.isCorrect && answerObj.isSelected
                ) != undefined
        );

        let totalScorePercentage =
            (correctAnswers.length / onGoingQuestionLists.length) * 100;

        // Round the number base by 100
        totalScorePercentage = Math.round((totalScorePercentage * 100) / 100);

        if (onClickOnSubmitQuizBtnCallback != undefined) {
            onClickOnSubmitQuizBtnCallback(
                totalScorePercentage,
                answeredQuestionLists
            );
        }
    }

    /**
     *
     * Renderer functions
     *
     */

    const renderPreviousButton = ({
        disabled,
        onClick,
    }: {
        disabled: boolean;
        onClick: () => void;
    }) => {
        return (
            <QuestionNavBtn
                data-testid='prev-question-btn'
                onClick={onClick}
                disabled={disabled}
            >
                <IoIosArrowBack />
            </QuestionNavBtn>
        );
    };

    const renderNextButton = ({
        showButton,
        disabled,
        onClick,
    }: {
        showButton: boolean;
        disabled: boolean;
        onClick: () => void;
    }) => {
        if (showButton == false) {
            return (
                <QuestionNavBtn
                    data-testid='next-question-btn'
                    onClick={onClick}
                    disabled={disabled}
                >
                    <IoIosArrowForward />
                </QuestionNavBtn>
            );
        }
    };

    const renderSubmitButton = ({
        showButton,
        disabled,
        onClick,
    }: {
        showButton: boolean;
        disabled: boolean;
        onClick: () => void;
    }) => {
        if (displaySubmitQuizBtn) {
            return (
                <QuestionNavBtn
                    data-testid='submit-quiz-btn'
                    onClick={onClick}
                    disabled={disabled && showButton}
                >
                    <AiOutlineFileDone />
                </QuestionNavBtn>
            );
        }
    };

    /**
     *
     * Actual component renderer
     *
     */

    return (
        <section data-testid='question-box'>
            <Container className={`${styles.quizBoxMainContainer}`}>
                {/* Instruction Container */}
                <div className={`${styles.instructionContainer}`}>
                    <FiInfo className={`${styles.iconInfo}`} />{' '}
                    <h3 data-testid='quiz-instruction-txt'>
                        {currentQuestion.instruction}
                    </h3>
                </div>

                {/* Question Container */}
                <div className={`${styles.questionContainer}`}>
                    <em>
                        <h5 data-testid='quiz-question-txt'>
                            {currentQuestion.question}
                        </h5>
                    </em>
                </div>

                {/* Choices of answer Container */}
                <Container>
                    <Row
                        xs={1}
                        md={2}
                        className={`${styles.answerChoicesRowContainer}`}
                    >
                        {currentQuestion.choices.map((answerObj, index) => {
                            return (
                                <Col
                                    className={`${styles.answerChoicesBtnColContainer}`}
                                    key={`${index}-${uuidv4()}`}
                                >
                                    <button
                                        className={`${
                                            styles.answerChoicesBtn
                                        } ${
                                            answerObj.isSelected
                                                ? styles.selectedAnswerBtn
                                                : ''
                                        }`}
                                        onClick={() =>
                                            onClickOnAnswer(answerObj, index)
                                        }
                                    >
                                        {answerObj.answer}
                                    </button>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>

                {/* Question nav button container */}

                <Container className={`${styles.questionNavBtnRowContainer}`}>
                    <Row xs={2}>
                        {/* Previous Button Col Container */}
                        <Col className={`${styles.questionNavBtnColContainer}`}>
                            {renderPreviousButton({
                                disabled: disablePrevQuestionBtn,
                                onClick: onClickOnPreviousQuestion,
                            })}
                        </Col>

                        {/* Next and Submit Button Col Container */}
                        <Col className={`${styles.questionNavBtnColContainer}`}>
                            {renderNextButton({
                                onClick: onClickOnNextQuestion,
                                showButton: displaySubmitQuizBtn,
                                disabled: !hasSelectedAnswer,
                            })}
                            {renderSubmitButton({
                                onClick: () =>
                                    onClickOnSubmitQuiz({
                                        answeredQuestionLists:
                                            onGoingQuestionLists,
                                    }),

                                /** sideEffect-based implementation */
                                // showButton: displaySubmitQuizBtn,
                                // disabled: hasSelectedAnswer,

                                /** None sideEffect-based implementation */
                                showButton: !displaySubmitQuizBtn,
                                disabled: !hasSelectedAnswer,
                            })}
                        </Col>
                    </Row>
                </Container>

                <div className={`${styles.progressLabelContainer}`}>
                    {/* Display page and count of questions when position is NOT undefined */}
                    {currentQuestionIndex != undefined && (
                        <span className={`${styles.progressLabel}`}>
                            Question {currentQuestionIndex + 1} of{' '}
                            {totalLengthQuestions}
                        </span>
                    )}
                </div>
            </Container>
        </section>
    );
}
