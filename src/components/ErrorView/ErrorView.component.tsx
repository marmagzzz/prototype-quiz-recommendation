import { Container } from 'react-bootstrap';

import styles from './ErrorView.module.scss';

type ErrorViewProps = {
    error: string | Error;
};
export default function ErrorView({ error }: ErrorViewProps) {
    return (
        <Container
            data-testid='error-page'
            className={`${styles.errorPageContainer}`}
        >
            <p className={`${styles.errorMessage}`}>
                {typeof error == 'string' ? error : error.message}
            </p>
        </Container>
    );
}
