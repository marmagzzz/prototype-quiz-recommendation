import Link from 'next/link';

import styles from './StartQuizBtn.module.scss';

export default function StartQuizBtn() {
    return (
        <Link href={'/quiz'} className={`${styles.startQuizBtn}`}>
            Start Quiz
        </Link>
    );
}
