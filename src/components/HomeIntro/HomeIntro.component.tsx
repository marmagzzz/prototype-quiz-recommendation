'use client';
import styles from './HomeIntro.module.scss';
import { HOME_PAGE_DATA } from '@/constants/home.pagedata';
import { Button, Container } from 'react-bootstrap';

export default function HomeIntro() {
    const { WELCOME_MESSAGE, SUB_MESSAGE } = HOME_PAGE_DATA;

    return (
        <section className={`${styles.sectionContainer}`}>
            <Container className={`${styles.homeIntroContainer}`}>
                <h1>{WELCOME_MESSAGE}</h1>
                <h2>{SUB_MESSAGE}</h2>
                <Button>Start Quiz</Button>
            </Container>
        </section>
    );
}
