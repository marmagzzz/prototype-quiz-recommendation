'use client';

import { Card, Col, Container, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import { TCourse } from '@/types';
import styles from './CourseLists.module.scss';

type TCourseListsProp = {
    courseLists: TCourse[];
};

export default function CourseLists({ courseLists }: TCourseListsProp) {
    return (
        <section
            data-testid='course-lists'
            className={`${styles.sectionContainer}`}
        >
            <Container>
                <h1>Available Courses</h1>

                <Row xs={1} md={3} className={`${styles.rowContainer} g-4`}>
                    {courseLists.map((courseObj, index) => (
                        <Col key={`${index}-${uuidv4()}`}>
                            <Card>
                                <Card.Img variant='top' src={courseObj.image} />
                                <Card.Body>
                                    <Card.Title>{courseObj.code}</Card.Title>
                                    <Card.Text>{courseObj.subText}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
