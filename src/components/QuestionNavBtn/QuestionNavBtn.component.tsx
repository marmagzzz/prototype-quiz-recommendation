import React from 'react';

import styles from './QuestionNavBtn.module.scss';

type TQuestionNavBtnProps = {
    'data-testid': string;
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export default function QuestionNavBtn({
    onClick,
    children,
    disabled,
    className,
    'data-testid': dataTestId,
}: TQuestionNavBtnProps) {
    return (
        <button
            data-testid={dataTestId}
            className={`${styles.questionNavBtn} rounded-circle ${
                className != undefined ? className : ''
            }`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
