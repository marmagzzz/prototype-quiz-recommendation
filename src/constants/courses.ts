import { TCourse } from '@/types';
import { EQualifications } from '@/enums';

export const COURSES: TCourse[] = [
    {
        code: 'B2',
        subText: 'First',
        qualification: EQualifications.LOW_SCORE,
    },
    {
        code: 'C1',
        subText: 'Advanced',
        qualification: EQualifications.LOW_SCORE,
    },
    {
        code: 'B2',
        subText: 'First for Schools',
        qualification: EQualifications.AVERAGE_SCORE,
    },
    {
        code: 'B1',
        subText: 'Preliminary for Schools',
        qualification: EQualifications.HIGH_SCORE,
    },
    {
        code: 'A2',
        subText: 'Key for Schools',
        qualification: EQualifications.HIGH_SCORE,
    },
];
