'use client';

import Link from 'next/link';
import { Container } from 'react-bootstrap';

import styles from './HomeIntro.module.scss';
import { HOME_PAGE_DATA } from '@/constants/home.pagedata';

export default function HomeIntro() {
    const { WELCOME_MESSAGE, SUB_MESSAGE } = HOME_PAGE_DATA;

    return (
        <section className={`${styles.sectionContainer}`}>
            <Container className={`${styles.homeIntroContainer}`}>
                <h1>{WELCOME_MESSAGE}</h1>
                <h2>{SUB_MESSAGE}</h2>
                <Link href={'/quiz'} className={`${styles.takeQuizBtn}`}>
                    Take the Quiz
                </Link>
            </Container>
        </section>
    );
}
