import { TCourse } from '@/types';
import { EQualifications } from '@/enums';

export const COURSES: TCourse[] = [
    {
        code: 'B2',
        subText: 'First',
        qualification: EQualifications.LOW_SCORE,
        image: 'https://placeholder.co/250x250/png',
    },
    {
        code: 'C1',
        subText: 'Advanced',
        qualification: EQualifications.LOW_SCORE,
        image: 'https://placeholder.co/250x250/png',
    },
    {
        code: 'B2',
        subText: 'First for Schools',
        qualification: EQualifications.AVERAGE_SCORE,
        image: 'https://placeholder.co/250x250/png',
    },
    {
        code: 'B1',
        subText: 'Preliminary for Schools',
        qualification: EQualifications.HIGH_SCORE,
        image: 'https://placeholder.co/250x250/png',
    },
    {
        code: 'A2',
        subText: 'Key for Schools',
        qualification: EQualifications.HIGH_SCORE,
        image: 'https://placeholder.co/250x250/png',
    },
];
