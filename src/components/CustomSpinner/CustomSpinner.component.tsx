import { Container, Spinner } from 'react-bootstrap';

import styles from './CustomSpinner.module.scss';

export default function CustomSpinner() {
    return (
        <Container
            data-testid='custom-spinner-container'
            className={`${styles.spinnerContainer}`}
        >
            <Spinner data-testid='custom-spinner' />
        </Container>
    );
}
