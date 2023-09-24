'use client';

import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';

import QuestionBox from '@/components/QuestionBox/QuestionBox.component';
import { useGetQuestionLists } from '@/http';
import { TAnswer, TQuestion } from '@/types';
import { QUIZ_PAGE_DATA } from '@/constants';
import CustomSpinner from '@/components/CustomSpinner/CustomSpinner.component';
import { QUIZ_APP_CONFIG } from '@/config';
import ResultBox from '@/components/ResultBox/ResultBox.component';

export default function QuizPage() {
    const { MSG_EMPTY_QUESTION_LIST } = QUIZ_PAGE_DATA;
    const [currentQuestion, setCurrentQuestion] = useState<TQuestion>();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>();
    const [questionLists, setQuestionLists] = useState<TQuestion[]>([]);
    const [isFetchingQuestions, setIsFetchingQuestions] = useState(true);
    const [errorFetchQuestions, setErrorFetchQuestions] = useState<
        Error | string | null
    >();

    const [resultScore, setResultScore] = useState<number>();

    // Mock fetching data from server
    const {
        data: questionListsResponse,
        isLoading,
        error,
    } = useGetQuestionLists();
    const { questionLists: responseQuestionLists } = questionListsResponse;

    /**
     *
     * INITIAL COMPONENT MOUNTING
     *
     * */
    useEffect(() => {
        /** Update state */
        setIsFetchingQuestions(isLoading);
        setQuestionLists(responseQuestionLists);
        setErrorFetchQuestions(error);

        /**
         * Set the initial selected question, if question lists is not empty
         */
        if (responseQuestionLists.length > 0) {
            setCurrentQuestion(responseQuestionLists[0]);
            setCurrentQuestionIndex(0);
        }

        return () => {
            /**
             * Insert unmounting calls
             * eg: detaching listeners, disconnecting sockets, etc.
             */
        };
    }, []);

    /**
     *
     * HANDLER FUNCTIONS
     *
     * */
    function onClickOnAnswer(answerObj: TAnswer, indexOfAnswer: number) {
        const updatedQuestionList = questionLists.map<TQuestion>(
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

        setQuestionLists(updatedQuestionList);
    }
    function onClickOnPreviousQuestion() {
        const previousPage =
            currentQuestionIndex != undefined && currentQuestionIndex > 0
                ? currentQuestionIndex - 1
                : 0;

        if (previousPage >= 0) {
            setCurrentQuestionIndex(previousPage);
            setCurrentQuestion(questionLists[previousPage]);
        }
    }
    function onClickOnNextQuestion() {
        const nextPage =
            currentQuestionIndex != undefined &&
            currentQuestionIndex < questionLists.length
                ? currentQuestionIndex + 1
                : 1;

        if (nextPage < questionLists.length) {
            setCurrentQuestionIndex(nextPage);
            setCurrentQuestion(questionLists[nextPage]);
        }
    }

    function onClickOnSubmitBtn() {
        // TODO: Start computing of score and display the course recommendation

        // Filter all the correct answers
        const correctAnswers = questionLists.filter(
            (questionObj) =>
                questionObj.choices.find(
                    (answerObj) => answerObj.isCorrect && answerObj.isSelected
                ) != undefined
        );

        let totalScorePercentage =
            (correctAnswers.length / QUIZ_APP_CONFIG.questionLimit) * 100;

        // Round the number base by 100
        totalScorePercentage = Math.round((totalScorePercentage * 100) / 100);

        setResultScore(totalScorePercentage);
    }

    /**
     *
     * RENDERING
     *
     * */

    /** Loading placeholder */
    if (isFetchingQuestions) {
        return <CustomSpinner />;
    }

    /** Handler when failed to retrieve questions list*/
    if (errorFetchQuestions) {
        /**
         * TODO: Possible improvement - either display specific or generic error
         */
        return (
            <Container>
                <p>
                    {typeof errorFetchQuestions == 'string'
                        ? errorFetchQuestions
                        : errorFetchQuestions.message}
                </p>
            </Container>
        );
    }

    /** Handler when questions list is empty or no selected questionObj*/
    if (questionLists.length <= 0 || !currentQuestion) {
        return (
            <Container>
                <p>{MSG_EMPTY_QUESTION_LIST}</p>
            </Container>
        );
    }

    return (
        <main>
            {resultScore != undefined ? (
                <ResultBox resultScore={resultScore} />
            ) : (
                <QuestionBox
                    currentQuestion={currentQuestion}
                    currentQuestionIndex={currentQuestionIndex}
                    totalLengthQuestions={questionLists.length}
                    onClickOnAnswer={onClickOnAnswer}
                    onClickOnNextQuestion={onClickOnNextQuestion}
                    onClickOnPreviousQuestion={onClickOnPreviousQuestion}
                    onClickOnSubmitBtn={onClickOnSubmitBtn}
                />
            )}
        </main>
    );
}
