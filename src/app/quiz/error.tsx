'use client';

import ErrorView from '@/components/ErrorView/ErrorView.component';
import { useEffect } from 'react';

type TErrorQuizPageProps = {
    error: Error | string;
};
export default function ErrorQuizPage({ error }: TErrorQuizPageProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return <ErrorView error={error} />;
}
