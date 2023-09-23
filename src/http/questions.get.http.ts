import { QUESTIONS } from '@/constants';
import { TQuestion } from '@/types';
import { genericFetcher, sleep } from '@/utils';
import _ from 'lodash';

type TGetQuestionsListReturn = {
    data: {
        questionLists: TQuestion[];
    };
    isLoading: boolean;
    error?: Error | string | null;
};

export function useGetQuestionLists(
    limit: number = 5
): TGetQuestionsListReturn {
    // Possible actual fetching of data
    // const { data, isLoading, error } = useSWR<TQuestion[]>(`${API_URL}/${ENDPOINT}${PARAMS}`, genericFetcher)
    // return { data, isLoading, error }

    // useEffect(() => {
    //     (async () => {
    //         await sleep(1_000);
    //     })();
    // }, []);

    // Mock of success retrieval
    return {
        data: {
            questionLists: _.sampleSize(QUESTIONS, limit),
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
