'use client';

import { Button, Col, Container, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { FiInfo } from 'react-icons/fi';
import { AiOutlineFileDone } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward, IoIosSend } from 'react-icons/io';

import styles from './QuizBox.module.scss';
import { TAnswer, TQuestion } from '@/types';
import QuestionNavBtn from '../QuestionNavBtn/QuestionNavBtn.component';

type QuestionBoxProps = {
    currentQuestion: TQuestion;
    currentQuestionIndex?: number;
    totalLengthQuestions: number;
    /** Function Handlers */
    onClickOnAnswer: (answerObj: TAnswer, indexOfAnswer: number) => void;
    onClickOnNextQuestion: () => void;
    onClickOnPreviousQuestion: () => void;
    onClickOnSubmitBtn: () => void;
};

export default function QuizBox({
    currentQuestion,
    currentQuestionIndex,
    totalLengthQuestions,

    /** Function Handlers */
    onClickOnAnswer,
    onClickOnNextQuestion,
    onClickOnPreviousQuestion,
    onClickOnSubmitBtn,
}: QuestionBoxProps) {
    const isDisabledPreviousQuestionBtn =
        currentQuestionIndex == undefined || currentQuestionIndex <= 0;

    const withSelectedAnswer =
        currentQuestion.choices.find(
            (answerObj) => answerObj.isSelected == true
        ) != undefined;

    const displaySubmitQuizBtn =
        withSelectedAnswer &&
        currentQuestionIndex != undefined &&
        totalLengthQuestions == currentQuestionIndex + 1;

    const renderPreviousButton = ({
        disabled,
        onClick,
    }: {
        disabled: boolean;
        onClick: () => void;
    }) => {
        return (
            <QuestionNavBtn onClick={onClick} disabled={disabled}>
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
                <QuestionNavBtn onClick={onClick} disabled={disabled}>
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
                    onClick={onClick}
                    disabled={disabled && showButton}
                >
                    <AiOutlineFileDone />
                </QuestionNavBtn>
            );
        }
    };

    return (
        <section data-testid='question-box'>
            <Container className={`${styles.quizBoxMainContainer}`}>
                {/* Instruction Container */}
                <div className={`${styles.instructionContainer}`}>
                    <FiInfo className={`${styles.iconInfo}`} />{' '}
                    <h3>{currentQuestion.instruction}</h3>
                </div>

                {/* Question Container */}
                <div className={`${styles.questionContainer}`}>
                    <em>
                        <h5>{currentQuestion.question}</h5>
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
                                disabled: isDisabledPreviousQuestionBtn,
                                onClick: onClickOnPreviousQuestion,
                            })}
                        </Col>

                        {/* Next and Submit Button Col Container */}
                        <Col className={`${styles.questionNavBtnColContainer}`}>
                            {renderNextButton({
                                onClick: onClickOnNextQuestion,
                                showButton: displaySubmitQuizBtn,
                                disabled: !withSelectedAnswer,
                            })}
                            {renderSubmitButton({
                                onClick: onClickOnSubmitBtn,
                                showButton: !displaySubmitQuizBtn,
                                disabled: !withSelectedAnswer,
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
