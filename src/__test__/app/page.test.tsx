import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import HomePage from '@/app/page';

describe('Rendering the Home page', () => {
    it('Should render the main home page with 2 main components', () => {
        render(<HomePage />);

        /**
         * Check two main components of home page if properly rendered
         * 1. Home Intro component
         * 2. Course Lists component
         */

        expect(screen.getByTestId('home-intro')).toBeInTheDocument();
        expect(screen.getByTestId('course-lists')).toBeInTheDocument();
    });
});
