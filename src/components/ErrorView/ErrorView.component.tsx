import { Container } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

import styles from './ErrorView.module.scss';

type ErrorViewProps = {
    error?: string | Error;
};
export default function ErrorView({
    error = 'Something went wrong',
}: ErrorViewProps) {
    const router = useRouter();

    const onClickOnGoBackBtn = () => {
        router.back();
    };

    return (
        <Container
            data-testid='error-page'
            className={`${styles.errorPageContainer}`}
        >
            <p className={`${styles.errorMessage}`}>
                {typeof error == 'string' ? error : error.message}
            </p>
            <a className={`${styles.errorCTA}`} onClick={onClickOnGoBackBtn}>
                Go back
            </a>
        </Container>
    );
}
