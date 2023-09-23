import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import QuizPage from '@/app/quiz/page';

describe('Rendering the Quiz page', () => {
    it('Should render the main quiz box component', () => {
        render(<QuizPage />);

        expect(screen.getByTestId('question-box')).toBeInTheDocument();
    });
});
