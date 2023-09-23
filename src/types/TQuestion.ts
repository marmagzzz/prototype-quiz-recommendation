import { TAnswer } from './TAnswer';

export type TQuestion = {
    instruction: string;
    question: string;
    choices: TAnswer[];
};
