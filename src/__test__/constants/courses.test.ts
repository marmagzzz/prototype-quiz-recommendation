import { toBeArray } from 'jest-extended';

import { COURSES } from '@/constants';

describe('Data integrity test for list of Courses', () => {
    beforeAll(() => {
        expect.extend({
            toBeArray,
        });
    });

    it('COURSES should be an array', () => {
        expect(COURSES).toBeArray();
    });

    it('COURSES should not be an empty array', () => {
        expect(COURSES.length).toBeGreaterThan(0);
    });
});
