import React from 'react';

import styles from './QuestionNavBtn.module.scss';

type TQuestionNavBtnProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export default function QuestionNavBtn({
    onClick,
    children,
    disabled,
    className,
}: TQuestionNavBtnProps) {
    return (
        <button
            className={`${styles.questionNavBtn} ${className} rounded-circle`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
