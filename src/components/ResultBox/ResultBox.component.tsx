import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

import { COURSES } from '@/constants';
import { EQualifications } from '@/enums';
import { TCourse } from '@/types';
import CourseLists from '../CourseLists/CourseLists.component';
import styles from './ResultBox.module.scss';

type TResultBoxProps = {
    resultScore: number;
};
export default function ResultBox({ resultScore }: TResultBoxProps) {
    const getCourseByQualification = (qualification: EQualifications) => {
        return COURSES.filter(
            (courseObj) => courseObj.qualification == qualification
        );
    };

    // By default - set Low score courses as recommended course
    const [recommendedCourses, setRecommendedCourses] = useState<TCourse[]>(
        getCourseByQualification(EQualifications.LOW_SCORE)
    );

    useEffect(() => {
        if (resultScore >= 80) {
            // High score - courses
            setRecommendedCourses(
                getCourseByQualification(EQualifications.HIGH_SCORE)
            );
        } else if (resultScore >= 50) {
            // Average score - courses
            setRecommendedCourses(
                getCourseByQualification(EQualifications.AVERAGE_SCORE)
            );
        }

        return () => {
            // Component unmount callback
        };
    }, [resultScore]);

    return (
        <section data-testid='result-box'>
            <Container className={`${styles.resultDisplayContainer}`}>
                <h1 data-testid='result-score-txt'>
                    Your total score is {resultScore}/100.
                </h1>

                <div className={`${styles.resultNavBtnContainer}`}>
                    <Link href='/' className={`${styles.goHomeLink}`}>
                        Home Page
                    </Link>
                    <a href='/quiz' className={`${styles.retakeQuizLink}`}>
                        Retake
                    </a>
                </div>
            </Container>
            <CourseLists courseLists={recommendedCourses} recommendation />
        </section>
    );
}
