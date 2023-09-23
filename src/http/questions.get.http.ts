import _ from 'lodash';

import { QUIZ_APP_CONFIG } from '@/config';
import { QUESTIONS } from '@/constants';
import { TQuestion } from '@/types';
import { genericFetcher, sleep } from '@/utils';

type TGetQuestionsListReturn = {
    data: {
        questionLists: TQuestion[];
    };
    isLoading: boolean;
    error?: Error | string | null;
};

export function useGetQuestionLists(
    questionLimit = QUIZ_APP_CONFIG.questionLimit
): TGetQuestionsListReturn {
    // Possible actual fetching of data
    // const { data, isLoading, error } = useSWR<TQuestion[]>(`${API_URL}/${ENDPOINT}${PARAMS}`, genericFetcher)
    // return { data, isLoading, error }

    // useEffect(() => {
    //     (async () => {
    //         await sleep(1_000);
    //     })();
    // }, []);

    // Check if questions are needed to be shuffled
    let resultQuestionList = QUIZ_APP_CONFIG.shuffleQuestions
        ? _.sampleSize(QUESTIONS, questionLimit)
        : QUESTIONS.slice(0, questionLimit);

    // Check if answer choices are needed to be shuffled
    if (QUIZ_APP_CONFIG.shuffleChoices) {
        resultQuestionList = resultQuestionList.map((questionObj) => {
            return {
                ...questionObj,
                choices: _.shuffle(questionObj.choices),
            };
        });
    }

    // Mock of success retrieval
    return {
        data: {
            questionLists: resultQuestionList,
        },
        isLoading: false,
    };

    // Mock of empty question lists
    // return {
    //     data: {
    //         questionLists: [],
    //     },
    //     isLoading: false,
    // };

    // Mock of failed retrieval
    // return {
    //     data: {
    //         questionLists: QUESTIONS,
    //     },
    //     isLoading: false,
    //     error: new Error('Something went wrong'),
    // };
}
