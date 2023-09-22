import Image from 'next/image';

import styles from './page.module.scss';
import HomeIntro from '@/components/HomeIntro/HomeIntro.component';
import CourseLists from '@/components/CourseLists/CourseLists.component';
import { COURSES } from '@/constants';

export default function Home() {
    return (
        <main className={styles.main}>
            <HomeIntro />
            <CourseLists courseLists={COURSES} />
        </main>
    );
}
