'use client';

import Link from 'next/link';
import { Container } from 'react-bootstrap';

import styles from './HomeIntro.module.scss';
import { HOME_PAGE_DATA } from '@/constants/home.pagedata';
import StartQuizBtn from '../StartQuizBtn/StartQuizBtn.component';

export default function HomeIntro() {
    const { WELCOME_MESSAGE, SUB_MESSAGE } = HOME_PAGE_DATA;

    return (
        <section
            data-testid='home-intro'
            className={`${styles.sectionContainer}`}
        >
            <Container className={`${styles.homeIntroContainer}`}>
                <h1>{WELCOME_MESSAGE}</h1>
                <h2>{SUB_MESSAGE}</h2>
                <StartQuizBtn />
            </Container>
        </section>
    );
}
