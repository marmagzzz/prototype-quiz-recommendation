# Prototype: Quiz app with product (course) recommendation.

A prototype web application built using Next.js (Typescript) that allows users to test their knowledge of the English language through a series of multiple-choice questions. Each question is associated with a set of answer choices, with one correct answer.

The purpose of this app is to provide an instant recommendation of different courses based on the result score of the user from the quiz.

## Table of contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [In-app configuration (app.config.ts)](#in-app-configuration-appconfigts)
    -   [shuffledQuestion](#toggle-shuffled-questions)
    -   [shuffledChoices](#toggle-shuffled-answer-choices)
    -   [questionLimit](#setting-how-many-questions-should-be-generated-per-quiz)
-   [Running Tests](#running-tests)
-   [Running Tests](#running-tests)
-   [Deployment](#deployment)
-   [Contributing](#contributing)
    -   [Importing of 3rd party libraries and self-declared files](#importing-of-3rd-party-libraries-and-self-declared-files)
    -   [Component Testing](#component-testing)
-   [For future enhancements](#for-future-enhancements)
-   [FAQ](#faq)
-   [Acknowledgements](#acknowledgements)
-   [Authors](#authors)
-   [Support](#support)
-   [Next.js README](#generated-readme-from-next)

## Features

-   Toggle shuffle questions
-   Toggle shuffle answer choices
-   Scoring and recommendation logic
-   Instant result and recommendation of courses
-   Lightweight & mobile responsive
-   Scalable/Expandable

## Tech Stack

**Client:** Next.js (Typescript), React Bootstrap, Sass, Lodash

## In-app configuration ([app.config.ts]('https://github.com/marmagzzz/prototype-quiz-recommendation/blob/main/src/config/app.config.ts))

The generation of questions and answer choices can be configured in exported object `QUIZ_APP_CONFIG` of `app.config.ts`

#### Toggle shuffled questions

| Parameter          | Type      | Description                                              |
| :----------------- | :-------- | :------------------------------------------------------- |
| `shuffleQuestions` | `boolean` | Shuffles the generated question for every start of quiz. |

#### Toggle shuffled answer-choices

| Parameter        | Type      | Description                                                    |
| :--------------- | :-------- | :------------------------------------------------------------- |
| `shuffleChoices` | `boolean` | Shuffles the generated answer-choices for every start of quiz. |

#### Setting how many questions should be generated per quiz

| Parameter       | Type     | Description                                                                                                 |
| :-------------- | :------- | :---------------------------------------------------------------------------------------------------------- |
| `questionLimit` | `number` | Minimum value is 3 and should not be more than the length of items `QUESTIONS` constant from `questions.ts` |

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Deployment

This project is deployed in Vercel. It automatically handles deployment everytime there is an update on pointed repository branch on Vercel.

## Contributing

#### Importing of 3rd party libraries and self-declared files

```javascript
// 3rd party libraries first
import { Card, Col, Container, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

// Self-declared files
import { TCourse } from '@/types';
import styles from './CourseLists.module.scss';
```

#### Component-testing

```javascript
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import SamplePage from '@/app/page';

describe('Rendering ...', () => {
    it('Should ... ', () => {
        // Standard flow for component testing
        // 1. Render the component
        render(<SamplePage />);

        // 2. Get an element from the component and simulate any user interactions
        const samplePage = screen.getByTestId('sample-page');

        // 3. Write an assertion.
        expect(samplePage).toBeInTheDocument();
    });
});
```

## For future enhancements

-   Implementation of backend
    -   To retain session of exam
    -   To store the results of exam per user
    -   Store questions, results, users in database.
    -   Generate analytics report based on user data and activity.
-   Containerization
-   Add eCommerce feature for purchasing recommended courses

## FAQ

#### What happens if I refreshed the browser during the quiz?

The quiz is only handled on client side, so your current progress will disappear after the refresh. The quiz will restart and a new set of questions will be generated.

#### Is my quiz result saved?

No, the app has client-side-only capability as of now. But it can be improved in the future and integrate a backend for saving the progress and activities.

## Acknowledgements

-   [NextJs](https://nextjs.org/)
-   [React Bootstrap](https://react-bootstrap.github.io/docs/getting-started/introduction)
-   [Lodash](https://lodash.com/docs/4.17.15/)
-   [Vercel](https://vercel.com/)

## Authors

-   [@marmagzzz](https://github.com/marmagzzz/)

## Support

For support, email mmagnaye@yopmail.com.

## Generated README from Next

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
