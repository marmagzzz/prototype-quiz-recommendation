'use client';

import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';

import QuestionBox from '@/components/QuestionBox/QuestionBox.component';
import { useGetQuestionLists } from '@/http';
import { TAnswer, TQuestion } from '@/types';
import { QUIZ_PAGE_DATA } from '@/constants';

export default function QuizPage() {
    const { MSG_EMPTY_QUESTION_LIST } = QUIZ_PAGE_DATA;
    const [currentQuestion, setCurrentQuestion] = useState<TQuestion>();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>();
    const [questionLists, setQuestionLists] = useState<TQuestion[]>([]);
    const [isFetchingQuestions, setIsFetchingQuestions] = useState(true);
    const [errorFetchQuestions, setErrorFetchQuestions] = useState<
        Error | string | null
    >();

    /** Initial component mount */
    useEffect(() => {
        // Mock fetching data from server
        const { data, isLoading, error } = useGetQuestionLists();
        const { questionLists: responseQuestionLists } = data;

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

    /** HANDLER FUNCTIONS */
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

    /** RENDERING  */

    /** Loading placeholder */
    if (isFetchingQuestions) {
        return (
            <Container>
                <Spinner />
            </Container>
        );
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
            <QuestionBox
                currentQuestion={currentQuestion}
                currentQuestionIndex={currentQuestionIndex}
                totalLengthQuestions={questionLists.length}
                onClickOnAnswer={onClickOnAnswer}
                onClickOnNextQuestion={onClickOnNextQuestion}
                onClickOnPreviousQuestion={onClickOnPreviousQuestion}
            />
        </main>
    );
}
