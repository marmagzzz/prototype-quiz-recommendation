'use client';

import { useEffect, useState } from 'react';

import QuizBox from '@/components/QuizBox/QuizBox.component';
import { useGetQuestionLists } from '@/http';
import { TQuestion } from '@/types';
import CustomSpinner from '@/components/CustomSpinner/CustomSpinner.component';
import { QUIZ_APP_CONFIG } from '@/config';
import ResultBox from '@/components/ResultBox/ResultBox.component';
import ErrorView from '@/components/ErrorView/ErrorView.component';

export default function QuizPage() {
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

    function onClickOnSubmitQuizBtn(answeredQuestionLists: TQuestion[]) {
        // TODO: Start computing of score and display the course recommendation

        // Filter all the correct answers
        const correctAnswers = answeredQuestionLists.filter(
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
        return <ErrorView error={errorFetchQuestions} />;
    }

    return (
        <main>
            {resultScore != undefined ? (
                <ResultBox resultScore={resultScore} />
            ) : (
                <QuizBox
                    questionLists={questionLists}
                    onClickOnSubmitQuizBtn={onClickOnSubmitQuizBtn}
                />
            )}
        </main>
    );
}
